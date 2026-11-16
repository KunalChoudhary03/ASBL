import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Building2, Check, Compass, Layers, Sun } from 'lucide-react';
import { ASBL_PROJECTS, ASBL_STATISTICS } from '../data/projectsData';

export default function HomePage({ onSelectProject }) {
  const navigate = useNavigate();

  // Featured 3 flagship projects for the home highlight
  const featuredProjects = ASBL_PROJECTS.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-14 overflow-hidden">
        {/* Background Architectural Canvas */}
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
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/85 to-obsidian-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/80" />
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        </div>

        {/* Ambient golden lighting */}
        <div className="ambient-glow -top-20 -left-20 w-[500px] h-[500px] bg-champagne-400/10" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-12">
          <div className="max-w-4xl space-y-7">
            
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/30 backdrop-blur-md shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 animate-pulse" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-champagne-300 font-semibold">
                The Sovereign Living Collection • Hyderabad
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[84px] font-light leading-[1.06] text-ivory-50 tracking-tight">
                Architecture for living, <br />
                <span className="italic font-normal gold-gradient-text">
                  not just existing.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
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

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-luxury hover:shadow-[0_0_30px_rgba(204,168,123,0.35)]"
              >
                <span>Explore All 7 Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/architecture"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-sm bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/10 hover:border-champagne-400/50 text-ivory-100 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 backdrop-blur-md"
              >
                <span>Discover Our Engineering</span>
                <Compass className="w-4 h-4 text-champagne-400 transition-transform group-hover:rotate-45" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-sm glass-panel-gold">
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
      </section>

      {/* 2. PHILOSOPHY TEASER SECTION */}
      <section className="relative py-28 md:py-36 bg-obsidian-900 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-champagne-400" />
                The ASBL Residential Creed
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-tight">
                Homes crafted around human biology, not speculative{' '}
                <span className="italic font-normal gold-gradient-text">concrete grids.</span>
              </h2>
              <p className="text-base text-ivory-300/80 font-light leading-relaxed">
                Most apartment builders treat balconies as narrow 3-foot afterthought ledges. ASBL 
                reimagined the balcony as an expansive <strong className="text-ivory-100 font-medium">Outdoor Living Room</strong> measuring 
                up to 200+ sq.ft—seamlessly integrating your living room with open skies and cooling evening breezes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-sm bg-obsidian-950/60 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 block">
                    Outdoor Living Balcony
                  </span>
                  <p className="font-serif text-xl text-ivory-100 font-light">Up to 200+ sq.ft</p>
                  <p className="text-xs text-ivory-300/60">Private sky gardens for family dinners and relaxation.</p>
                </div>
                <div className="p-4 rounded-sm bg-obsidian-950/60 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 block">
                    Monolithic In-Situ Casting
                  </span>
                  <p className="font-serif text-xl text-ivory-100 font-light">Zero Dampness</p>
                  <p className="text-xs text-ivory-300/60">No protruding internal beams, maximum acoustic privacy.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/architecture"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-champagne-400 hover:text-champagne-300 transition-colors"
                >
                  <span>Read The Full Engineering Breakdown</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-champagne-400/20 shadow-luxury">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="ASBL Signature Balcony Architecture"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm glass-panel border border-champagne-400/30">
                  <span className="text-[10px] uppercase tracking-widest text-champagne-400 font-semibold block">
                    Signature Innovation
                  </span>
                  <p className="font-serif text-base text-ivory-50 italic">
                    The Outdoor Living Room Balcony
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SPOTLIGHT */}
      <section className="relative py-28 md:py-36 bg-obsidian-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-champagne-400" />
                Landmark Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-tight">
                Featured Flagship <span className="italic font-normal gold-gradient-text">Residences</span>
              </h2>
              <p className="text-sm sm:text-base text-ivory-300/70 font-light">
                A selection of ASBL's most ambitious high-rises across Central Hyderabad and the Financial District.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-obsidian-900 hover:bg-obsidian-850 border border-white/10 hover:border-champagne-400/50 text-ivory-100 hover:text-champagne-300 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
            >
              <span>View All 7 Projects</span>
              <ArrowUpRight className="w-4 h-4 text-champagne-400" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group glass-card glass-card-hover rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div
                  className="relative aspect-[16/11] overflow-hidden bg-obsidian-900 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.images.hero}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase border bg-obsidian-950/80 text-champagne-300 border-champagne-400/40 backdrop-blur-md">
                      {project.statusBadge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-xs text-ivory-100 font-medium drop-shadow">
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-serif text-2xl text-ivory-50 group-hover:text-champagne-300 transition-colors cursor-pointer font-light"
                    >
                      {project.name}
                    </h3>
                    <p className="text-xs text-ivory-300/70 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-xs">
                    <div className="p-2.5 rounded-sm bg-obsidian-950/50 border border-white/5">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 block mb-0.5">
                        Config
                      </span>
                      <span className="font-medium text-ivory-100 truncate block">
                        {project.configuration}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-sm bg-obsidian-950/50 border border-white/5">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 block mb-0.5">
                        Storeys
                      </span>
                      <span className="font-medium text-ivory-100 truncate block text-[11px]">
                        {project.storeys}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex-1 py-2.5 px-3 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-champagne-400/40 text-[11px] font-semibold uppercase tracking-wider text-ivory-200 hover:text-champagne-300 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Architectural Sheet</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-champagne-400" />
                    </button>
                    <Link
                      to="/contact"
                      className="py-2.5 px-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. VIP CONSULTATION CTA BANNER */}
      <section className="relative py-24 bg-gradient-to-b from-obsidian-950 to-obsidian-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-6">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold block">
            Private Site Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-tight">
            Schedule a private walkthrough at our{' '}
            <span className="italic font-normal gold-gradient-text">Financial District Experience Centre.</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory-300/70 font-light max-w-2xl mx-auto">
            Experience our 1:1 scale mockups of the signature outdoor living balcony and consult 
            with our dedicated architectural advisors.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.22em] transition-all shadow-luxury hover:shadow-[0_0_25px_rgba(204,168,123,0.3)]"
            >
              Book Private Consultation
            </Link>
            <Link
              to="/locations"
              className="px-7 py-4 rounded-sm bg-obsidian-900 hover:bg-obsidian-850 border border-white/10 hover:border-champagne-400/50 text-ivory-100 text-xs font-semibold uppercase tracking-[0.22em] transition-all"
            >
              Explore Hyderabad Corridors
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
