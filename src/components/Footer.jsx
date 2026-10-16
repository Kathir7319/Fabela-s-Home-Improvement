import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ExternalLink, 
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/websiteData';

export default function Footer({ setActivePage, onOpenQuote }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-500">
      
      {/* Pre-footer Callout: "Let's Build Something Together" (Blueprint Matched) */}
      <div className="border-b border-neutral-200 bg-[#292929] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>

          <p className="max-w-xl mx-auto text-neutral-400 text-xs sm:text-base leading-relaxed">
            Have a custom welding requirement or a list of home repairs? Reach out today for an honest, upfront quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs sm:text-sm transition-colors shadow-elevate flex items-center justify-center gap-2"
            >
              <span>Request a Free Quote</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm border border-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-neutral-400" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`sms:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm border border-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-neutral-400" />
              <span>Text Joseph</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center font-display font-bold text-xs">
                F
              </div>
              <div className="font-display font-extrabold text-base text-neutral-950">
                FABELA<span className="text-craft-accent">'S</span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Founded by Joseph Fabela, bringing over 20 years of hands-on craftsman experience in residential remodeling and mobile welding to Morrisville, Cary, and the Triangle.
            </p>

            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="text-[11px] text-neutral-600">
                <span className="font-bold text-neutral-950 block">BBB Accredited Business</span>
                Verified Trust &amp; Satisfaction
              </div>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-950 font-bold">
              Trades &amp; Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-neutral-950 transition-colors text-left text-neutral-600"
                  >
                    {s.category}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-neutral-950 transition-colors text-left text-neutral-600"
                >
                  Before &amp; After Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Contact Details (Blueprint Matched) */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-950 font-bold">
              Business Contact Details
            </h3>
            <div className="space-y-2.5 text-xs text-neutral-600">
              <div>
                <span className="text-[10px] text-neutral-400 block uppercase font-mono">Company Name:</span>
                <span className="text-neutral-950 font-semibold">{COMPANY_INFO.name}</span>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 block uppercase font-mono">Phone Number (Call/Text):</span>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-neutral-950 font-bold hover:underline flex items-center gap-1 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-craft-accent" />
                  <span>{COMPANY_INFO.phone} (Call/Text)</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 block uppercase font-mono">Service Location:</span>
                <div className="flex items-start gap-1 mt-0.5 text-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.serviceAreaSummary}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 block uppercase font-mono">Hours:</span>
                <div className="flex items-start gap-1 mt-0.5 text-neutral-600">
                  <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Connect Online & Coverage */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-950 font-bold">
              Connect Online
            </h3>
            <p className="text-xs text-neutral-500">
              Follow our latest fabrication projects and project logs:
            </p>

            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-950 text-xs font-bold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              <span>Find us on Facebook</span>
            </a>

            <div className="pt-2">
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono font-semibold mb-1">
                Triangle Coverage Zone
              </div>
              <p className="text-[11px] text-neutral-600 leading-relaxed">
                Morrisville • Cary • Raleigh • Durham • Apex • Holly Springs • Fuquay-Varina • Chapel Hill
              </p>
            </div>
          </div>

        </div>

        {/* Global Footer Bottom Bar (Blueprint Exact) */}
        <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <div>
            © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. All Rights Reserved. BBB Accredited Business.
          </div>

          <div className="flex items-center gap-4 text-neutral-600 font-medium">
            <button onClick={() => handleNav('about')} className="hover:text-neutral-950 transition-colors">
              About Joseph
            </button>
            <button onClick={() => handleNav('services')} className="hover:text-neutral-950 transition-colors">
              Services
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-neutral-950 transition-colors">
              Contact
            </button>
            <button onClick={onOpenQuote} className="transition-colors font-bold text-[#E85D04] hover:underline">
              Free Estimate
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
