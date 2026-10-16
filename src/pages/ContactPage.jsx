import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/websiteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Morrisville',
    projectType: 'Home Remodeling & General Handyman Repairs',
    preferredContact: 'Text',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleSendSMS = () => {
    const textBody = encodeURIComponent(
      `Hello Joseph! I'm reaching out from your website contact page.\nName: ${formData.name}\nCity: ${formData.city}\nService: ${formData.projectType}\nDetails: ${formData.message || 'Looking for an upfront estimate'}`
    );
    window.open(`sms:${COMPANY_INFO.phoneClean}?body=${textBody}`, '_blank');
  };

  return (
    <div className="py-14 sm:py-20 bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header (Blueprint Exact) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-800">
            <span>Direct Communication</span>
            <span className="text-neutral-300">•</span>
            <span>No Sales Reps</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-neutral-950 tracking-tight">
            Let's Build Something Together
          </h1>

          {/* Blueprint exact copy */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Have a custom welding requirement or a list of home repairs? Reach out today for an honest, upfront quote.
          </p>
        </div>

        {/* Contact Grid: Details vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Business Contact Details (Blueprint Matched) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 space-y-6 shadow-sm">
              
              <h2 className="text-xl font-display font-bold text-neutral-950 border-b border-neutral-100 pb-3">
                Business Contact Details
              </h2>

              {/* Company Name */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Company Name
                </span>
                <p className="text-sm font-bold text-neutral-950 mt-1">
                  {COMPANY_INFO.name}
                </p>
              </div>

              {/* Phone Number (Call/Text) */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Phone Number (Call/Text)
                </span>
                <div className="mt-1">
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="text-lg sm:text-xl font-display font-extrabold text-neutral-950 hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-craft-accent" />
                    <span>{COMPANY_INFO.phone} (Call/Text)</span>
                  </a>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Owner answers directly or returns calls within hours
                </div>
              </div>

              {/* Service Location */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Service Location
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 mt-1 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.serviceAreaSummary}</span>
                </p>
              </div>

              {/* Operating Hours */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Working Hours
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 mt-1 flex items-start gap-1.5">
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.hours}</span>
                </p>
              </div>

              {/* Connect Online (Blueprint Exact) */}
              <div className="pt-3 border-t border-neutral-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Connect Online
                </span>
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Find us on Facebook</span>
                </a>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="py-3 px-3 rounded-xl bg-neutral-950 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`sms:${COMPANY_INFO.phoneClean}`}
                  className="py-3 px-3 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-neutral-200 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Text Joseph</span>
                </a>
              </div>

            </div>

            {/* BBB Badge */}
            <div className="p-5 rounded-3xl bg-white border border-neutral-200 flex items-center gap-3.5 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <strong className="text-neutral-950 block font-bold">BBB Accredited Business</strong>
                <span className="text-neutral-500">Committed to honesty, transparent pricing, and quality craftsmanship.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Modern Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
              
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-neutral-950">
                      Request an Upfront Quote
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Direct quote from master tradesman Joseph Fabela.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-950 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                          Phone Number (Call/Text) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(919) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-950 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-950 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                          Your Town / City
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-xs text-neutral-950 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                        >
                          {COMPANY_INFO.serviceAreas.map((city, idx) => (
                            <option key={idx} value={city}>
                              {city}, NC
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                        Service Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-xs text-neutral-950 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                      >
                        <option value="Home Remodeling & General Handyman Repairs">
                          Home Remodeling & General Handyman Repairs
                        </option>
                        <option value="Custom Mobile Welding & Fabrication">
                          Custom Mobile Welding & Fabrication (Gates, Fences, Structural)
                        </option>
                        <option value="Flooring Installations (LVP, Tile, Hardwood)">
                          Flooring Installations (LVP, Tile, Hardwood)
                        </option>
                        <option value="Electrical, Plumbing & Exterior Fixtures">
                          Electrical, Plumbing & Exterior Fixtures (Fans, Decks, Lighting)
                        </option>
                        <option value="Multiple Trades or Emergency Mobile Repair">
                          Multiple Trades or Emergency Mobile Repair
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                        Preferred Contact Mode
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: 'Text' })}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                            formData.preferredContact === 'Text'
                              ? 'bg-neutral-950 border-neutral-950 text-white'
                              : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                          }`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Text (SMS) Updates</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: 'Call' })}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                            formData.preferredContact === 'Call'
                              ? 'bg-neutral-950 border-neutral-950 text-white'
                              : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                          }`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Phone Call</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                        Project Details / Scope
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Briefly describe what you'd like repaired, built, or remodeled..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-950 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit for Upfront Quote</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center mx-auto text-neutral-950">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-neutral-950">
                    Quote Request Received
                  </h3>

                  <p className="text-neutral-600 text-xs max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-neutral-950">{formData.name}</strong>. Joseph Fabela has received your project details for <strong className="text-neutral-950">{formData.city}, NC</strong>.
                  </p>

                  <div className="pt-3 max-w-sm mx-auto space-y-2">
                    <button
                      onClick={handleSendSMS}
                      className="w-full py-3 px-4 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send as Direct SMS to Joseph</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full py-2.5 rounded-xl bg-neutral-100 text-neutral-700 text-xs font-semibold hover:bg-neutral-200 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 space-y-1">
            <h3 className="text-2xl font-display font-extrabold text-neutral-950">
              Frequently Asked Questions
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm">
              Common questions about estimates, text logs, and mobile welding.
            </p>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-neutral-950 flex items-center justify-between gap-4 hover:text-neutral-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-neutral-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
