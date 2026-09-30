import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Database, ShieldCheck, Cpu, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryIcons = {
  Languages: Code,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  'Authentication & Tools': ShieldCheck,
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Section Top Divider Glow */}
      <div className="section-divider mb-20 max-w-5xl mx-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(124,58,237,0.3)]"
          >
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Core Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-text tracking-tight mb-4"
          >
            Technical Arsenal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-muted max-w-xl"
          >
            A curated collection of languages, frameworks, databases, and engineering tools applied across real-world software products and academic architectures.
          </motion.p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? 'text-slate-950 bg-neon-lime shadow-[0_0_25px_rgba(217,255,114,0.5)] font-bold scale-105'
                    : 'text-slate-muted bg-background-card/80 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {displayedCategories.map((categoryGroup, groupIdx) => {
              const IconComponent = categoryIcons[categoryGroup.name] || Terminal;
              return (
                <motion.div
                  key={categoryGroup.name}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: groupIdx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="feature-card group relative rounded-2xl p-6 bg-background-card/85 border border-white/[0.08] hover:border-purple-500/50 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_15px_35px_-5px_rgba(124,58,237,0.3)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top neon border animation line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-400 to-neon-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-950/60 group-hover:text-neon-lime transition-all duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-semibold text-base font-display text-white tracking-wide group-hover:text-neon-lime transition-colors">
                          {categoryGroup.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-slate-subtle bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                        {categoryGroup.skills.length} techs
                      </span>
                    </div>

                    {/* Glowing Skills Pills with Hover Physics */}
                    <div className="flex flex-wrap gap-2.5">
                      {categoryGroup.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ y: -4, scale: 1.06 }}
                          transition={{ type: 'spring', stiffness: 450, damping: 18 }}
                          className="group/pill relative cursor-default px-3.5 py-2 rounded-xl bg-background-alt/90 border border-white/[0.08] hover:border-neon-lime/70 hover:shadow-[0_0_15px_rgba(217,255,114,0.3)] transition-all duration-200 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/pill:bg-neon-lime group-hover/pill:shadow-[0_0_8px_#D9FF72] transition-colors" />
                          <span className="text-xs font-mono font-medium text-slate-text group-hover/pill:text-white transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom category meta footer */}
                  <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-subtle">
                    <span>STATUS: VERIFIED</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-neon-lime" /> Active
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
