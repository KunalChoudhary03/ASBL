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
  RefreshCw,
  MapPin,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ASBL_PROJECTS } from '../data/projectsData';

export default function ContactPage({ prefilledProject, onResetPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: prefilledProject || 'ASBL Broadway',
    configuration: '3 BHK',
    visitDate: '',
    visitTime: '11:00 AM',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

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

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const referenceId = 'ASBL-VIP-' + Math.floor(100000 + Math.random() * 900000);
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

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#CCA87B', '#E6D5B8', '#F5EFE6', '#1B2E24'],
        });
      } catch (err) {}
    }, 700);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      project: 'ASBL Broadway',
      configuration: '3 BHK',
      visitDate: '',
      visitTime: '11:00 AM',
      message: '',
    });
    setErrors({});
    if (onResetPrefill) onResetPrefill();
  };

  const purchaseFaqs = [
    {
      q: "Are all 7 ASBL residential developments registered with Telangana RERA?",
      a: "Yes, without exception. Every single ASBL project carries an active Telangana State RERA registration number (e.g. ASBL Broadway: P02400009684, ASBL Legacy: P02500011162). All plans, milestone commitments, and statutory approvals are public records."
    },
    {
      q: "Can I inspect the physical Outdoor Living Balcony mockup during my site tour?",
      a: "Yes. Our Financial District Experience Centre features full 1:1 scale walk-through mockups of the signature outdoor living room balconies, monolithic shear-wall cross sections, and acoustic window assemblies."
    },
    {
      q: "Which leading banking institutions have approved ASBL developments for home loans?",
      a: "All premier financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank have pre-approved ASBL projects with expedited mortgage processing."
    }
  ];

  return (
    <div className="pt-32 pb-36 min-h-screen bg-obsidian-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-champagne-400/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            VIP Concierge & Consultation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-ivory-50 leading-tight">
            Schedule a Private Tour or <br />
            <span className="italic font-normal gold-gradient-text">Architectural Consultation.</span>
          </h1>
          <p className="text-base text-ivory-300/70 font-light leading-relaxed">
            Connect with our residential advisors to inspect complete floor plan layouts, receive tailored 
            unit allocations, and tour physical balcony mockups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!submittedBooking ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="glass-panel-gold p-8 sm:p-10 rounded-sm border border-champagne-400/20 shadow-luxury space-y-6"
                >
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-serif text-2xl text-ivory-50 font-light">
                      Reserve Your Private Appointment
                    </h3>
                    <p className="text-xs text-champagne-400 font-sans uppercase tracking-wider mt-1">
                      Direct Dedicated Advisory Session
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
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
                          errors.name ? 'border-red-400' : 'border-white/10 focus:border-champagne-400'
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
                    <div className="space-y-1.5">
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
                          errors.phone ? 'border-red-400' : 'border-white/10 focus:border-champagne-400'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
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
                          errors.email ? 'border-red-400' : 'border-white/10 focus:border-champagne-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Project Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                        <Building className="w-3.5 h-3.5 text-champagne-400" />
                        Project of Interest *
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

                    {/* Configuration */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                        Preferred BHK
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

                    {/* Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                        Preferred Date (Optional)
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

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-mono tracking-wider text-ivory-300/80 flex items-center gap-2">
                      Specific Inquiries / Floor Plan Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Request a specific tower, high-floor orientation, or brochure PDF..."
                      className="w-full bg-obsidian-900 border border-white/10 focus:border-champagne-400 rounded-sm py-3 px-4 text-xs sm:text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Notice */}
                  <div className="p-4 rounded-sm bg-obsidian-950/60 border border-white/5 flex items-start gap-3 text-xs text-ivory-300/60">
                    <ShieldCheck className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="text-ivory-200">Showcase Demonstration:</strong> This web portfolio 
                      simulates the official ASBL customer enquiry workflow. For official direct bookings, 
                      visit the developer's portal at <a href="https://asbl.in" target="_blank" rel="noopener noreferrer" className="text-champagne-400 underline">asbl.in</a>.
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 disabled:opacity-60 text-obsidian-950 font-semibold text-xs uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-3 shadow-luxury"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting VIP Reservation...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Consultation Booking</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Card */
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-panel-gold p-8 sm:p-12 rounded-sm border border-champagne-400/40 shadow-luxury space-y-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-champagne-400/10 border border-champagne-400/30 flex items-center justify-center mx-auto text-champagne-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-champagne-400 font-semibold">
                      VIP Appointment Requested
                    </span>
                    <h3 className="font-serif text-3xl text-ivory-50 font-light">
                      Thank You, {submittedBooking.name}
                    </h3>
                    <p className="text-sm text-ivory-300/70 max-w-lg mx-auto">
                      Your appointment docket for <strong className="text-ivory-100">{submittedBooking.project}</strong> has been logged.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto p-5 rounded-sm bg-obsidian-900/80 border border-white/10 text-left space-y-3">
                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                      <span className="text-ivory-300/60 font-mono">Reference Code:</span>
                      <span className="text-champagne-300 font-mono font-bold">{submittedBooking.refId}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-ivory-300/60 font-mono">Project:</span>
                      <span className="text-ivory-100 font-medium">{submittedBooking.project}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-ivory-300/60 font-mono">Layout:</span>
                      <span className="text-ivory-100 font-medium">{submittedBooking.configuration}</span>
                    </div>
                    {submittedBooking.visitDate && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-ivory-300/60 font-mono">Requested Date:</span>
                        <span className="text-champagne-400 font-medium">{submittedBooking.visitDate}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-xs font-semibold uppercase tracking-wider text-ivory-200 hover:text-champagne-300 transition-colors"
                    >
                      Schedule Another Tour
                    </button>
                    <a
                      href="https://asbl.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
                    >
                      <span>Official ASBL Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Details & Experience Centre */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Experience Centre Card */}
            <div className="glass-panel p-7 rounded-sm border border-white/10 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-400 font-semibold block">
                Corporate Headquarters
              </span>
              <h3 className="font-serif text-2xl text-ivory-50 font-light">
                Financial District Experience Centre
              </h3>
              <p className="text-xs text-ivory-300/70 leading-relaxed font-light">
                Ashoka Builders India Private Limited (ASBL)<br />
                Financial District, Nanakramguda, Gachibowli, Hyderabad, Telangana 500032
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-ivory-200">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-champagne-400" />
                  <span>+91 40 4821 9999</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-champagne-400" />
                  <span>contact@asbl.in</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Monday – Sunday: 9:30 AM to 6:30 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Purchase FAQs */}
            <div className="glass-panel p-7 rounded-sm border border-white/10 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-400 font-semibold block">
                Buyer FAQ
              </span>
              
              <div className="space-y-3">
                {purchaseFaqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="border-b border-white/5 pb-2.5">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-2 text-xs font-medium text-ivory-100 hover:text-champagne-300 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-champagne-400 shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <p className="text-[11px] text-ivory-300/70 pt-2 leading-relaxed font-light">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
