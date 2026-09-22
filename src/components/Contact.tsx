import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with instant feedback + offer mailto trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi Hammas,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500500/20 text-amber-500400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Project
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Whether you need a custom WordPress site, an Elementor build, speed optimization, or a modern React.js web app, reach out anytime.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500500 to-amber-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Methods (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Direct Card (Prominent) */}
            <div className="bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Fastest Response
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mt-4">WhatsApp Direct Chat</h3>
              <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed">
                Connect directly for instant project discussions, requirement reviews, and quick quotes.
              </p>

              <a
                id="contact-whatsapp-chat-btn"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message +92 313 8491418</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Card with Copy button */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-amber-500500/10 border border-amber-500500/20 flex items-center justify-center text-amber-500400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-amber-500400 transition-colors font-medium truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-amber-500500/10 hover:bg-amber-500500/20 text-amber-500400 border border-amber-500500/20 transition-colors text-xs"
                  title="Open mail client"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card with Copy button */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-amber-400 transition-colors font-medium block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 transition-colors text-xs"
                  title="Call phone"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Channels: GitHub & LinkedIn */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                id="contact-github-link"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-all group"
              >
                <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                <div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white block">
                    GitHub
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">@hammasumer</span>
                </div>
              </a>

              <a
                id="contact-linkedin-link"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-amber-500400 group-hover:text-amber-500300" />
                <div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-500400 block">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">in/hammas-umer</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below or trigger a pre-filled direct email.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Prompt Response</span>
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-8 px-6 rounded-xl bg-slate-950/80 border border-amber-500/40 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Ready!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'there'}! Click below to open your preferred mail client directly to dispatch to <strong className="text-amber-500300 font-mono">{personalInfo.email}</strong>, or chat immediately on WhatsApp.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleDirectMailto}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500500 hover:bg-amber-500400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Pre-filled Email</span>
                    </button>

                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-400 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-[11px] text-slate-500 hover:text-slate-400 underline pt-2 block mx-auto"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500500 focus:ring-1 focus:ring-amber-500500/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500500 focus:ring-1 focus:ring-amber-500500/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message-subject"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Project Type / Subject *
                    </label>
                    <input
                      id="message-subject"
                      type="text"
                      required
                      placeholder="WordPress website, React.js app, or bug fix..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500500 focus:ring-1 focus:ring-amber-500500/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message-body"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Project Details / Message *
                    </label>
                    <textarea
                      id="message-body"
                      required
                      rows={4}
                      placeholder="Describe your requirements, timeline, and current website or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500500 focus:ring-1 focus:ring-amber-500500/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-500500 hover:bg-amber-500400 text-slate-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500500/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Preparing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectMailto}
                      className="text-xs text-slate-400 hover:text-amber-500400 transition-colors underline underline-offset-2"
                    >
                      Or open directly in your mail app
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
