import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Calendar,
  Phone,
  Mail,
  User,
  Building,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ASBL_PROJECTS } from '../data/projectsData';

export default function EnquirySection({ prefilledProject, onResetPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: prefilledProject || 'ASBL Legacy',
    configuration: '3 BHK',
    visitDate: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Sync when prefilled project changes
  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({ ...prev, project: prefilledProject }));
    }
  }, [prefilledProject]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required.';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API booking response
    setTimeout(() => {
      setIsSubmitting(false);
      const referenceId = 'ASBL-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBooking({
        refId: referenceId,
        ...formData,
        timestamp: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      });

      // Trigger celebratory golden confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#CCA87B', '#E6D5B8', '#F5EFE6', '#1B2E24'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 700);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      project: 'ASBL Legacy',
      configuration: '3 BHK',
      visitDate: '',
      message: '',
    });
    setErrors({});
    if (onResetPrefill) onResetPrefill();
  };

  return (
    <section id="enquiry" className="relative py-28 md:py-36 bg-obsidian-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-400/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            Private Advisory & Site Experience
            <span className="w-6 h-[1px] bg-champagne-400" />
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-tight">
            Schedule a Private Consultation or{' '}
            <span className="italic font-normal gold-gradient-text">Site Visit.</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory-300/70 font-light">
            Our architectural advisors are prepared to assist you with comprehensive floor plans, 
            construction status audits, and tailored unit layouts.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!submittedBooking ? (
              <motion.form
                key="enquiry-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="glass-panel p-8 sm:p-12 rounded-sm border border-champagne-400/20 shadow-luxury space-y-8"
              >
                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-champagne-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Rao"
                      className={`w-full bg-obsidian-900 border rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400/80' : 'border-white/10 focus:border-champagne-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-champagne-400" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98480 12345"
                      className={`w-full bg-obsidian-900 border rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400/80' : 'border-white/10 focus:border-champagne-400'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-champagne-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className={`w-full bg-obsidian-900 border rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400/80' : 'border-white/10 focus:border-champagne-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Preferred Project */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-champagne-400" />
                      Preferred Project *
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-obsidian-900 border border-white/10 focus:border-champagne-400 rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 focus:outline-none transition-colors cursor-pointer"
                    >
                      {ASBL_PROJECTS.map((p) => (
                        <option key={p.id} value={p.name} className="bg-obsidian-900 text-ivory-100">
                          {p.name} ({p.location.split(',')[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Configuration Interest */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                      Configuration Interest
                    </label>
                    <select
                      value={formData.configuration}
                      onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                      className="w-full bg-obsidian-900 border border-white/10 focus:border-champagne-400 rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="2 BHK" className="bg-obsidian-900">2 BHK Luxury</option>
                      <option value="3 BHK" className="bg-obsidian-900">3 BHK Signature / Executive</option>
                      <option value="3.5 BHK" className="bg-obsidian-900">3.5 BHK + Study</option>
                      <option value="4 BHK" className="bg-obsidian-900">4 BHK Royal Sky Residence</option>
                    </select>
                  </div>

                  {/* Preferred Visit Date */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                      Preferred Site Visit Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-obsidian-900 border border-white/10 focus:border-champagne-400 rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 focus:outline-none transition-colors cursor-pointer"
                    />
                  </div>

                </div>

                {/* Specific Requirements / Message */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your timeline, floor preference, or request a floor plan PDF..."
                    className="w-full bg-obsidian-900 border border-white/10 focus:border-champagne-400 rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Legal & Showcase Notice */}
                <div className="p-4 rounded-sm bg-obsidian-950/60 border border-white/5 flex items-start gap-3 text-xs text-ivory-300/60">
                  <ShieldCheck className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-ivory-200">Showcase Demonstration:</strong> This web portfolio 
                    simulates the official ASBL customer enquiry workflow. In a live production deployment, 
                    this connects to ASBL's sales CRM. For direct official enquiries, please visit the developer's 
                    verified portal at <a href="https://asbl.in" target="_blank" rel="noopener noreferrer" className="text-champagne-400 underline hover:text-champagne-300">asbl.in</a>.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 disabled:opacity-60 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-3 shadow-luxury"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success Confirmation Card */
              <motion.div
                key="enquiry-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-panel p-8 sm:p-12 rounded-sm border border-champagne-400/40 shadow-luxury space-y-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-champagne-400/10 border border-champagne-400/30 flex items-center justify-center mx-auto text-champagne-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-champagne-400 font-semibold">
                    Request Generated Successfully
                  </span>
                  <h3 className="font-serif text-3xl text-ivory-50 font-light">
                    Thank You, {submittedBooking.name}
                  </h3>
                  <p className="text-sm text-ivory-300/70 max-w-lg mx-auto">
                    Your interest in <strong className="text-ivory-100">{submittedBooking.project}</strong> ({submittedBooking.configuration}) has been registered with priority showcase reference.
                  </p>
                </div>

                {/* Booking Receipt Box */}
                <div className="max-w-md mx-auto p-5 rounded-sm bg-obsidian-900/80 border border-white/10 text-left space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                    <span className="text-ivory-300/60 font-mono">Reference Docket:</span>
                    <span className="text-champagne-300 font-mono font-bold">{submittedBooking.refId}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-ivory-300/60 font-mono">Project:</span>
                    <span className="text-ivory-100 font-medium">{submittedBooking.project}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-ivory-300/60 font-mono">Configuration:</span>
                    <span className="text-ivory-100 font-medium">{submittedBooking.configuration}</span>
                  </div>
                  {submittedBooking.visitDate && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-ivory-300/60 font-mono">Requested Visit:</span>
                      <span className="text-champagne-400 font-medium">{submittedBooking.visitDate}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                    <span className="text-ivory-300/60 font-mono">Contact Registered:</span>
                    <span className="text-ivory-200">{submittedBooking.phone}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-xs font-semibold uppercase tracking-wider text-ivory-200 hover:text-champagne-300 transition-colors"
                  >
                    Submit Another Query
                  </button>

                  <a
                    href="https://asbl.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
                  >
                    <span>Visit Official ASBL Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
