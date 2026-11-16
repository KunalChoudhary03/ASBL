import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Building,
  Quote
} from 'lucide-react';
import { ASBL_PHILOSOPHY_PILLARS } from '../data/projectsData';

export default function PhilosophyPage() {
  const testimonials = [
    {
      quote: "The outdoor balcony in our ASBL apartment is where our family actually lives in the evenings. It feels like an open sky garden rather than an apartment.",
      author: "Dr. Srinivas Murthy",
      community: "Homeowner at ASBL Spectra",
      handover: "Handover Received 2025"
    },
    {
      quote: "In an industry where delays are taken for granted, getting possession of our home right on the committed RERA schedule was the most reassuring experience.",
      author: "Aditi & Rahul Deshmukh",
      community: "Homeowners at ASBL Spire",
      handover: "Delivered on Schedule"
    }
  ];

  return (
    <div className="pt-32 pb-36 min-h-screen bg-obsidian-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-40 right-20 w-[600px] h-[500px] bg-champagne-400/5" />
      <div className="ambient-glow bottom-20 left-10 w-[600px] h-[500px] bg-forest-700/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            The ASBL Manifesto
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-ivory-50 leading-tight">
            Restoring Honesty, Science & <br />
            <span className="italic font-normal gold-gradient-text">Punctuality to Homebuilding.</span>
          </h1>
          <p className="text-base text-ivory-300/70 font-light leading-relaxed">
            Ashoka Builders was founded to challenge the status quo of Indian urban real estate. 
            We replace generic promises with measurable engineering milestones, radical customer 
            transparency, and architectural craftsmanship.
          </p>
        </div>

        {/* 1. THE MANIFESTO EDITORIAL BLOCK */}
        <section className="mb-24 p-8 sm:p-14 rounded-sm glass-panel-gold border border-champagne-400/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <Quote className="w-10 h-10 text-champagne-400/40" />
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory-50 font-light leading-snug">
              "We do not build residential towers to maximize developer margins on paper. We build them 
              so that twenty years from now, families will look out from their sky balconies and feel 
              grateful they chose a home engineered with conscience."
            </h2>
            <div className="pt-2">
              <span className="font-display text-sm tracking-widest text-champagne-300 uppercase font-medium block">
                The Board of Ashoka Builders India (ASBL)
              </span>
              <span className="text-xs text-ivory-300/60 font-mono">
                Hyderabad Head Office • Financial District
              </span>
            </div>
          </div>
        </section>

        {/* 2. RADICAL TRANSPARENCY & THE CUSTOMER APP */}
        <section className="mb-24 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400 font-semibold block">
                Construction Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light">
                Track Every Slab, Concrete Pour & Milestone in Real Time
              </h2>
              <p className="text-sm text-ivory-300/80 font-light leading-relaxed">
                Homebuyers shouldn't have to wonder about the status of their life's biggest investment. 
                Through ASBL's proprietary buyer technology platform, every homeowner receives live 
                drone camera updates, quality audit certificates, and engineering milestone logs every 14 days.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-sm bg-obsidian-900 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-champagne-400 shrink-0" />
                  <span className="text-xs text-ivory-200">Live 4K drone progress videos & high-resolution site photogrammetry</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-sm bg-obsidian-900 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-champagne-400 shrink-0" />
                  <span className="text-xs text-ivory-200">Direct structural concrete lab test reports & RERA filings repository</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-sm bg-obsidian-900 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-champagne-400 shrink-0" />
                  <span className="text-xs text-ivory-200">Transparent payment milestones linked strictly to physical floor completion</span>
                </div>
              </div>
            </div>

            {/* Visual Phone / Tech Representation */}
            <div className="lg:col-span-6 glass-panel p-8 rounded-sm border border-champagne-400/20 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-champagne-400/10 border border-champagne-400/30 flex items-center justify-center mx-auto text-champagne-400">
                <Smartphone className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-ivory-50 font-medium">
                  The ASBL Homeowner Portal
                </h3>
                <p className="text-xs text-ivory-300/70 max-w-sm mx-auto">
                  A seamless mobile experience giving buyers direct insight into architectural progress.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-obsidian-950/70 border border-white/10 text-left space-y-2 font-mono text-xs">
                <div className="flex justify-between text-ivory-300/60 pb-1 border-b border-white/5">
                  <span>Current Project:</span>
                  <span className="text-champagne-300">ASBL Broadway</span>
                </div>
                <div className="flex justify-between text-ivory-300/60 pb-1 border-b border-white/5">
                  <span>Tower A Height:</span>
                  <span className="text-ivory-100 font-semibold">Storey 38 of 50 Cast</span>
                </div>
                <div className="flex justify-between text-ivory-300/60">
                  <span>Milestone Schedule:</span>
                  <span className="text-emerald-400 font-medium">100% On-Track</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. HOMEOWNER EXPERIENCES */}
        <section className="mb-20 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400 font-semibold block">
              Delivered Proof
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light">
              Voices From Our Completed Communities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-sm border border-white/10 space-y-5 flex flex-col justify-between"
              >
                <p className="font-serif text-lg text-ivory-100 font-light italic leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-ivory-50">{t.author}</h4>
                    <p className="text-champagne-400 text-[11px]">{t.community}</p>
                  </div>
                  <span className="text-ivory-300/50 font-mono text-[10px] bg-white/5 px-2.5 py-1 rounded">
                    {t.handover}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 md:p-12 rounded-sm glass-panel-gold border border-champagne-400/30 text-center space-y-4">
          <h3 className="font-serif text-3xl text-ivory-50 font-light">
            Become Part of an ASBL Community
          </h3>
          <p className="text-sm text-ivory-300/70 font-light max-w-xl mx-auto">
            Schedule a private consultation to review floor plans, price sheets, and RERA schedules.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.2em] transition-all shadow-luxury"
            >
              <span>Schedule VIP Site Tour</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
