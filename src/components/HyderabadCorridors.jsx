import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building, Navigation, Compass } from 'lucide-react';
import { HYDERABAD_CORRIDORS, ASBL_PROJECTS } from '../data/projectsData';

export default function HyderabadCorridors({ onSelectProjectByName }) {
  const [activeCorridorId, setActiveCorridorId] = useState(HYDERABAD_CORRIDORS[0].id);

  const activeCorridor = HYDERABAD_CORRIDORS.find((c) => c.id === activeCorridorId) || HYDERABAD_CORRIDORS[0];

  return (
    <section id="corridors" className="relative py-28 md:py-36 bg-obsidian-950 overflow-hidden">
      {/* Background radial */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-forest-700/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            Strategic Urban Corridors
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-tight">
            Curated locations across{' '}
            <span className="italic font-normal gold-gradient-text">Hyderabad’s fastest growing zones.</span>
          </h2>
          <p className="text-base text-ivory-300/70 font-light leading-relaxed">
            Every ASBL project is positioned at a key urban node—balancing proximity to high-growth 
            employment hubs with protected residential privacy and arterial connectivity.
          </p>
        </div>

        {/* Interactive Corridor Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Corridor Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {HYDERABAD_CORRIDORS.map((corridor) => {
              const isSelected = activeCorridorId === corridor.id;

              return (
                <div
                  key={corridor.id}
                  onClick={() => setActiveCorridorId(corridor.id)}
                  className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-obsidian-900 border-champagne-400/60 shadow-elevated'
                      : 'glass-panel border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 font-medium">
                        {corridor.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-ivory-50 font-medium">
                      {corridor.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-champagne-300 bg-champagne-400/10 px-2.5 py-1 rounded-sm border border-champagne-400/20">
                      {corridor.projectsCount}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-champagne-400 translate-x-1' : 'text-ivory-300/40'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Corridor Spotlight View */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-sm border border-champagne-400/20 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400 font-semibold block mb-1">
                  Corridor Spotlight
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-light">
                  {activeCorridor.name}
                </h4>
              </div>
              <div className="p-3 rounded-full bg-champagne-400/10 text-champagne-400 border border-champagne-400/20">
                <Navigation className="w-5 h-5" />
              </div>
            </div>

            <p className="text-sm text-ivory-300/80 font-light leading-relaxed">
              {activeCorridor.description}
            </p>

            {/* Projects in this Corridor */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-mono tracking-wider text-champagne-400 block">
                Featured ASBL Communities In This Corridor:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCorridor.projects.map((projName) => {
                  const projObj = ASBL_PROJECTS.find((p) => p.name === projName);
                  if (!projObj) return null;

                  return (
                    <div
                      key={projName}
                      onClick={() => onSelectProjectByName && onSelectProjectByName(projName)}
                      className="p-4 rounded-sm bg-obsidian-900 border border-white/10 hover:border-champagne-400/50 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-serif text-base text-ivory-50 group-hover:text-champagne-300 font-medium">
                          {projObj.name}
                        </span>
                        <span className="text-[10px] font-mono text-ivory-300/60 uppercase">
                          {projObj.configPills.join(', ')}
                        </span>
                      </div>
                      <p className="text-[11px] text-ivory-300/50 line-clamp-1 mb-2">
                        {projObj.tagline}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-champagne-400 pt-2 border-t border-white/5">
                        <span className="font-mono">{projObj.statusBadge}</span>
                        <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                          View Specs &rarr;
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
