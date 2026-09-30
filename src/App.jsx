import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-slate-text selection:bg-purple-600/30 selection:text-neon-lime">
      {/* Dynamic Animated Ambient Background */}
      <AnimatedBackground />

      {/* Desktop Glow Cursor Tracker */}
      <CustomCursor />

      {/* Header Sticky Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <BeyondCode />
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
