import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, GitBranch, Users, Layers, Terminal, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Code2: Code2,
  GitBranch: GitBranch,
  Users: Users,
  Layers: Layers,
};

export default function BeyondCode() {
  const { beyondCode } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="beyond-code" className="relative py-24 lg:py-32 overflow-hidden">
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
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Activities & Initiatives</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-text tracking-tight mb-4"
          >
            Beyond the Code
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-muted max-w-xl"
          >
            Active engineering engagements, collaborative peer development, and continuous self-driven skill acceleration.
          </motion.p>
        </div>

        {/* 4 Activities Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {beyondCode.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Terminal;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -7, transition: { duration: 0.25 } }}
                className="feature-card group relative rounded-2xl p-6 sm:p-7 bg-background-card/85 border border-white/[0.08] hover:border-neon-lime/50 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_15px_35px_-10px_rgba(217,255,114,0.25)] flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top hover glow line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-neon-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 group-hover:text-neon-lime group-hover:border-neon-lime/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-muted group-hover:text-white group-hover:border-white/[0.15] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Activity Statement */}
                  <p className="text-sm sm:text-base text-slate-text leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-slate-subtle">
                  <span>ENGAGEMENT #{String(index + 1).padStart(2, '0')}</span>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-neon-lime group-hover:translate-x-1.5 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
