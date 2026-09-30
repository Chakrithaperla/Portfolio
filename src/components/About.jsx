import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Rocket, Sparkles, Terminal, Code, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const icons = [Layers, Server, Rocket];

export default function About() {
  const { personal, aboutFeatures } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Section Top Divider Glow */}
      <div className="section-divider mb-20 max-w-5xl mx-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(99,102,241,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>About The Developer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-text tracking-tight leading-tight mb-6"
          >
            {personal.aboutHeading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-muted leading-relaxed"
          >
            {personal.aboutDescription}
          </motion.p>
        </div>

        {/* 3 Interactive Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {aboutFeatures.map((feature, idx) => {
            const Icon = icons[idx] || Code;
            return (
              <motion.div
                key={feature.number}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="feature-card group relative rounded-2xl p-7 bg-background-card/90 border border-white/[0.08] hover:border-purple-500/60 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_15px_40px_-5px_rgba(124,58,237,0.35)] flex flex-col justify-between overflow-hidden"
              >
                {/* Radial spotlight on card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-neon-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Accent Gradient Bar */}
                <div
                  className="absolute inset-x-0 top-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      idx === 0
                        ? 'linear-gradient(to right, #7C3AED, #6366F1)'
                        : idx === 1
                        ? 'linear-gradient(to right, #6366F1, #3B82F6)'
                        : 'linear-gradient(to right, #3B82F6, #D9FF72)',
                  }}
                />

                <div className="relative z-10">
                  {/* Top row: Number and Animated Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter bg-gradient-to-br from-white/40 via-white/10 to-transparent bg-clip-text text-transparent group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                      {feature.number}
                    </span>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:bg-purple-950/60 group-hover:border-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5 text-purple-400 group-hover:text-neon-lime transition-colors" />
                    </div>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white mb-3 group-hover:text-neon-lime transition-colors">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-sm text-slate-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom decorative cyber bar */}
                <div className="relative z-10 mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-subtle">
                  <span>SPE.ARCH // {feature.number}</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-neon-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
