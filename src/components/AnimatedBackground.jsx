import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates for subtle parallax (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle floating glowing particles
    const particleCount = Math.min(width < 768 ? 20 : 45, 55);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseRadius: Math.random() * 1.5 + 0.5,
      radius: Math.random() * 1.5 + 0.5,
      color:
        Math.random() > 0.65
          ? '#7C3AED' // purple
          : Math.random() > 0.35
          ? '#3B82F6' // blue
          : Math.random() > 0.15
          ? '#06B6D4' // cyan
          : '#D9FF72', // neon-lime
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
      fadeSpeed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
    }));

    let step = 0;

    const render = () => {
      step += 0.006;
      ctx.clearRect(0, 0, width, height);

      // Subtle cybernetic background grid
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
      ctx.lineWidth = 1;
      const gridSize = 70;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Flowing Neon Curves (sinusoidal ribbon paths with glow)
      const drawFlowingCurve = (offsetRatio, amplitude, freq, speed, color, widthSize, blurSize) => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthSize;
        ctx.shadowColor = color;
        ctx.shadowBlur = blurSize;
        ctx.lineCap = 'round';

        const baseOffsetY = height * offsetRatio;

        for (let x = 0; x <= width; x += 8) {
          const wave1 = Math.sin(x * freq + step * speed) * amplitude;
          const wave2 = Math.cos(x * (freq * 0.6) + step * (speed * 0.7)) * (amplitude * 0.45);
          const y = baseOffsetY + wave1 + wave2;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      };

      // Flowing Neon Line 1: Glowing Violet Ribbon
      drawFlowingCurve(0.28, 75, 0.0016, 1.1, 'rgba(124, 58, 237, 0.35)', 2.5, 18);

      // Flowing Neon Line 2: Electric Indigo / Cyan Ribbon
      drawFlowingCurve(0.48, 85, 0.0019, 0.85, 'rgba(99, 102, 241, 0.3)', 2, 16);

      // Flowing Neon Line 3: Radiant Blue Ribbon
      drawFlowingCurve(0.68, 90, 0.0022, 1.3, 'rgba(59, 130, 246, 0.32)', 2, 20);

      // Flowing Neon Line 4: Cyber Neon-Lime Highlight Ribbon
      drawFlowingCurve(0.84, 55, 0.0028, 1.0, 'rgba(217, 255, 114, 0.22)', 1.5, 14);

      // Render Floating Glowing Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.fadeSpeed;

        if (p.alpha <= 0.1 || p.alpha >= 0.7) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.05, Math.min(0.8, p.alpha));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Dynamic Animated Blurred Gradient Orbs reacting to Mouse Parallax */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-purple-600/25 rounded-full blur-[140px] pointer-events-none animate-orb-1"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none animate-orb-2"
        style={{
          transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        className="absolute -bottom-36 left-1/3 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none animate-orb-3"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-neon-lime/8 rounded-full blur-[120px] pointer-events-none animate-orb-1"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* HTML5 Canvas for flowing neon curves and glowing particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block opacity-90" />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.75)_100%)] pointer-events-none" />
    </div>
  );
}
