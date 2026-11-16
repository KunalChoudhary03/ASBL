import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenEnquiry, onSelectProject }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check section in view
      const sections = ['hero', 'projects', 'philosophy', 'corridors', 'story', 'enquiry'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#philosophy' },
    { name: 'Locations', href: '#corridors' },
    { name: 'Philosophy', href: '#story' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-elevated'
            : 'bg-gradient-to-b from-obsidian-950/90 via-obsidian-950/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-sm border border-champagne-400/40 flex items-center justify-center bg-obsidian-900/60 group-hover:border-champagne-400 transition-colors">
              <span className="font-display text-champagne-400 font-bold text-sm tracking-wider">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-[0.25em] text-ivory-50 uppercase font-medium group-hover:text-champagne-300 transition-colors">
                ASBL
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-champagne-400/80 -mt-1 font-sans">
                Living Redefined
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs uppercase tracking-[0.22em] font-medium transition-colors py-1 ${
                    isActive
                      ? 'text-champagne-300'
                      : 'text-ivory-300/70 hover:text-ivory-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-champagne-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gradient-to-r from-champagne-500/10 to-champagne-400/20 border border-champagne-400/40 hover:border-champagne-400 hover:bg-champagne-400 text-champagne-300 hover:text-obsidian-950 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm"
            >
              <span>Schedule Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm text-ivory-200 hover:text-champagne-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-obsidian-950/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8 md:hidden"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-champagne-400 block mb-2">
                Navigation
              </span>
              <div className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-serif text-2xl text-ivory-100 hover:text-champagne-300 tracking-wide transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-champagne-400/60" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry && onOpenEnquiry();
                }}
                className="w-full py-3.5 rounded-sm bg-champagne-400 text-obsidian-950 font-semibold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 shadow-luxury"
              >
                <span>Schedule Private Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <p className="text-[11px] text-ivory-300/50 uppercase tracking-widest">
                  Hyderabad Head Office • Financial District
                </p>
                <p className="text-xs text-champagne-400/80 mt-1 font-mono">
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
