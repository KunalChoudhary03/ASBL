import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Building, Layers, ShieldCheck, Compass } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 bg-obsidian-900 border-t border-b border-white/5 overflow-hidden">
      {/* Decorative architectural background ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-champagne-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-forest-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Philosophy Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-champagne-400" />
                The ASBL Residential Creed
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-[1.15]">
                Why should an apartment feel like a box when it could be an{' '}
                <span className="italic font-normal text-champagne-300">architectural sanctuary?</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-ivory-300/80 font-light leading-relaxed">
              At ASBL (Ashoka Builders India Private Limited), we look at residential towers 
              not as repetitive concrete grids, but as vertical neighborhoods crafted around 
              human psychology, cross-ventilation, and unencumbered natural illumination.
            </p>

            <p className="text-sm sm:text-base text-ivory-300/60 font-light leading-relaxed">
              By introducing our landmark <strong className="text-ivory-100 font-medium">Outdoor Living Balcony</strong>, 
              we gave Hyderabad homes private sky gardens measuring up to 200+ sq.ft—replacing conventional narrow 
              balconies with open-air family sanctuaries. Together with monolithic in-situ concrete engineering and strict 
              RERA-governed delivery schedules, ASBL represents the new benchmark for luxury urban living.
            </p>

            {/* Architectural Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-champagne-400/10 text-champagne-400 shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory-100">
                    Monolithic In-situ Casting
                  </h4>
                  <p className="text-xs text-ivory-300/60 mt-0.5">
                    Zero dampness, superior sound dampening, no protruding beam obstacles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-champagne-400/10 text-champagne-400 shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory-100">
                    Sun-Path Computational Modeling
                  </h4>
                  <p className="text-xs text-ivory-300/60 mt-0.5">
                    Homes engineered for Hyderabad's solar geometry, reducing thermal load.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architectural Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Architectural Image */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-luxury">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="ASBL Signature Balcony Architecture"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm glass-panel border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-champagne-400 font-semibold block">
                        Signature Innovation
                      </span>
                      <p className="font-serif text-base text-ivory-50 italic">
                        The Outdoor Living Room Balcony
                      </p>
                    </div>
                    <span className="text-xs font-mono text-champagne-300 bg-champagne-400/10 px-2 py-1 rounded">
                      200+ sq.ft
                    </span>
                  </div>
                </div>
              </div>

              {/* Offset Decorative Architectural Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-champagne-400/20 rounded-sm -z-10 hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
