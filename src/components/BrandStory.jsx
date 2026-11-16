import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Layers, Clock, Compass, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { ASBL_PHILOSOPHY_PILLARS } from '../data/projectsData';

const iconMap = {
  Sun: Sun,
  Layers: Layers,
  Clock: Clock,
  Compass: Compass,
};

export default function BrandStory({ onEnquiryClick }) {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="story" className="relative py-28 md:py-36 bg-obsidian-900 border-t border-b border-white/5 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-champagne-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            The ASBL Engineering Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-tight">
            Built by engineers who treat homes as{' '}
            <span className="italic font-normal gold-gradient-text">scientific works of art.</span>
          </h2>
          <p className="text-base text-ivory-300/70 font-light leading-relaxed">
            In an industry frequently plagued by delayed promises and templated architecture, 
            ASBL was founded to restore integrity, engineering precision, and genuine customer-first 
            design to luxury homebuilding.
          </p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ASBL_PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Compass;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setActivePillar(idx)}
                className={`p-7 rounded-sm transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                  activePillar === idx
                    ? 'bg-obsidian-850 border-champagne-400/50 shadow-luxury-gold'
                    : 'glass-panel border-white/5 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm text-champagne-400/80 font-bold">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-sm bg-obsidian-950/80 border border-white/10 text-champagne-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-ivory-50 font-medium mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-ivory-300/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-ivory-300/50">
                    {pillar.metricLabel}
                  </span>
                  <span className="font-serif text-lg text-champagne-300 font-medium">
                    {pillar.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Editorial Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-sm glass-panel border border-champagne-400/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-champagne-400 font-semibold block">
              The Punctuality Pledge
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-light">
              Zero tolerance for delay. 100% adherence to declared RERA milestones.
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300/70 font-light leading-relaxed">
              From ASBL Spire delivered ahead of schedule to ASBL Spectra handed over smoothly, our 
              reputation is forged in real keys handed to real families on time.
            </p>
          </div>

          <button
            onClick={onEnquiryClick}
            className="group px-7 py-3.5 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.2em] transition-all shrink-0 flex items-center gap-2 shadow-luxury"
          >
            <span>Consult Our Advisors</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
