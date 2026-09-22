import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navbar highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'services', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-amber-500500/20 selection:text-amber-500300">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area with all requested sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill for Quick Client Connectivity */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          id="floating-whatsapp-btn"
          href={personalInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 hover:-translate-y-1 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline font-sans">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
