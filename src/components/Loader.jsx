import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 350);
          setTimeout(() => onFinish && onFinish(), 1100);
          return 100;
        }
        // Organic non-linear increments
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian-950 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle architectural geometric background lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne-400/40 to-transparent" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-champagne-400/40 to-transparent" />
            <div className="absolute inset-12 border border-champagne-400/10 rounded-sm" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 max-w-lg text-center">
            {/* Architectural Crest / Monogram Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-24 h-24 mb-8 flex items-center justify-center"
            >
              {/* Rotating outer delicate rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-champagne-400/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border border-champagne-400/20"
              />
              
              {/* Minimalist architectural glyph */}
              <svg viewBox="0 0 60 60" className="w-12 h-12 text-champagne-400" fill="none">
                <motion.path
                  d="M30 6 L52 48 L43 48 L30 22 L17 48 L8 48 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
                <motion.line
                  x1="18"
                  y1="37"
                  x2="42"
                  y2="37"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </svg>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-2 mb-8"
            >
              <h1 className="font-display text-3xl md:text-4xl tracking-[0.35em] text-ivory-50 uppercase font-light">
                A S B L
              </h1>
              <p className="font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase text-champagne-400/80 font-medium">
                Residential Architecture • Hyderabad
              </p>
            </motion.div>

            {/* Progress bar & percentage */}
            <div className="w-64 space-y-3">
              <div className="h-[2px] w-full bg-obsidian-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-champagne-500 via-champagne-300 to-ivory-50"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-ivory-300/60 font-mono">
                <span className="tracking-widest uppercase text-[10px] text-champagne-400/80 font-sans">
                  Crafting Experience
                </span>
                <span>{progress}%</span>
              </div>
            </div>

            {/* Editorial quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 40 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 text-xs font-serif italic text-ivory-300/60 tracking-wider"
            >
              "Engineering Spaces For Living, Not Just Existing"
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
