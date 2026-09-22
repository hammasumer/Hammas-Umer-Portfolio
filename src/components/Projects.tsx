import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Code,
  Layers,
  Sparkles,
  Info,
  Building2,
  Pill,
  HeartHandshake,
  Leaf,
  Home,
  CheckCircle,
  X
} from 'lucide-react';
import { projectsList, personalInfo } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'react' | 'wordpress'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? projectsList
    : projectsList.filter((p) => p.category === selectedFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'primenest-realty':
        return <Home className="w-5 h-5 text-amber-500400" />;
      case 'drug-mart-pharmacy':
        return <Pill className="w-5 h-5 text-amber-400" />;
      case 'benco-realty':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'the-herbal-pool':
        return <Leaf className="w-5 h-5 text-teal-400" />;
      case 'pumewa':
        return <HeartHandshake className="w-5 h-5 text-purple-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-amber-500400" />;
    }
  };

  const getBadgeColor = (tech: string) => {
    if (tech === 'React.js') {
      return 'bg-amber-500500/10 text-amber-500400 border-amber-500500/30';
    }
    if (tech.includes('Elementor')) {
      return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
    return 'bg-amber-500/10 text-purple-400 border-amber-500/30';
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500500/10 border border-amber-500500/20 text-amber-500400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Selected real estate platforms, healthcare websites, organization portals, and custom web builds.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500500 to-amber-400 rounded-full mt-3" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedFilter === 'all'
                ? 'bg-amber-500500 text-slate-950 font-semibold shadow-md shadow-amber-500500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            All Work ({projectsList.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('react')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedFilter === 'react'
                ? 'bg-amber-500500 text-slate-950 font-semibold shadow-md shadow-amber-500500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            React.js ({projectsList.filter((p) => p.category === 'react').length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('wordpress')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedFilter === 'wordpress'
                ? 'bg-amber-500500 text-slate-950 font-semibold shadow-md shadow-amber-500500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            WordPress ({projectsList.filter((p) => p.category === 'wordpress').length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group backdrop-blur-sm"
            >
              <div>
                {/* Project Header Bar / Mockup Top */}
                <div className="p-5 pb-3 border-b border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-500400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {project.category === 'react' ? 'SPA Web App' : 'WordPress Platform'}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${getBadgeColor(
                      project.technology
                    )}`}
                  >
                    {project.technology}
                  </span>
                </div>

                {/* Project Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights / Features */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer with Buttons */}
              <div className="p-5 pt-3 border-t border-slate-800/80 bg-slate-950/20 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-amber-500400" />
                  <span>View Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="py-2 px-3 rounded-xl bg-amber-500500/10 hover:bg-amber-500500/20 border border-amber-500500/30 text-xs font-semibold text-amber-500300 transition-colors flex items-center justify-center gap-1.5"
                  title="Project Link info"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note for Maintenance in Cursor */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-amber-500400 font-semibold font-mono">Note for Cursor:</span> Project links are structured in <code className="text-amber-500300 font-mono">src/data/portfolioData.ts</code>. You can easily populate actual live URLs and repository links at any time without touching UI code.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                {getProjectIcon(activeModalProject.id)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {activeModalProject.title}
                </h3>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-md border mt-1 inline-block ${getBadgeColor(
                    activeModalProject.technology
                  )}`}
                >
                  {activeModalProject.technology}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {activeModalProject.description}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Architectural Breakdown:
              </h4>
              <ul className="space-y-2">
                {activeModalProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note on links */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1 mb-6">
              <div className="flex items-center gap-2 font-mono text-amber-500400 text-[11px]">
                <Info className="w-3.5 h-3.5" />
                <span>Link Placeholder</span>
              </div>
              <p>
                In accordance with project guidelines, URLs are kept as placeholders ready to be updated with your active deployment addresses in <code className="text-amber-500300">src/data/portfolioData.ts</code>.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold transition-colors"
              >
                Discuss Similar Project
              </a>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="py-2.5 px-4 rounded-xl bg-amber-500500 text-slate-950 text-xs font-semibold hover:bg-amber-500400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
