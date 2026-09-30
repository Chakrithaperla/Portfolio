import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Sparkles, Layers, Cpu, Database, Server } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-background-cardSolid/95 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(124,58,237,0.4)] backdrop-blur-2xl z-10 my-8 overflow-hidden"
        >
          {/* Top Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-neon-lime/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-muted hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-bold text-neon-lime px-2.5 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-purple-300 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-slate-muted mb-6">
            {project.tagline}
          </p>

          {/* Body Content */}
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {/* Overview */}
            <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neon-lime" />
                Project Overview
              </h4>
              <p className="text-sm text-slate-text leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Core Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-text p-2.5 rounded-lg bg-background-alt/80 border border-white/[0.05]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-neon-lime shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Contribution */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                My Direct Contributions
              </h4>
              <div className="space-y-2">
                {project.contributions.map((contrib, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-xs text-slate-muted p-2 rounded-lg bg-white/[0.02] border-l-2 border-purple-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-lime" />
                    <span className="text-slate-text">{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-3 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-neon-lime" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neon-lime hover:bg-[#cbf759] text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(217,255,114,0.4)] transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-muted hover:text-white px-4 py-2"
            >
              Close [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
