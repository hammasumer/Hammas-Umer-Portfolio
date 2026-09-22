import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, User, Globe, Code, Zap, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const corePrinciples = [
    {
      title: 'Clean & Maintainable Code',
      desc: 'Writing structured, readable components and templates that are straightforward to scale and maintain.'
    },
    {
      title: 'Performance & Speed First',
      desc: 'Optimizing media, reducing unnecessary bloat, and ensuring high PageSpeed and Core Web Vitals scores.'
    },
    {
      title: 'Responsive & Accessible',
      desc: 'Crafting fluid layouts tested across real mobile devices, tablets, laptops, and varied screen sizes.'
    },
    {
      title: 'SEO & Growth Foundation',
      desc: 'Integrating semantic HTML, meta markup, and social share data so content ranks cleanly on Google.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500500/10 border border-amber-500500/20 text-amber-500400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Developer Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500500 to-amber-400 rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Professional Summary (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                WordPress Specialist & Frontend Developer
              </h3>

              <p className="text-slate-300 leading-relaxed text-base">
                I am a web developer with <strong className="text-amber-500400 font-semibold">4 years of dedicated WordPress experience</strong> delivering custom websites, Elementor layouts, WooCommerce stores, and performance-tuned pages.
              </p>

              <p className="text-slate-300 leading-relaxed text-base mt-4">
                In addition to my WordPress foundation, I have <strong className="text-amber-400 font-semibold">1 year of focused React.js experience</strong> developing modern, modular frontend web applications with reactive user interfaces and API integrations.
              </p>

              <p className="text-slate-300 leading-relaxed text-base mt-4">
                Whether you need a full WordPress website crafted from scratch with Elementor, existing site bug fixes, speed enhancements, or a modern React-powered single-page application, my focus is always on delivering reliable, clean, and responsive work.
              </p>

              {/* Highlights Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {corePrinciples.map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Facts & Contact Snapshot (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Experience Stats Card (Exact & Honest) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 border border-amber-500500/20 rounded-2xl p-5 text-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-500400 font-mono">4</span>
                <span className="text-xl font-bold text-amber-500400 font-mono"> Yrs</span>
                <p className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">
                  WordPress Dev
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Custom & Elementor</p>
              </div>

              <div className="bg-slate-900/80 border border-amber-500/20 rounded-2xl p-5 text-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">1</span>
                <span className="text-xl font-bold text-amber-400 font-mono"> Yr</span>
                <p className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">
                  React.js Dev
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Components & APIs</p>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                Direct Contact Details
              </h4>

              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-500400" />
                    Name
                  </span>
                  <span className="font-semibold text-slate-200">{personalInfo.name}</span>
                </li>

                <li className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Code className="w-4 h-4 text-amber-500400" />
                    Role
                  </span>
                  <span className="font-medium text-amber-500300">{personalInfo.role}</span>
                </li>

                <li className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-500400" />
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-xs text-slate-200 hover:text-amber-500400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </li>

                <li className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    Phone / WA
                  </span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="font-mono text-xs text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-5">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Chat directly on WhatsApp</span>
                  <span className="text-amber-400 font-mono text-[10px]">({personalInfo.phone})</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
