import React from 'react';
import {
  Wrench,
  Layout,
  Atom,
  ShoppingBag,
  Zap,
  Smartphone,
  Share2,
  Check,
  ArrowRight
} from 'lucide-react';
import { servicesList, personalInfo } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-amber-500400" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-amber-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-teal-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-500400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500500/10 border border-amber-500500/20 text-amber-500400 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>What I Deliver</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Services
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Practical development services focused on delivering fast, responsive, and easy-to-manage web experiences.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500500 to-amber-400 rounded-full mt-3" />
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/60 hover:bg-slate-900/95 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-5">
                  {getIcon(service.icon)}
                </div>

                <span className="text-[11px] font-mono text-amber-500400 uppercase tracking-wider">
                  {service.subtitle}
                </span>

                <h3 className="text-lg font-bold text-white tracking-tight mt-1 mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-amber-500400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={`https://wa.me/92313491418?text=Hi%20Hammas%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500400 hover:text-amber-500300 transition-colors"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
