import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function ProfilePhoto({ mouseOffset = { x: 0, y: 0 } }) {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const photoSrc = portfolioData.personal.profileImage || '/profile.svg';

  return (
    <div className="relative flex items-center justify-center">
      {/* 1. Background Ambient Radial Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/40 via-indigo-500/30 to-neon-lime/25 rounded-full blur-2xl pointer-events-none group-hover:blur-3xl transition-all duration-500" />

      {/* 2. Rotating Subtle Gradient Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 via-blue-500 to-neon-lime opacity-75 group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(217,255,114,0.5)] transition-all duration-300"
      />

      {/* 3. Outer Glassmorphism & Neon Border Container */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-[3px] bg-background-cardSolid/90 backdrop-blur-2xl border border-white/[0.12] group-hover:border-purple-400/80 shadow-[0_0_30px_rgba(124,58,237,0.35)] group-hover:shadow-[0_0_45px_rgba(124,58,237,0.6)] transition-all duration-300 overflow-hidden cursor-pointer"
      >
        {/* Inner Photo Display Container */}
        <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center">
          {!imageError ? (
            <img
              src={photoSrc}
              alt={portfolioData.personal.name}
              onError={() => setImageError(true)}
              onLoad={() => setIsLoaded(true)}
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
            />
          ) : (
            // Elegant High-Tech Fallback Avatar Placeholder
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-950/80 via-slate-950 to-indigo-950 p-4 text-center">
              {/* Internal subtle grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:14px_14px]" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-900/50 border border-purple-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)] mb-3">
                  <Terminal className="w-8 h-8 text-neon-lime drop-shadow-[0_0_8px_#D9FF72]" />
                </div>
                <span className="text-xl font-bold font-display tracking-wider text-white">
                  {portfolioData.personal.initials}
                </span>
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest mt-1">
                  Full-Stack Dev
                </span>
              </div>
            </div>
          )}

          {/* Subtle Cyber Light Sweep on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Small Bottom Status Dot */}
        <div className="absolute bottom-3 right-8 px-2 py-0.5 rounded-full bg-slate-950/90 border border-neon-lime/60 flex items-center gap-1.5 shadow-[0_0_10px_rgba(217,255,114,0.4)]">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-ping" />
          <span className="text-[9px] font-mono font-bold text-neon-lime tracking-wider">ACTIVE</span>
        </div>
      </motion.div>
    </div>
  );
}
