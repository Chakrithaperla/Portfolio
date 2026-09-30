import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, PhoneCall, Linkedin, Github, Copy, Check, Sparkles, MessageSquare, ArrowUpRight, FileText, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact({ onOpenResume }) {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Slow-moving Glowing Gradient Aura behind Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/12 to-neon-lime/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

      {/* Flowing Background Neon Ribbons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,300 C300,150 600,450 1000,200 C1250,50 1400,350 1600,250"
            stroke="url(#contactNeonGrad1)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="animate-pulse-slow"
          />
          <path
            d="M-100,450 C400,600 700,250 1100,500 C1300,650 1500,400 1600,450"
            stroke="url(#contactNeonGrad2)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="contactNeonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#D9FF72" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="contactNeonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Section Top Divider Glow */}
      <div className="section-divider mb-20 max-w-4xl mx-auto" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-5 shadow-[0_0_15px_rgba(124,58,237,0.3)] backdrop-blur-md"
          >
            <MessageSquare className="w-3.5 h-3.5 text-neon-lime" />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-text tracking-tight mb-4"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-lg sm:text-xl font-medium bg-gradient-to-r from-purple-300 via-indigo-200 to-neon-lime bg-clip-text text-transparent mb-3 font-display"
          >
            Let's build something meaningful.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base text-slate-muted max-w-lg leading-relaxed"
          >
            I'm always interested in learning, building, and contributing to real-world software products.
          </motion.p>
        </div>

        {/* 4 Premium Glassmorphism Contact Cards in 2x2 Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-14"
        >
          {/* 1. 📧 EMAIL CARD */}
          <motion.a
            href={`mailto:${personal.email}`}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="feature-card group relative rounded-3xl p-6 sm:p-7 bg-background-card/90 border border-white/[0.08] hover:border-purple-500/60 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_20px_45px_-10px_rgba(124,58,237,0.4)] flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Ambient Radial Spotlight */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-600/15 rounded-full blur-2xl group-hover:bg-purple-600/30 transition-all duration-300 pointer-events-none" />

            <div>
              {/* Header Row: Icon, Tag & Copy Button */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-950/70 group-hover:text-neon-lime group-hover:border-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                      Email
                    </span>
                    <span className="block text-[10px] font-mono text-slate-subtle">
                      Direct Communication
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-muted hover:text-white transition-all z-10"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-neon-lime" />
                      <span className="text-neon-lime font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Text */}
              <div className="pt-2">
                <p className="text-base sm:text-lg font-semibold text-white group-hover:text-neon-lime transition-colors font-mono break-all">
                  {personal.email}
                </p>
              </div>
            </div>

            {/* Bottom Action Hint */}
            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-subtle">
              <span>mailto:send-email</span>
              <span className="text-purple-400 group-hover:text-neon-lime flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>

          {/* 2. 📱 PHONE CARD */}
          <motion.a
            href={`tel:${personal.phoneClean}`}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="feature-card group relative rounded-3xl p-6 sm:p-7 bg-background-card/90 border border-white/[0.08] hover:border-cyan-400/60 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_20px_45px_-10px_rgba(6,182,212,0.4)] flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-600/15 rounded-full blur-2xl group-hover:bg-cyan-600/30 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-950/70 group-hover:text-neon-lime group-hover:border-cyan-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                      Phone
                    </span>
                    <span className="block text-[10px] font-mono text-slate-subtle">
                      Voice / Mobile
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-muted hover:text-white transition-all z-10"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-neon-lime" />
                      <span className="text-neon-lime font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2">
                <p className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors font-mono">
                  {personal.phone}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-subtle">
              <span>tel:direct-call</span>
              <span className="text-cyan-400 group-hover:text-neon-lime flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </span>
            </div>
          </motion.a>

          {/* 3. 💼 LINKEDIN CARD */}
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="feature-card group relative rounded-3xl p-6 sm:p-7 bg-background-card/90 border border-white/[0.08] hover:border-indigo-500/60 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_20px_45px_-10px_rgba(99,102,241,0.4)] flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-600/15 rounded-full blur-2xl group-hover:bg-indigo-600/30 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-950/70 group-hover:text-neon-lime group-hover:border-indigo-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                      LinkedIn
                    </span>
                    <span className="block text-[10px] font-mono text-slate-subtle">
                      Professional Network
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-500/30">
                  Connect ↗
                </span>
              </div>

              <div className="pt-2">
                <p className="text-base sm:text-lg font-semibold text-white group-hover:text-neon-lime transition-colors font-mono truncate">
                  linkedin.com/in/perla-chakritha-b4504b380
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-subtle">
              <span>network:linkedin</span>
              <span className="text-indigo-400 group-hover:text-neon-lime flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>

          {/* 4. 💻 GITHUB CARD */}
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="feature-card group relative rounded-3xl p-6 sm:p-7 bg-background-card/90 border border-white/[0.08] hover:border-neon-lime/60 backdrop-blur-2xl transition-all duration-300 shadow-glass hover:shadow-[0_20px_45px_-10px_rgba(217,255,114,0.35)] flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-neon-lime via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-neon-lime/10 rounded-full blur-2xl group-hover:bg-neon-lime/25 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-neon-lime/10 border border-neon-lime/30 text-neon-lime group-hover:bg-slate-950 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neon-lime">
                      GitHub
                    </span>
                    <span className="block text-[10px] font-mono text-slate-subtle">
                      Source Repositories
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-neon-lime bg-neon-lime/10 px-2.5 py-1 rounded-full border border-neon-lime/30">
                  Repos ↗
                </span>
              </div>

              <div className="pt-2">
                <p className="text-base sm:text-lg font-semibold text-white group-hover:text-neon-lime transition-colors font-mono truncate">
                  github.com/Chakrithaperla
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-subtle">
              <span>code:repositories</span>
              <span className="text-neon-lime flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* Centered [ DOWNLOAD RESUME ] Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center pt-4"
        >
          <button
            onClick={onOpenResume}
            className="group animated-gradient-border p-[1.5px] rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_45px_rgba(217,255,114,0.5)]"
          >
            <div className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-background-cardSolid text-slate-text font-semibold text-sm sm:text-base group-hover:bg-background-card group-hover:text-white transition-colors duration-300 backdrop-blur-md font-display tracking-wider uppercase">
              <FileText className="w-5 h-5 text-purple-400 group-hover:text-neon-lime transition-colors" />
              <span>DOWNLOAD RESUME</span>
              <ArrowRight className="w-4 h-4 text-neon-lime group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </button>
          <p className="text-xs font-mono text-slate-subtle mt-3">
            View full curriculum vitae in interactive modal / PDF print
          </p>
        </motion.div>
      </div>
    </section>
  );
}
