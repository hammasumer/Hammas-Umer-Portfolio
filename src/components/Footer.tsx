import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, MessageSquare, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#080c14] border-t border-slate-800/80 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-slate-800/60">
          
          {/* Brand & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500500/20 via-slate-800 to-amber-500/20 border border-amber-500500/30 flex items-center justify-center text-amber-500400 font-mono font-bold text-sm">
                HU
              </div>
              <div>
                <span className="font-bold text-white text-base block">{personalInfo.name}</span>
                <span className="text-xs text-slate-400 font-mono">{personalInfo.role}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Crafting high-speed, custom WordPress & WooCommerce platforms and modern React.js frontend interfaces with clean code and dedicated attention to detail.
            </p>

            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="font-mono text-amber-500400">4Y WordPress</span>
              <span>•</span>
              <span className="font-mono text-amber-400">1Y React.js</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-slate-400 hover:text-amber-500400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-amber-500400 transition-colors">
                  Skills & Tech
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-amber-500400 transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500400 transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-amber-500400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-amber-500400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Actions (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Connect Directly</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500400" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="text-slate-400 hover:text-amber-400 flex items-center gap-2 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{personalInfo.phone}</span>
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 flex items-center gap-2 transition-colors font-mono"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>WhatsApp (+92 313 491418)</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500400 hover:border-slate-700 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500400 hover:border-slate-700 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">{personalInfo.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-500">
              Clean Code • Fast Performance
            </span>

            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all flex items-center gap-1.5 font-medium"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-500400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
