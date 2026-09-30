import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, GraduationCap, Code2, Briefcase, Mail, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, education, skillCategories, projects, beyondCode } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-950 border border-purple-500/40 rounded-3xl shadow-[0_25px_60px_-15px_rgba(124,58,237,0.4)] backdrop-blur-2xl z-10 my-6 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-lime animate-pulse" />
              <h3 className="text-base font-bold font-display text-white">
                Perla Chakritha — Professional Curriculum Vitae
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-muted hover:text-white transition-all"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-muted hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-text font-sans">
            {/* Document Header */}
            <div className="border-b border-white/[0.1] pb-6">
              <h1 className="text-3xl font-bold font-display text-white tracking-tight">
                {personal.name}
              </h1>
              <p className="text-sm font-semibold text-purple-400 mt-1">
                {personal.role}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-muted mt-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-neon-lime" /> {personal.email}
                </span>
                <span>•</span>
                <a href={`tel:${personal.phoneClean}`} className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" /> {personal.phone}
                </a>
                <span>•</span>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-indigo-300 transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-400" /> linkedin.com/in/perla-chakritha
                </a>
                <span>•</span>
                <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-purple-300 transition-colors">
                  <Github className="w-3.5 h-3.5 text-purple-400" /> github.com/Chakrithaperla
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-lime font-bold mb-2">
                // SUMMARY
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {personal.shortIntro}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-lime font-bold mb-3">
                // EDUCATION
              </h2>
              <div className="space-y-4">
                {education.timeline.map((edu, idx) => (
                  <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-bold text-white">{edu.degree} — {edu.specialization}</h3>
                        <p className="text-xs text-purple-300">{edu.institution} ({edu.program})</p>
                      </div>
                      <span className="text-xs font-mono text-slate-muted">{edu.year}</span>
                    </div>
                  </div>
                ))}

                {/* Academic Scores */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {education.academics.map((ac, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex justify-between items-center">
                      <span className="text-xs font-mono text-slate-muted">{ac.level}</span>
                      <span className="text-sm font-bold font-mono text-neon-lime">{ac.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-lime font-bold mb-3">
                // TECHNICAL SKILLS
              </h2>
              <div className="space-y-2">
                {skillCategories.map((cat) => (
                  <div key={cat.name} className="text-xs flex flex-wrap gap-2 items-center">
                    <span className="font-semibold text-purple-300 min-w-[170px] font-mono">{cat.name}:</span>
                    <span className="text-slate-300">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-lime font-bold mb-3">
                // SELECTED PROJECTS
              </h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{proj.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
                          {proj.category}
                        </span>
                      </h3>
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noreferrer" className="text-xs text-neon-lime font-mono underline">
                          Live Demo ↗
                        </a>
                      )}
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noreferrer" className="text-xs text-purple-300 font-mono underline">
                          GitHub ↗
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-300">{proj.description}</p>
                    <div className="pt-2 text-xs">
                      <span className="text-slate-subtle font-mono">Tech Stack: </span>
                      <span className="text-slate-300">{proj.techStack.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond the Code */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neon-lime font-bold mb-2">
                // ACTIVITIES & INITIATIVES
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                {beyondCode.map((act) => (
                  <li key={act.id}>{act.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
