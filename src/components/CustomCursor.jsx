import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'button' | 'card' | 'link'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if mobile or touch screen
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target;
      if (target.closest('button') || target.tagName === 'BUTTON') {
        setCursorType('button');
      } else if (target.closest('.project-card') || target.closest('.feature-card')) {
        setCursorType('card');
      } else if (target.closest('a') || target.tagName === 'A' || target.closest('[role="button"]')) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isButton = cursorType === 'button';
  const isCard = cursorType === 'card';
  const isLink = cursorType === 'link';
  const isExpanded = isButton || isCard || isLink;

  return (
    <>
      {/* 1. Inner precise glowing neon dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-neon-lime mix-blend-screen"
        animate={{
          x: mousePosition.x - 3.5,
          y: mousePosition.y - 3.5,
          scale: isExpanded ? 0 : 1,
          opacity: isExpanded ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.1,
        }}
        style={{
          width: '7px',
          height: '7px',
          boxShadow: '0 0 10px #D9FF72, 0 0 20px #D9FF72',
        }}
      />

      {/* 2. Fluid trailing follower halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border backdrop-blur-[0.5px]"
        animate={{
          x: mousePosition.x - (isButton ? 26 : isCard ? 32 : isLink ? 20 : 16),
          y: mousePosition.y - (isButton ? 26 : isCard ? 32 : isLink ? 20 : 16),
          width: isButton ? 52 : isCard ? 64 : isLink ? 40 : 32,
          height: isButton ? 52 : isCard ? 64 : isLink ? 40 : 32,
          borderColor: isButton
            ? 'rgba(217, 255, 114, 0.9)'
            : isCard
            ? 'rgba(124, 58, 237, 0.8)'
            : isLink
            ? 'rgba(59, 130, 246, 0.8)'
            : 'rgba(124, 58, 237, 0.45)',
          backgroundColor: isButton
            ? 'rgba(217, 255, 114, 0.14)'
            : isCard
            ? 'rgba(124, 58, 237, 0.08)'
            : isLink
            ? 'rgba(59, 130, 246, 0.12)'
            : 'rgba(124, 58, 237, 0.03)',
          boxShadow: isButton
            ? '0 0 25px rgba(217, 255, 114, 0.5), inset 0 0 12px rgba(217, 255, 114, 0.25)'
            : isCard
            ? '0 0 30px rgba(124, 58, 237, 0.4), inset 0 0 15px rgba(124, 58, 237, 0.2)'
            : isLink
            ? '0 0 20px rgba(59, 130, 246, 0.4)'
            : '0 0 12px rgba(124, 58, 237, 0.25)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 280,
          mass: 0.15,
        }}
      />
    </>
  );
}
