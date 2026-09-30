import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Cpu, Sparkles } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';

export default function HeroVisual() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 20;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 20;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[530px] aspect-square flex items-center justify-center mx-auto select-none feature-card group"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/35 via-indigo-500/25 to-neon-lime/20 rounded-full blur-[85px] pointer-events-none" />

      {/* Cybernetic Outer Orbit Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
        }}
        className="absolute w-[94%] h-[94%] rounded-full border border-dashed border-purple-500/30 shadow-[0_0_25px_rgba(124,58,237,0.2)] flex items-center justify-center pointer-events-none"
      >
        {/* Orbit Node with Pulse */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background-card border border-neon-lime flex items-center justify-center shadow-[0_0_15px_#D9FF72]">
          <span className="w-2 h-2 rounded-full bg-neon-lime animate-ping" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-background-card border border-cyan-400 flex items-center justify-center shadow-[0_0_12px_#22d3ee]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </div>
      </motion.div>

      {/* Cybernetic Mid Orbit Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{
          transform: `translate3d(${mouseOffset.x * 0.7}px, ${mouseOffset.y * 0.7}px, 0)`,
        }}
        className="absolute w-[78%] h-[78%] rounded-full border border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.25)] flex items-center justify-center pointer-events-none"
      >
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-background-card border border-blue-400 flex items-center justify-center shadow-[0_0_12px_#60a5fa]">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        </div>
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-background-card border border-purple-400 flex items-center justify-center shadow-[0_0_12px_#c084fc]">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        </div>
      </motion.div>

      {/* Center Professional Profile Photo with Integrated Glow & Gradient Rings */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative z-10"
      >
        <ProfilePhoto mouseOffset={mouseOffset} />
      </div>

      {/* Floating Interactive Badge 1 - Architecture */}
      <motion.div
        animate={{ y: [-7, 7, -7], x: [-3, 3, -3] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transform: `translate3d(${mouseOffset.x * 1.6}px, ${mouseOffset.y * 1.6}px, 0)`,
        }}
        className="absolute -top-3 left-3 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-background-card/95 border border-purple-500/40 backdrop-blur-xl shadow-glass shadow-purple-900/30 hover:border-neon-lime transition-colors"
      >
        <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
          <Layers className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-muted">Architecture</p>
          <p className="text-xs font-semibold text-white">Full-Stack MERN</p>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 2 - Backend */}
      <motion.div
        animate={{ y: [7, -7, 7], x: [3, -3, 3] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{
          transform: `translate3d(${mouseOffset.x * 1.8}px, ${mouseOffset.y * 1.8}px, 0)`,
        }}
        className="absolute top-1/4 -right-5 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-background-card/95 border border-blue-500/40 backdrop-blur-xl shadow-glass shadow-blue-900/30 hover:border-cyan-400 transition-colors"
      >
        <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
          <Server className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-muted">Backend</p>
          <p className="text-xs font-semibold text-white">RESTful APIs</p>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 3 - Persistence */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        style={{
          transform: `translate3d(${mouseOffset.x * 1.5}px, ${mouseOffset.y * 1.5}px, 0)`,
        }}
        className="absolute -bottom-4 right-5 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-background-card/95 border border-neon-lime/40 backdrop-blur-xl shadow-glass shadow-lime-900/30 hover:border-neon-lime transition-colors"
      >
        <div className="p-1.5 rounded-lg bg-neon-lime/20 text-neon-lime">
          <Database className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-muted">Persistence</p>
          <p className="text-xs font-semibold text-white">MongoDB & Prisma</p>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 4 - AI Integration */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        style={{
          transform: `translate3d(${mouseOffset.x * 1.7}px, ${mouseOffset.y * 1.7}px, 0)`,
        }}
        className="absolute bottom-12 -left-5 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-background-card/95 border border-indigo-500/40 backdrop-blur-xl shadow-glass shadow-indigo-900/30 hover:border-indigo-400 transition-colors"
      >
        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-muted">Integration</p>
          <p className="text-xs font-semibold text-white">AI / OpenRouter</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
