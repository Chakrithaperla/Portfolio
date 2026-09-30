import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
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
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(124,58,237,0.3)]"
          >
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-text tracking-tight mb-4"
          >
            Education & Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-muted max-w-xl"
          >
            Formally training in software product engineering with a track record of academic excellence.
          </motion.p>
        </div>

        {/* Timeline & Scores Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Degree Timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 sm:pl-10 border-l-2 border-purple-500/30 space-y-12">
              {education.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group feature-card"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-6 h-6 rounded-full bg-background-cardSolid border-2 border-neon-lime flex items-center justify-center shadow-[0_0_15px_#D9FF72] group-hover:scale-125 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-neon-lime animate-ping" />
                  </div>

                  {/* Degree Card */}
                  <div className="rounded-2xl p-7 bg-background-card/90 border border-white/[0.08] hover:border-purple-500/50 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_15px_35px_-10px_rgba(124,58,237,0.35)] group-hover:-translate-y-1">
                    {/* Top Row: Year & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-neon-lime font-bold bg-neon-lime/10 px-3 py-1 rounded-full border border-neon-lime/30 shadow-[0_0_10px_rgba(217,255,114,0.2)]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.year}</span>
                      </div>
                      <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded border border-purple-500/30">
                        {item.status}
                      </span>
                    </div>

                    {/* Degree & Specialization */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1 group-hover:text-neon-lime transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300 mb-3">
                      Specialization in {item.specialization}
                    </p>

                    {/* Institution */}
                    <div className="flex items-center gap-2 text-xs text-slate-muted mb-4 font-mono">
                      <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{item.institution}</span>
                      <span className="text-slate-subtle">•</span>
                      <span>{item.program}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-muted leading-relaxed pt-3 border-t border-white/[0.06]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Scores Card */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl p-6 sm:p-7 bg-background-card/90 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-2xl shadow-glass transition-all"
            >
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-white/[0.08]">
                <div className="p-2 rounded-lg bg-neon-lime/10 text-neon-lime">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base font-display text-white">
                  Academic Performance
                </h3>
              </div>

              <div className="space-y-4">
                {education.academics.map((academic, i) => (
                  <div
                    key={i}
                    className="group/item relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-neon-lime/50 hover:bg-white/[0.04] transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-mono text-slate-muted uppercase tracking-wider mb-1">
                        {academic.level}
                      </p>
                      <p className="text-[11px] text-slate-subtle">Secondary & Higher Secondary</p>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight bg-gradient-to-r from-neon-lime via-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover/item:scale-110 inline-block transition-transform duration-300 drop-shadow-[0_0_10px_rgba(217,255,114,0.3)]">
                        {academic.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-slate-subtle">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-lime" />
                <span>Verified Academic Credentials</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
