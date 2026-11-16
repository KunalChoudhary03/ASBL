import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Navigation,
  ArrowRight,
  Plane,
  Train,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { HYDERABAD_CORRIDORS, ASBL_PROJECTS } from '../data/projectsData';

export default function LocationsPage({ onSelectProjectByName }) {
  const [activeCorridorId, setActiveCorridorId] = useState(HYDERABAD_CORRIDORS[0].id);

  const activeCorridor =
    HYDERABAD_CORRIDORS.find((c) => c.id === activeCorridorId) || HYDERABAD_CORRIDORS[0];

  return (
    <div className="pt-32 pb-36 min-h-screen bg-obsidian-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-40 left-10 w-[600px] h-[500px] bg-champagne-400/5" />
      <div className="ambient-glow bottom-20 right-10 w-[600px] h-[500px] bg-forest-700/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            Strategic Hyderabad Corridors
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-ivory-50 leading-tight">
            Curated Positions Across <br />
            <span className="italic font-normal gold-gradient-text">Hyderabad’s Economic Arteries.</span>
          </h1>
          <p className="text-base text-ivory-300/70 font-light leading-relaxed">
            Every ASBL project is positioned at a key urban node—balancing proximity to high-growth 
            tech and business hubs with protected residential privacy, green landscapes, and rapid transit access.
          </p>
        </div>

        {/* Global Hyderabad Infrastructure Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-sm glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
              <Briefcase className="w-4 h-4" />
              <span className="uppercase font-mono tracking-wider font-semibold">Tech Density</span>
            </div>
            <p className="text-sm font-semibold text-ivory-100">Financial District Hub</p>
            <p className="text-[11px] text-ivory-300/50">Google, Microsoft, Amazon & Apple within 10–15 mins.</p>
          </div>

          <div className="p-5 rounded-sm glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
              <Train className="w-4 h-4" />
              <span className="uppercase font-mono tracking-wider font-semibold">Metro Proximity</span>
            </div>
            <p className="text-sm font-semibold text-ivory-100">Arterial Metro Links</p>
            <p className="text-[11px] text-ivory-300/50">RTC X Roads, HITEC City, Miyapur & Uppal lines.</p>
          </div>

          <div className="p-5 rounded-sm glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
              <Navigation className="w-4 h-4" />
              <span className="uppercase font-mono tracking-wider font-semibold">Outer Ring Road</span>
            </div>
            <p className="text-sm font-semibold text-ivory-100">8-Lane Expressway</p>
            <p className="text-[11px] text-ivory-300/50">158 km signal-free access across all 5 corridors.</p>
          </div>

          <div className="p-5 rounded-sm glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
              <Plane className="w-4 h-4" />
              <span className="uppercase font-mono tracking-wider font-semibold">Airport Transit</span>
            </div>
            <p className="text-sm font-semibold text-ivory-100">20–25 Mins via ORR</p>
            <p className="text-[11px] text-ivory-300/50">Direct expressway transit to Shamshabad RGIA.</p>
          </div>
        </div>

        {/* Interactive Corridor Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Corridor Tabs */}
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
                    <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 font-medium">
                      {corridor.tag}
                    </span>
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

          {/* Active Corridor Card */}
          <div className="lg:col-span-7 glass-panel-gold p-8 rounded-sm border border-champagne-400/20 space-y-6">
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
                ASBL Residential Communities In This Corridor:
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
    </div>
  );
}
