import React from 'react';
import { Briefcase, CheckCircle2, Calendar, Layers, Code2, ArrowUpRight } from 'lucide-react';
import { experienceList, personalInfo } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500500/10 border border-amber-500500/20 text-amber-500400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            A track record grounded in real client deliverables: 4 years mastering WordPress & Elementor, and 1 year focused on React.js applications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500500 to-amber-400 rounded-full mt-3" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical subtle timeline line for desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-800 pointer-events-none" />

          {experienceList.map((exp, idx) => {
            const isWordpress = exp.id === 'wordpress-dev';

            return (
              <div
                key={exp.id}
                className="relative md:pl-20 group"
              >
                {/* Timeline node icon */}
                <div
                  className={`hidden md:flex absolute left-4 top-8 -translate-x-1/2 w-8 h-8 rounded-full border-2 items-center justify-center z-10 transition-transform duration-200 group-hover:scale-110 ${
                    isWordpress
                      ? 'bg-slate-900 border-amber-500500 text-amber-500400 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-900 border-amber-500 text-amber-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                  }`}
                >
                  {isWordpress ? (
                    <Layers className="w-4 h-4" />
                  ) : (
                    <Code2 className="w-4 h-4" />
                  )}
                </div>

                {/* Experience Card Content */}
                <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:shadow-2xl">
                  
                  {/* Top Bar with Role & Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                    <div>
                      <span
                        className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-2 ${
                          isWordpress
                            ? 'bg-amber-500500/10 text-amber-500300 border border-amber-500500/20'
                            : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                        }`}
                      >
                        {exp.yearsLabel}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Highlight Checklist Items from prompt */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Key Highlights & Competencies:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950/50 border border-slate-800/60"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 ${
                              isWordpress ? 'text-amber-500400' : 'text-amber-400'
                            }`}
                          />
                          <span className="text-xs font-medium text-slate-200">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs text-slate-400 font-mono">Tech Focus:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-3">
            Looking for a dedicated developer to elevate your next project?
          </p>
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-500400 hover:text-amber-500300 font-medium text-xs sm:text-sm underline underline-offset-4 transition-colors"
          >
            <span>Message Hammas on WhatsApp for quick inquiries</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
