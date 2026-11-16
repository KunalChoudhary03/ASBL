import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layers,
  Sun,
  Wind,
  ShieldCheck,
  Compass,
  Building,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Maximize2,
  VolumeX,
  Droplets,
  ChevronDown
} from 'lucide-react';

export default function ArchitecturePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const engineeringFaqs = [
    {
      q: "How does Monolithic In-situ casting differ from traditional brickwork construction?",
      a: "Traditional buildings use brick infill within a concrete frame, leading to dampness along mortar joints, uneven wall finishes, and awkward column protrusions inside rooms. ASBL pours high-grade concrete into precision steel tunnel formwork, creating a continuous monolithic structure with silky-smooth wall planes, superior seismic resistance, and zero structural cracks."
    },
    {
      q: "What makes the ASBL Outdoor Living Balcony structurally distinct?",
      a: "Most balconies are cantilevered slabs limited to 3-4 feet in depth, functioning only as clotheslines or AC ledge holders. ASBL engineers heavily reinforced post-tensioned slabs extending up to 8-10 feet in width (up to 200+ sq.ft). They are designed with deep overhangs that prevent direct rain intrusion while acting as natural sunshades for the main living room."
    },
    {
      q: "How does computational sun-path modeling reduce cooling costs?",
      a: "Before building heights and tower alignments are frozen, our engineers run 3D solar radiation simulations for Hyderabad's latitude (17.3850° N). By angling tower faces away from intense afternoon west-facing radiation and creating self-shading cantilevered balconies, ambient indoor temperatures remain noticeably cooler, reducing air-conditioning loads by up to 25%."
    },
    {
      q: "How does ASBL control acoustic noise in high-rise residences?",
      a: "High-rise acoustic comfort relies on monolithic concrete's high mass density (which dampens airborne sound significantly better than hollow clay bricks) coupled with double-glazed acoustic laminated glass on exterior windows to block city and traffic decibels."
    }
  ];

  return (
    <div className="pt-32 pb-36 min-h-screen bg-obsidian-950 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="ambient-glow top-40 right-10 w-[600px] h-[500px] bg-champagne-400/5" />
      <div className="ambient-glow bottom-20 left-10 w-[600px] h-[500px] bg-forest-700/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            Engineering & Structural Innovation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-ivory-50 leading-tight">
            The Science of Living, <br />
            <span className="italic font-normal gold-gradient-text">Engineered Down to the Millimeter.</span>
          </h1>
          <p className="text-base text-ivory-300/70 font-light leading-relaxed">
            Discover the computational modeling, structural in-situ casting, and climate-responsive 
            principles that make an ASBL apartment structurally superior to standard residential builds.
          </p>
        </div>

        {/* 1. THE OUTDOOR LIVING BALCONY COMPARISON */}
        <section className="mb-24 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400 font-semibold block">
              Flagship Innovation #01
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light">
              The Outdoor Living Room Balcony
            </h2>
            <p className="text-xs sm:text-sm text-ivory-300/70 font-light">
              Why settle for an unusable narrow ledge when your balcony can be the social heart of your home?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Balcony Architecture */}
            <div className="lg:col-span-6 relative aspect-[16/11] rounded-sm overflow-hidden border border-champagne-400/20 shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="ASBL Outdoor Balcony"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm glass-panel border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-champagne-400 block mb-0.5">
                  Private Sky Deck
                </span>
                <p className="text-xs text-ivory-100 font-medium">
                  Spans up to 200+ sq.ft — accommodating an 8-seater dining set, lounge chairs, and potted greenery.
                </p>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="lg:col-span-6 glass-panel-gold p-6 rounded-sm border border-champagne-400/20 space-y-4">
              <h3 className="font-serif text-xl text-ivory-50 font-medium border-b border-white/10 pb-3">
                Balcony Engineering: Standard Industry vs ASBL
              </h3>

              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3 p-3 rounded-sm bg-obsidian-950/60 border border-white/5">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-ivory-300/50 block mb-1">Standard Market Balcony</span>
                    <p className="text-red-400/90 font-medium flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      3 to 4 ft narrow ledge (35–45 sq.ft)
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-champagne-400 block mb-1">ASBL Living Balcony</span>
                    <p className="text-champagne-300 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-champagne-400" />
                      Up to 200+ sq.ft full outdoor room
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 rounded-sm bg-obsidian-950/60 border border-white/5">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-ivory-300/50 block mb-1">Functionality</span>
                    <p className="text-ivory-300/70">Restricted to clothes drying and AC compressors.</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-champagne-400 block mb-1">Functionality</span>
                    <p className="text-ivory-100 font-medium">Full outdoor dining, morning yoga, sunset entertaining.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 rounded-sm bg-obsidian-950/60 border border-white/5">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-ivory-300/50 block mb-1">Thermal Impact</span>
                    <p className="text-ivory-300/70">Direct heat penetrates straight through glass windows.</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-champagne-400 block mb-1">Thermal Impact</span>
                    <p className="text-ivory-100 font-medium">Deep overhang shades the living room, cooling interior.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. THE 4 STRUCTURAL PILLARS */}
        <section className="mb-24 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400 font-semibold block">
              Structural Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light">
              Engineering That Endures Decades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-card card-glow-hover p-7 rounded-sm border border-white/5 space-y-4">
              <div className="p-3 rounded-sm bg-champagne-400/10 text-champagne-400 w-fit">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory-50 font-medium">
                Monolithic Tunnel Formwork
              </h3>
              <p className="text-xs text-ivory-300/70 leading-relaxed font-light">
                All walls and slabs are cast simultaneously with high-grade concrete. This eliminates 
                the joint cracks typical of brickwork, ensuring permanent protection against dampness 
                and monsoon water seepage.
              </p>
              <div className="pt-2 text-xs font-mono text-champagne-300">
                • 0% Structural Mortar Joints
              </div>
            </div>

            <div className="glass-card card-glow-hover p-7 rounded-sm border border-white/5 space-y-4">
              <div className="p-3 rounded-sm bg-champagne-400/10 text-champagne-400 w-fit">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory-50 font-medium">
                Sun-Path Computational Angle
              </h3>
              <p className="text-xs text-ivory-300/70 leading-relaxed font-light">
                Using solar ray-tracing algorithms calibrated to Hyderabad's latitude, tower facades 
                are oriented to capture soft morning daylight while rejecting harsh afternoon western glare.
              </p>
              <div className="pt-2 text-xs font-mono text-champagne-300">
                • 3–4°C Ambient Heat Reduction
              </div>
            </div>

            <div className="glass-card card-glow-hover p-7 rounded-sm border border-white/5 space-y-4">
              <div className="p-3 rounded-sm bg-champagne-400/10 text-champagne-400 w-fit">
                <VolumeX className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory-50 font-medium">
                Acoustic Double Glazing
              </h3>
              <p className="text-xs text-ivory-300/70 leading-relaxed font-light">
                High-performance acoustic double-glazed glass insulated with argon gas layers shields 
                the interior from ambient city noise and external road vibrations.
              </p>
              <div className="pt-2 text-xs font-mono text-champagne-300">
                • 35 dB Noise Attenuation
              </div>
            </div>

          </div>
        </section>

        {/* 3. STRUCTURAL FAQ ACCORDION */}
        <section className="mb-20 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400 font-semibold block">
              Architectural Clarity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light">
              Frequently Addressed Engineering Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {engineeringFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={idx}
                  className="glass-panel rounded-sm border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-medium text-ivory-100 hover:text-champagne-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-champagne-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ivory-300/70 leading-relaxed font-light border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Action Banner */}
        <div className="p-8 md:p-12 rounded-sm glass-panel-gold border border-champagne-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-ivory-50 font-light">
              Experience Our Engineering in Person
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300/70 font-light">
              Visit our Financial District Experience Centre to inspect full-scale cross-sections and mockups.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.2em] transition-all shrink-0 shadow-luxury btn-liquid-shine cursor-pointer"
          >
            Schedule VIP Site Tour
          </Link>
        </div>

      </div>
    </div>
  );
}
