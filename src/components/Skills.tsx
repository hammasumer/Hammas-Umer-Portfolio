import React, { useState } from 'react';
import { Cpu, CheckCircle, Code2, Globe, Layers, Search, Sparkles } from 'lucide-react';
import { skillsList } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wordpress' | 'react' | 'core' | 'marketing'>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'wordpress', label: 'WordPress & CMS' },
    { id: 'react', label: 'React & Frontend' },
    { id: 'core', label: 'Languages' },
    { id: 'marketing', label: 'SEO & Marketing' },
  ];

  const filteredSkills = activeFilter === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeFilter);

  // Grouped counts
  const wpCount = skillsList.filter((s) => s.category === 'wordpress').length;
  const reactCount = skillsList.filter((s) => s.category === 'react').length;

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500500/10 border border-amber-500500/20 text-amber-500400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            My core technical toolset spanning 4 years of custom WordPress and WooCommerce platforms, alongside 1 year of modular React.js frontend development.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500500 to-amber-400 rounded-full mt-3" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? 'bg-amber-500500 text-slate-950 font-semibold shadow-md shadow-amber-500500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isWordpress = skill.category === 'wordpress';
            const isReact = skill.category === 'react';
            const isCore = skill.category === 'core';

            return (
              <div
                key={skill.name}
                className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isWordpress
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : isReact
                          ? 'bg-amber-500500/10 text-amber-500400 border border-amber-500500/20'
                          : isCore
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-amber-500/10 text-purple-400 border border-amber-500/20'
                      }`}
                    >
                      {skill.category === 'wordpress'
                        ? 'CMS / WP'
                        : skill.category === 'react'
                        ? 'Frontend'
                        : skill.category === 'core'
                        ? 'Code'
                        : 'Growth'}
                    </span>
                    <CheckCircle className="w-4 h-4 text-amber-400/80 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-500400 transition-colors">
                    {skill.name}
                  </h3>

                  {skill.description && (
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Proficiency</span>
                  <span className="text-slate-300">
                    {isWordpress
                      ? '4 Yrs Experience'
                      : isReact
                      ? '1 Yr Experience'
                      : 'Production Ready'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner below skills */}
        <div className="mt-12 bg-gradient-to-r from-amber-500950/30 via-slate-900/60 to-emerald-950/30 border border-slate-800/90 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500500/10 border border-amber-500500/30 flex items-center justify-center text-amber-500400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full-Stack Synergy</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Bridging content flexibility in WordPress with high-speed component interfaces in React.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
          >
            See Skills in Action
          </a>
        </div>

      </div>
    </section>
  );
};
