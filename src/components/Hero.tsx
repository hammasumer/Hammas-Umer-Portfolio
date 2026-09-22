import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, Phone, MessageSquare, Github, Linkedin, ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ProfileImageUploader } from './ProfileImageUploader';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Available for Client Projects & Opportunities</span>
            </div>

            {/* Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-100 to-amber-400">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Title / Role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 flex items-center gap-3 flex-wrap justify-center lg:justify-start"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight">
                {personalInfo.role}
              </h2>
            </motion.div>

            {/* Experience Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-2.5 flex-wrap justify-center lg:justify-start text-xs font-mono"
            >
              <div className="px-3 py-1 rounded-lg bg-amber-500950/40 border border-amber-500800/50 text-amber-500300 font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-500400" />
                4 Years WordPress
              </div>
              <div className="px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-amber-300 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                1 Year React.js
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 font-medium">
                Custom Web • WooCommerce
              </div>
            </motion.div>

            {/* Professional Summary Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Action Buttons: View My Work & Contact Me */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                id="hero-view-work-btn"
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"

              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-100 hover:text-amber-500400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center shadow-sm"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-amber-500400" />
              </a>

              <a
                id="hero-whatsapp-btn"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
                title="Direct WhatsApp chat"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Social & Direct Contact Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400"
            >
              <span className="font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-500400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-amber-500400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                title="Direct Phone Call"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Prominent Profile Picture Area (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <ProfileImageUploader />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
