import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { ASBL_PROJECTS } from '../data/projectsData';

export default function Footer({ onSelectProjectByName }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-champagne-400/20 pt-20 pb-12 overflow-hidden text-ivory-300">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-champagne-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Tier: Brand Essence & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-sm border border-champagne-400/50 flex items-center justify-center bg-obsidian-900 shadow-[0_0_15px_rgba(204,168,123,0.2)]">
                <span className="font-display text-champagne-400 font-bold text-base">A</span>
              </div>
              <div>
                <span className="font-display text-2xl tracking-[0.25em] text-ivory-50 uppercase font-light block">
                  ASBL
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-champagne-400/90 font-medium">
                  Ashoka Builders India Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-ivory-300/70 font-light leading-relaxed max-w-md">
              Pioneering modern residential architecture across Hyderabad. Known for introducing 
              large-format outdoor living balconies, monolithic in-situ construction, and 100% on-time 
              handover transparency.
            </p>

            <div className="flex items-center gap-2 text-xs text-champagne-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Telangana State RERA Approved Developments</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-champagne-400 font-semibold block">
                The Architectural Journal
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-ivory-50 font-light">
                Receive quarterly construction milestone reports & floor plan releases.
              </h4>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="flex-1 bg-obsidian-900 border border-white/10 focus:border-champagne-400 rounded-sm py-3 px-4 text-xs text-ivory-100 placeholder:text-ivory-300/40 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="py-3 px-6 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.2em] transition-colors shrink-0 shadow-sm"
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        {/* Middle Tier: Projects Index & Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10 text-xs">
          
          <div className="space-y-4">
            <h5 className="font-mono uppercase tracking-[0.2em] text-champagne-400 font-semibold text-[11px]">
              Ongoing Developments
            </h5>
            <ul className="space-y-2.5">
              {['ASBL Legacy', 'ASBL Broadway', 'ASBL Landmark', 'ASBL Loft'].map((name) => (
                <li key={name}>
                  <button
                    onClick={() => onSelectProjectByName && onSelectProjectByName(name)}
                    className="text-ivory-300/70 hover:text-champagne-300 transition-colors text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-mono uppercase tracking-[0.2em] text-champagne-400 font-semibold text-[11px]">
              Delivered Communities
            </h5>
            <ul className="space-y-2.5">
              {['ASBL Spectra', 'ASBL Springs', 'ASBL Spire'].map((name) => (
                <li key={name}>
                  <button
                    onClick={() => onSelectProjectByName && onSelectProjectByName(name)}
                    className="text-ivory-300/70 hover:text-champagne-300 transition-colors text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="https://asbl.in/our-projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne-400 hover:underline flex items-center gap-1 text-[11px]"
                >
                  <span>Official Archive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-mono uppercase tracking-[0.2em] text-champagne-400 font-semibold text-[11px]">
              Explore Pages
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-ivory-300/70 hover:text-champagne-300 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-ivory-300/70 hover:text-champagne-300 transition-colors">
                  Projects Catalogue (7)
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="text-ivory-300/70 hover:text-champagne-300 transition-colors">
                  Architecture & Engineering
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-ivory-300/70 hover:text-champagne-300 transition-colors">
                  Hyderabad Corridors
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="text-ivory-300/70 hover:text-champagne-300 transition-colors">
                  Brand Philosophy & Manifesto
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivory-300/70 hover:text-champagne-300 transition-colors">
                  VIP Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-mono uppercase tracking-[0.2em] text-champagne-400 font-semibold text-[11px]">
              Corporate Experience Centre
            </h5>
            <p className="text-ivory-300/70 leading-relaxed">
              Financial District, Nanakramguda, Gachibowli, Hyderabad, Telangana 500032
            </p>
            <div className="space-y-1 font-mono text-[11px] text-ivory-300/80">
              <p>Phone: +91 40 4821 9999</p>
              <p>Email: contact@asbl.in</p>
              <p>Web: asbl.in</p>
            </div>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-ivory-300/50">
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} ASBL Residential Showcase. Engineered with care for design and architectural integrity. 
            All project images and details sourced from verified public documentation and Telangana RERA filings.
          </p>

          <button
            onClick={scrollToTop}
            className="text-champagne-400 hover:text-champagne-300 uppercase tracking-widest text-[10px] font-mono shrink-0"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
