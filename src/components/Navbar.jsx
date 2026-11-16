import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects', badge: '7' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Locations', path: '/locations' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Schedule Visit', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian-950/90 backdrop-blur-2xl border-b border-champagne-400/15 py-3.5 shadow-luxury'
            : 'bg-gradient-to-b from-obsidian-950/95 via-obsidian-950/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <Link to="/" className="group flex items-center gap-3.5 focus:outline-none">
            <div className="w-9 h-9 rounded-sm border border-champagne-400/40 flex items-center justify-center bg-obsidian-900/80 group-hover:border-champagne-400 group-hover:shadow-[0_0_15px_rgba(204,168,123,0.3)] transition-all">
              <span className="font-display text-champagne-400 font-bold text-sm tracking-wider">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-[0.28em] text-ivory-50 uppercase font-light group-hover:text-champagne-300 transition-colors">
                ASBL
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-champagne-400/80 -mt-1 font-sans font-medium">
                Sovereign Living
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs uppercase tracking-[0.22em] font-medium transition-all py-1.5 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-champagne-300 font-semibold text-glow'
                      : 'text-ivory-300/70 hover:text-ivory-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-champagne-400/20 text-champagne-300 border border-champagne-400/30">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[1.8px] bg-gradient-to-r from-champagne-500 via-champagne-300 to-champagne-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gradient-to-r from-champagne-500/15 via-champagne-400/25 to-champagne-500/15 border border-champagne-400/50 hover:border-champagne-400 hover:bg-champagne-400 text-champagne-300 hover:text-obsidian-950 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(204,168,123,0.3)]"
            >
              <span>VIP Site Tour</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm text-ivory-200 hover:text-champagne-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-obsidian-950/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 lg:hidden"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-champagne-400 block mb-2 font-semibold">
                Explore ASBL Architecture
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `font-serif text-2xl tracking-wide transition-colors flex items-center justify-between border-b border-white/5 pb-3 ${
                        isActive ? 'text-champagne-300 font-normal italic' : 'text-ivory-100 hover:text-champagne-300'
                      }`
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-champagne-400/20 text-champagne-300 border border-champagne-400/30">
                          {link.badge} Projects
                        </span>
                      )}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-champagne-400/60" />
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="space-y-5 pt-6 border-t border-white/10">
              <Link
                to="/contact"
                className="w-full py-3.5 rounded-sm bg-champagne-400 text-obsidian-950 font-semibold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 shadow-luxury"
              >
                <span>Schedule VIP Site Tour</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="text-center space-y-1">
                <p className="text-[11px] text-ivory-300/50 uppercase tracking-widest">
                  Financial District Experience Centre • Gachibowli
                </p>
                <p className="text-xs text-champagne-400/90 font-mono">
                  +91 40 4821 9999 • contact@asbl.in
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
