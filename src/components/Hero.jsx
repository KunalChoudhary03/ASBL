import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Building2, Eye } from 'lucide-react';
import { ASBL_STATISTICS } from '../data/projectsData';

export default function Hero({ onExploreClick, onEnquiryClick }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden">
      {/* Background Architectural Canvas with subtle cinematic motion */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=90')`,
          }}
        />
        {/* Dark luxury architectural gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-obsidian-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/70" />
        {/* Subtle geometric grid overlay */}
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-12">
        <div className="max-w-4xl space-y-6">
          {/* Subtle Category Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/25 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 animate-pulse" />
            <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-champagne-300 font-semibold">
              The Sovereign Living Collection • Hyderabad
            </span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="space-y-2"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-light leading-[1.08] text-ivory-50 tracking-tight">
              Architecture for living, <br />
              <span className="italic font-normal gold-gradient-text">
                not just existing.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl text-base sm:text-lg text-ivory-300/80 font-light leading-relaxed"
          >
            ASBL redefines Hyderabad's skyline through human-centric architectural engineering—introducing 
            signature outdoor living balconies, monolithic in-situ construction, and an uncompromising 
            dedication to punctual delivery.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={onExploreClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-luxury shadow-champagne-500/10 hover:shadow-champagne-400/20"
            >
              <span>Explore The 7 Landmark Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>

            <button
              onClick={onEnquiryClick}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-sm bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/10 hover:border-champagne-400/50 text-ivory-100 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 backdrop-blur-md"
            >
              <span>Schedule Private Tour</span>
              <ArrowUpRight className="w-4 h-4 text-champagne-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Statistics / Hallmark Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-sm glass-panel border border-white/10">
          {ASBL_STATISTICS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center px-4 ${
                idx !== 0 ? 'border-l border-white/10' : ''
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-champagne-300">
                  {stat.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-ivory-100 tracking-wide mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-ivory-300/50 font-light mt-0.5 hidden sm:block">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Down Prompt Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center justify-center mt-6 text-ivory-300/40 hover:text-champagne-400 cursor-pointer transition-colors"
        onClick={onExploreClick}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] mb-1 font-mono">Scroll to Discover</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.div>
    </section>
  );
}
