import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Building, MapPin, Clock, Layers, Sparkles, ArrowRight } from 'lucide-react';

export default function CompareModal({ isOpen, onClose, selectedProjects, onRemoveProject, onSelectDetail, onEnquireProject }) {
  if (!isOpen || !selectedProjects || selectedProjects.length === 0) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl bg-obsidian-900 border border-white/10 rounded-sm shadow-luxury overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-obsidian-950/60 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <h3 className="font-serif text-2xl text-ivory-50 font-light">
                Architectural Matrix Comparison
              </h3>
              <p className="text-xs text-champagne-400 font-sans tracking-wider uppercase mt-0.5">
                Comparing {selectedProjects.length} Selected ASBL Developments
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-sm text-ivory-300 hover:text-champagne-300 hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto p-6">
            <div className={`grid grid-cols-${selectedProjects.length + 1} min-w-[650px] gap-4`}>
              
              {/* Row 1: Project Identity & Images */}
              <div className="p-4 bg-obsidian-950/40 rounded-sm flex items-end">
                <span className="text-xs font-semibold uppercase tracking-wider text-ivory-300/60 font-mono">
                  Project Details
                </span>
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-4 bg-obsidian-950/60 rounded-sm border border-white/5 relative group">
                  <button
                    onClick={() => onRemoveProject(p.id)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-obsidian-900 text-ivory-300 hover:text-red-400 text-xs border border-white/10"
                    title="Remove from comparison"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <img
                    src={p.images.hero}
                    alt={p.name}
                    className="w-full h-28 object-cover rounded-sm mb-3"
                  />
                  <h4 className="font-serif text-lg text-ivory-50 font-medium">{p.name}</h4>
                  <p className="text-xs text-champagne-400 mt-0.5">{p.location}</p>
                </div>
              ))}

              {/* Row 2: Status */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm flex items-center text-xs font-semibold text-ivory-300/80">
                Status
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm flex items-center">
                  <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                    p.statusCategory === 'completed'
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                      : 'bg-champagne-500/10 text-champagne-300 border border-champagne-400/20'
                  }`}>
                    {p.statusBadge}
                  </span>
                </div>
              ))}

              {/* Row 3: Configurations */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm flex items-center text-xs font-semibold text-ivory-300/80">
                Configurations
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm text-xs text-ivory-100 font-medium flex items-center">
                  {p.configuration}
                </div>
              ))}

              {/* Row 4: Handover Timeline */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm flex items-center text-xs font-semibold text-ivory-300/80">
                Handover Timeline
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm text-xs text-ivory-200 flex items-center font-mono">
                  {p.handoverTimeline}
                </div>
              ))}

              {/* Row 5: Storeys / Height */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm flex items-center text-xs font-semibold text-ivory-300/80">
                Storeys & Scale
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm text-xs text-ivory-200 flex items-center">
                  {p.storeys}
                </div>
              ))}

              {/* Row 6: Clubhouse Size */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm flex items-center text-xs font-semibold text-ivory-300/80">
                Clubhouse Space
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm text-xs text-champagne-300 font-mono flex items-center">
                  {p.clubhouseSize}
                </div>
              ))}

              {/* Row 7: Open Landscape */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm flex items-center text-xs font-semibold text-ivory-300/80">
                Open Green Space
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm text-xs text-ivory-200 flex items-center">
                  {p.openSpace}
                </div>
              ))}

              {/* Row 8: Telangana RERA */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm flex items-center text-xs font-semibold text-ivory-300/80">
                RERA Registration
              </div>
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm text-xs text-ivory-300/70 font-mono flex items-center">
                  {p.reraNumber}
                </div>
              ))}

              {/* Row 9: Actions */}
              <div className="p-3 bg-obsidian-950/40 rounded-sm" />
              {selectedProjects.map((p) => (
                <div key={p.id} className="p-3 bg-obsidian-950/30 rounded-sm flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectDetail(p);
                    }}
                    className="w-full py-2 px-3 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-ivory-200 hover:text-champagne-300 transition-colors"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onEnquireProject(p.name);
                    }}
                    className="w-full py-2 px-3 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 text-[11px] font-semibold uppercase tracking-wider transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              ))}

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
