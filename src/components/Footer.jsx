import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-white/[0.06] pt-14 pb-12 overflow-hidden">
      {/* Animated glowing neon wave line separator above footer */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500 via-neon-lime to-transparent opacity-80 shadow-[0_0_15px_#D9FF72]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.05]">
          {/* Left: Name & Role */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-display text-white tracking-tight">
              {personal.name}
            </h3>
            <p className="text-xs font-mono text-purple-300 mt-0.5">
              {personal.role}
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-6 text-sm font-mono text-slate-muted">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-neon-lime transition-colors hover:scale-105"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-subtle">|</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-neon-lime transition-colors hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Right: Scroll to top with spring animation */}
          <div>
            <motion.button
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-purple-950/60 border border-white/[0.08] hover:border-purple-500/50 text-slate-muted hover:text-neon-lime transition-all duration-300 shadow-glass"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-subtle gap-2">
          <p>© 2026 Perla Chakritha. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-subtle">
            Engineered with modern React & futuristic dark aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
}
