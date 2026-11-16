import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  Calendar,
  Building,
  Maximize2,
  ShieldCheck,
  Check,
  ExternalLink,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Clock,
  Layers,
  Compass
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, onEnquireProject }) {
  if (!isOpen || !project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    { url: project.images.hero, label: "Hero Perspective" },
    { url: project.images.exterior, label: "Architectural Exterior" },
    { url: project.images.balcony, label: "Signature Outdoor Living Balcony" },
    { url: project.images.clubhouse, label: "Grand Clubhouse & Amenities" },
    { url: project.images.interior, label: "Interior Residences" },
  ];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-obsidian-900 border border-white/10 rounded-sm shadow-luxury overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Top Bar / Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-obsidian-950/60 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400 bg-champagne-400/10 px-2.5 py-1 rounded-sm border border-champagne-400/20">
                Architectural Spec Sheet
              </span>
              <span className="text-xs text-ivory-300/50 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-ivory-300/60 hidden sm:inline">
                RERA: {project.reraNumber}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-sm text-ivory-300 hover:text-champagne-300 hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-8">
            
            {/* Gallery Carousel Header */}
            <div className="space-y-3">
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden border border-white/10 bg-obsidian-950">
                <img
                  src={galleryImages[activeImageIndex].url}
                  alt={`${project.name} - ${galleryImages[activeImageIndex].label}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Image Label & Counter */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-xs font-medium text-ivory-100 bg-obsidian-950/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10">
                    {galleryImages[activeImageIndex].label}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 z-10 text-xs font-mono text-ivory-300/70 bg-obsidian-950/80 px-2.5 py-1 rounded-sm border border-white/10">
                  {activeImageIndex + 1} / {galleryImages.length}
                </div>

                {/* Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-sm bg-obsidian-950/70 hover:bg-champagne-400 hover:text-obsidian-950 text-ivory-100 transition-colors border border-white/10"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-sm bg-obsidian-950/70 hover:bg-champagne-400 hover:text-obsidian-950 text-ivory-100 transition-colors border border-white/10"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-sm overflow-hidden shrink-0 border transition-all ${
                      activeImageIndex === idx
                        ? 'border-champagne-400 scale-100 ring-1 ring-champagne-400'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title & Core Meta */}
            <div className="space-y-4 border-b border-white/10 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-ivory-50 tracking-tight font-light">
                    {project.name}
                  </h3>
                  <p className="text-sm font-sans text-champagne-300 mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1.5 rounded-sm text-xs font-semibold tracking-wider uppercase border ${
                      project.statusCategory === 'completed'
                        ? 'bg-forest-800/80 text-emerald-300 border-emerald-500/30'
                        : 'bg-champagne-500/15 text-champagne-300 border-champagne-400/30'
                    }`}
                  >
                    {project.statusBadge}
                  </span>
                </div>
              </div>

              {/* Location & Handover Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="p-3.5 rounded-sm bg-obsidian-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider font-semibold text-[10px]">Location</span>
                  </div>
                  <p className="text-xs text-ivory-100 font-medium">{project.location}</p>
                </div>

                <div className="p-3.5 rounded-sm bg-obsidian-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
                    <Building className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider font-semibold text-[10px]">Configuration</span>
                  </div>
                  <p className="text-xs text-ivory-100 font-medium">{project.configuration}</p>
                </div>

                <div className="p-3.5 rounded-sm bg-obsidian-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider font-semibold text-[10px]">Handover Timeline</span>
                  </div>
                  <p className="text-xs text-ivory-100 font-medium">{project.handoverTimeline}</p>
                </div>

                <div className="p-3.5 rounded-sm bg-obsidian-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-champagne-400 text-xs mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider font-semibold text-[10px]">Structure & Scale</span>
                  </div>
                  <p className="text-xs text-ivory-100 font-medium">{project.storeys} • {project.openSpace}</p>
                </div>
              </div>
            </div>

            {/* In-depth Overview */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-ivory-100 font-medium">
                Architectural Vision & Overview
              </h4>
              <p className="text-sm text-ivory-300/80 font-light leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-ivory-100 font-medium">
                Key Engineering & Architectural Hallmarks
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.architecturalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-sm bg-obsidian-950/40 border border-white/5"
                  >
                    <div className="p-1 rounded-full bg-champagne-400/10 text-champagne-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-ivory-200 font-light leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Configurations & Dimensions Breakdown */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-ivory-100 font-medium">
                Unit Configurations & Layouts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.configurationsList.map((config, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-obsidian-950/70 border border-champagne-400/20 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-champagne-300">
                        {config.type}
                      </span>
                      <span className="text-xs font-mono text-ivory-100 bg-white/5 px-2 py-0.5 rounded">
                        {config.area}
                      </span>
                    </div>
                    <p className="text-xs text-ivory-300/60 font-light">
                      Specification: {config.carpet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curated Amenities Grid */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-ivory-100 font-medium">
                Clubhouse & Lifestyle Amenities ({project.clubhouseSize})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-sm bg-obsidian-950/40 border border-white/5 flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                    <span className="text-[11px] text-ivory-200 font-medium truncate">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Connectivity & Landmarks */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h4 className="font-serif text-xl text-ivory-100 font-medium">
                Corridor Connectivity & Travel Times
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.connectivity.map((conn, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-sm bg-obsidian-950/60 border border-white/5"
                  >
                    <span className="text-[10px] uppercase font-mono text-champagne-400 block mb-1">
                      {conn.time}
                    </span>
                    <span className="text-xs text-ivory-100 font-medium">
                      {conn.landmark}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Modal Footer with Direct Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-white/10 bg-obsidian-950/80 sticky bottom-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-ivory-300/60">
              <ShieldCheck className="w-4 h-4 text-champagne-400" />
              <span>Telangana RERA Reg: <strong className="text-ivory-100 font-mono">{project.reraNumber}</strong></span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={project.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-xs font-semibold uppercase tracking-wider text-ivory-200 hover:text-champagne-300 transition-colors flex items-center justify-center gap-2"
              >
                <span>Official ASBL Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  onClose();
                  onEnquireProject && onEnquireProject(project.name);
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-luxury"
              >
                <span>Inquire About {project.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
