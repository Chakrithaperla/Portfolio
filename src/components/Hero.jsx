import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, FileText, Sparkles, FolderGit2, ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import HeroVisual from './HeroVisual';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Staggered Entrance Elements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* 1. Badge Slides & Fades In */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono font-medium uppercase tracking-wider shadow-[0_0_15px_rgba(124,58,237,0.3)] mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-neon-lime shadow-[0_0_8px_#D9FF72] animate-ping" />
                <span>{personal.badge}</span>
              </div>
            </motion.div>

            {/* 2. Main Heading Line-by-Line Reveal */}
            <motion.div variants={itemVariants} className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-slate-text leading-[1.08] mb-6 font-display">
                <span className="block text-slate-300 font-normal">{personal.heroHeadline}</span>
                <span className="block bg-gradient-to-r from-purple-400 via-indigo-300 via-blue-400 to-neon-lime bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(124,58,237,0.4)]">
                  {personal.shortName}.
                </span>
              </h1>
            </motion.div>

            {/* 3. Description Fades Upward */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg md:text-xl text-slate-muted max-w-2xl leading-relaxed mb-8 font-normal">
                {personal.heroSubtitle}
              </p>
            </motion.div>

            {/* 4. Action Buttons with Animated Gradient Borders & Sliding Arrow */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              {/* Button 1: View Projects */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-neon-lime hover:bg-[#cbf759] shadow-[0_0_25px_rgba(217,255,114,0.4)] hover:shadow-[0_0_40px_rgba(217,255,114,0.7)] hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              {/* Button 2: Download Resume with Animated Border */}
              <a
                href="/Perla_Chakritha_Resume.pdf"
                download="Perla_Chakritha_Resume.pdf"
                className="group animated-gradient-border p-[1.5px] rounded-xl hover:scale-[1.03] transition-transform duration-300 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-background-cardSolid text-slate-text font-medium text-sm group-hover:bg-background-card group-hover:text-white transition-colors duration-300 backdrop-blur-md">
                  <FileText className="w-4 h-4 text-purple-400 group-hover:text-neon-lime transition-colors" />
                  <span>Download Resume</span>
                </div>
              </a>
            </motion.div>

            {/* 5. Social Icons Appear Afterward */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-6 border-t border-white/[0.08] w-full max-w-md"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-subtle">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-purple-900/30 border border-white/[0.08] hover:border-purple-500/40 text-xs text-slate-muted hover:text-white transition-all duration-300 group hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400 group-hover:text-neon-lime transition-colors" />
                  <span>GitHub</span>
                  <ArrowRight className="w-3 h-3 text-slate-subtle group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-indigo-900/30 border border-white/[0.08] hover:border-indigo-500/40 text-xs text-slate-muted hover:text-white transition-all duration-300 group hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-indigo-400 group-hover:text-neon-lime transition-colors" />
                  <span>LinkedIn</span>
                  <ArrowRight className="w-3 h-3 text-slate-subtle group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-subtle cursor-pointer hover:text-neon-lime transition-colors"
        onClick={handleScrollToProjects}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-neon-lime" />
        </motion.div>
      </motion.div>
    </section>
  );
}
