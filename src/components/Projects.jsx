import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, FolderGit2, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Section Top Divider Glow */}
      <div className="section-divider mb-20 max-w-5xl mx-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Featured Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-text tracking-tight mb-4"
          >
            Selected Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-muted max-w-2xl"
          >
            Real-world full-stack architectures engineered with authentication, scalable databases, REST APIs, and modern responsive user experiences.
          </motion.p>
        </div>

        {/* Project Cards Grid with Sequential Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const isFirst = index === 0;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -9, transition: { duration: 0.25 } }}
                className="project-card group relative rounded-3xl bg-background-card/90 border border-white/[0.08] hover:border-purple-500/60 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_20px_50px_-10px_rgba(124,58,237,0.4)] flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header Mockup / Accent Banner */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-purple-950/40 via-indigo-950/30 to-background-alt border-b border-white/[0.06] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Decorative Cyber Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Ambient Pulsating Glow */}
                  <div
                    className={`absolute -top-12 -right-12 w-52 h-52 rounded-full blur-[60px] pointer-events-none transition-all duration-500 ${
                      isFirst
                        ? 'bg-purple-600/30 group-hover:bg-purple-600/60 group-hover:scale-125'
                        : 'bg-neon-lime/20 group-hover:bg-neon-lime/50 group-hover:scale-125'
                    }`}
                  />

                  {/* Top Bar: Number & Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tighter text-white/20 group-hover:text-neon-lime group-hover:drop-shadow-[0_0_12px_#D9FF72] transition-all duration-300">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-background/80 border border-white/[0.1] text-purple-300 backdrop-blur-md group-hover:border-purple-500/40 group-hover:text-white transition-colors">
                      {project.badge}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="relative z-10">
                    <div className="inline-block px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-slate-muted mb-1.5">
                      {project.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-neon-lime transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  {/* Description */}
                  <p className="text-sm text-slate-muted leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-neon-lime" />
                      Key Highlights:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-slate-text bg-white/[0.02] p-2 rounded-lg border border-white/[0.04] group-hover:border-white/[0.08] transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-neon-lime shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills with subtle hover reaction */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-muted group-hover:text-slate-text group-hover:border-purple-500/30 hover:!border-neon-lime hover:!text-neon-lime transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Buttons */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-purple-900/50 border border-white/[0.1] hover:border-purple-500/50 text-white hover:scale-105 transition-all duration-200 shadow-sm"
                        >
                          <Github className="w-3.5 h-3.5 text-purple-400" />
                          <span>View GitHub</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-neon-lime hover:bg-[#cbf759] text-slate-950 shadow-[0_0_15px_rgba(217,255,114,0.4)] hover:shadow-[0_0_25px_rgba(217,255,114,0.7)] hover:scale-105 transition-all duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-muted hover:text-neon-lime transition-colors py-2 px-1"
                    >
                      <span>Explore Specs</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
