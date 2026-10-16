import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function QuoteModal({ isOpen, onClose, initialScope }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Morrisville',
    projectType: 'Home Remodeling & General Handyman Repairs',
    preferredContact: 'Text',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialScope) {
      setFormData(prev => ({
        ...prev,
        projectType: initialScope.trade || prev.projectType,
        notes: initialScope.scope ? `Estimated Scope: ${initialScope.scope} (${initialScope.estimateRange || ''})` : prev.notes
      }));
    }
  }, [initialScope]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleSendDirectSMS = () => {
    const textBody = encodeURIComponent(
      `Hello Joseph! I requested a quote from your website:\nName: ${formData.name}\nCity: ${formData.city}\nProject: ${formData.projectType}\nScope: ${formData.notes || 'Looking for an upfront estimate'}`
    );
    window.open(`sms:${COMPANY_INFO.phoneClean}?body=${textBody}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 text-neutral-900 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              Direct Craftsman Quote
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950">
              Request a Free Quote
            </h3>
            <p className="text-xs text-neutral-600 mt-1">
              Direct estimate from master tradesman Joseph Fabela. Transparent pricing with no hidden fees.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Walker"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Phone Number (Call / Text) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(919) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                />
              </div>

              {/* City & Preferred Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                    Town / Location
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                  >
                    {COMPANY_INFO.serviceAreas.map((city, idx) => (
                      <option key={idx} value={city}>
                        {city}, NC
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                    Preferred Contact
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: 'Text' })}
                      className={`py-3 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                        formData.preferredContact === 'Text'
                          ? 'bg-neutral-950 border-neutral-950 text-white'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Text</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: 'Call' })}
                      className={`py-3 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                        formData.preferredContact === 'Call'
                          ? 'bg-neutral-950 border-neutral-950 text-white'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Trade Selection */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Primary Trade / Service
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
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
                    Electrical, Plumbing & Exterior Fixtures
                  </option>
                  <option value="Multiple Trades / Full Punch List">
                    Multiple Trades / Full Punch List
                  </option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Brief Project Scope / Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Broken gate hinges need re-welding, or bathroom tile upgrade."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Free Quote Request</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is kept strictly private. Direct reply from Joseph.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center mx-auto text-neutral-950">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-display font-extrabold text-neutral-950">
              Quote Request Received
            </h3>

            <p className="text-neutral-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-neutral-950">{formData.name}</strong>. Joseph Fabela has received your project details for <strong className="text-neutral-950">{formData.city}, NC</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="text-neutral-500">
                Contact: <strong className="text-neutral-900">{formData.preferredContact} to {formData.phone}</strong>
              </div>
              <div className="text-neutral-500">
                Service: <strong className="text-neutral-900">{formData.projectType}</strong>
              </div>
            </div>

            <div className="pt-4 max-w-sm mx-auto space-y-2.5">
              <button
                onClick={handleSendDirectSMS}
                className="w-full py-3.5 px-4 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open Instant SMS to Joseph</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-neutral-100 text-neutral-600 text-xs font-semibold hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
