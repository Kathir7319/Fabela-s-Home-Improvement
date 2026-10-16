import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Projects & Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 pt-3 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Glass Pill Container */}
        <div className="bg-white/90 backdrop-blur-md border border-neutral-200/90 rounded-2xl px-4 sm:px-6 py-3.5 shadow-sm flex items-center justify-between transition-all">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-display font-extrabold text-sm tracking-wider">
              F
            </div>
            <div>
              <div className="font-display font-extrabold text-base tracking-tight text-neutral-950 flex items-center gap-1">
                <span>FABELA<span className="text-craft-accent">'S</span></span>
              </div>
              <div className="text-[10px] tracking-wider text-neutral-500 font-mono uppercase">
                Contractor Services LLC
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 p-1 rounded-xl border border-neutral-200/60">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-white text-neutral-950 shadow-sm' 
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-lg bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs shadow-sm"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white border border-neutral-200 rounded-2xl p-4 shadow-xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                  activePage === link.id
                    ? 'bg-neutral-100 text-neutral-950'
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            ))}

            <div className="pt-3 border-t border-neutral-100 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-neutral-100 text-neutral-950 text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Joseph</span>
                </a>
                <a
                  href={`sms:${COMPANY_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-neutral-100 text-neutral-950 text-xs font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Text SMS</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs text-center shadow-sm"
              >
                Request a Free Quote
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
