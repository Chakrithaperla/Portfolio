import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Beyond Code', href: '#beyond-code' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        isScrolled
          ? 'py-3.5 bg-background/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1.5 text-2xl font-bold font-mono tracking-wider text-slate-text"
        >
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent group-hover:from-neon-lime group-hover:to-cyan-400 transition-all duration-300">
            {portfolioData.personal.initials}
          </span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-neon-lime shadow-[0_0_10px_#D9FF72] animate-pulse" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-background-card/90 border border-white/[0.08] px-3.5 py-1.5 rounded-full backdrop-blur-xl shadow-glass">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-muted hover:text-slate-text hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/35 to-indigo-600/35 border border-purple-500/50 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.35)] -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl text-slate-muted hover:text-neon-lime hover:bg-white/[0.06] transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl text-slate-muted hover:text-neon-lime hover:bg-white/[0.06] transition-all hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-text bg-gradient-to-r from-purple-600/30 to-indigo-600/30 hover:from-purple-600 hover:to-indigo-600 border border-purple-500/50 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.2)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 text-neon-lime group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-background-card border border-white/[0.1] text-slate-text hover:text-neon-lime transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-alt/95 backdrop-blur-2xl border-b border-white/[0.1] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-purple-600/20 text-neon-lime border-l-2 border-neon-lime'
                      : 'text-slate-muted hover:text-slate-text hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-muted hover:text-neon-lime"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-muted hover:text-neon-lime"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-purple-600 text-white flex items-center gap-1"
                >
                  Contact <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
