import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, ChevronRight } from 'lucide-react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Curated editorial loading states
  const loadingStatusText = () => {
    if (progress < 30) return "Surveying Hyderabad's Prime Corridors...";
    if (progress < 65) return "Engineering 200 sq.ft Outdoor Balconies...";
    if (progress < 90) return "Computing Sun-Path & Wind Vectors...";
    return "Welcome to ASBL Sovereign Living.";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExiting(true), 400);
          setTimeout(() => onFinish && onFinish(), 1200);
          return 100;
        }
        // Organic luxury ease
        const inc = Math.floor(Math.random() * 6) + 3;
        return Math.min(prev + inc, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => onFinish && onFinish(), 800);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="loader-curtain-root"
          className="fixed inset-0 z-50 pointer-events-auto overflow-hidden flex flex-col justify-between"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Top Shutter Curtain (Slides Up upon completion) */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-obsidian-950 border-b border-champagne-400/20 z-0"
          />

          {/* Bottom Shutter Curtain (Slides Down upon completion) */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100%', transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-obsidian-950 border-t border-champagne-400/20 z-0"
          />

          {/* Center Content Layer */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center px-6 max-w-xl mx-auto text-center w-full">
            
            {/* Architectural Compass & Astrolabe Emblem */}
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
              {/* Outer delicate rotating ring with degrees markers */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-champagne-400/30 flex items-center justify-center"
              >
                <div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-champagne-400" />
                <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-champagne-400/50" />
                <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-champagne-400/50" />
                <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-champagne-400/50" />
              </motion.div>

              {/* Counter-rotating dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border border-dashed border-champagne-400/20"
              />

              {/* Inner golden glowing core */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-6 rounded-full bg-champagne-400/10 blur-sm"
              />

              {/* Architectural drafting geometric icon */}
              <svg viewBox="0 0 64 64" className="w-12 h-12 text-champagne-400 relative z-10" fill="none">
                <motion.path
                  d="M32 6 L56 54 L46 54 L32 24 L18 54 L8 54 Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />
                <motion.line
                  x1="18"
                  y1="40"
                  x2="46"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                />
                <motion.circle
                  cx="32"
                  cy="24"
                  r="2.5"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                />
              </svg>
            </div>

            {/* Brand Title with High-End Editorial Spacing */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2 mb-8"
            >
              <h1 className="font-display text-4xl sm:text-5xl tracking-[0.4em] text-ivory-50 uppercase font-light">
                A S B L
              </h1>
              <div className="flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-champagne-400/40" />
                <p className="font-sans text-[10px] sm:text-xs tracking-[0.45em] uppercase text-champagne-300 font-medium">
                  Residential Architecture • Hyderabad
                </p>
                <span className="w-8 h-[1px] bg-champagne-400/40" />
              </div>
            </motion.div>

            {/* Progress Bar & Numerical Metrics */}
            <div className="w-72 sm:w-80 space-y-3">
              <div className="h-[2px] w-full bg-obsidian-850 rounded-full overflow-hidden relative border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-champagne-600 via-champagne-400 to-ivory-50 relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Glowing leading spark */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-champagne-300 blur-xs" />
                </motion.div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-[11px] text-champagne-400 tracking-wider">
                  {loadingStatusText()}
                </span>
                <span className="font-mono text-xs text-ivory-100 font-semibold">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Skip Option */}
            <button
              onClick={handleSkip}
              className="mt-10 inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-[0.25em] text-ivory-300/40 hover:text-champagne-400 transition-colors"
            >
              <span>Skip Introduction</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Footer watermark */}
          <div className="relative z-10 pb-6 text-center text-[10px] font-mono tracking-widest text-ivory-300/30 uppercase">
            Ashoka Builders India Pvt. Ltd. • Telangana RERA Registered
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
