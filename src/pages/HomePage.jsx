import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Wrench, 
  Flame, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Star, 
  ChevronRight,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, CORE_PILLARS, SERVICES, TESTIMONIALS } from '../data/websiteData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProjectEstimator from '../components/ProjectEstimator';
import TextLogPreview from '../components/TextLogPreview';
import ServiceAreaChecker from '../components/ServiceAreaChecker';

export default function HomePage({ setActivePage, onOpenQuote, onOpenQuoteWithScope }) {
  const [craftMode, setCraftMode] = useState('all');

  return (
    <div className="space-y-0">
      
      {/* 2026 MODERN HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden modern-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Status Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for New Projects</span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500">Morrisville, Cary &amp; Triangle NC</span>
            </div>
          </div>

          {/* Main Title & Subhead */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-neutral-950 tracking-tight leading-[1.12]">
              Professional Home Repairs &amp; Custom Welding{' '}
              <span className="text-[#E85D04]">Built to Last.</span>
            </h1>

            {/* Subheadline (Blueprint Exact) */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Over 20 years of expert craftsmanship serving Morrisville, Cary, and the greater Triangle area. From minor handyman fixes to custom metal fabrication, we get the job done right.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Request a Free Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </button>

              <button
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-neutral-900 font-bold text-sm border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Our Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Asymmetric Bento Visual Showcase */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Bento Card 1: Master Craftsman Joseph */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-neutral-200 p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="flex items-center justify-between gap-4 mb-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-craft-accent" />
                  <span>BBB Accredited Contractor</span>
                </div>
                <span className="text-xs font-mono text-neutral-400">Morrisville, NC</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden mb-6 h-64 sm:h-72">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80" 
                  alt="Joseph Fabela - Master Craftsman"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-300">Certified Master Tradesman</div>
                  <div className="text-xl font-display font-bold">Joseph Fabela</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-100 text-center">
                <div>
                  <div className="text-lg font-display font-bold text-neutral-950">20+ Yrs</div>
                  <div className="text-[11px] text-neutral-500">Trade Mastery</div>
                </div>
                <div>
                  <div className="text-lg font-display font-bold text-neutral-950">100%</div>
                  <div className="text-[11px] text-neutral-500">BBB Verified</div>
                </div>
                <div>
                  <div className="text-lg font-display font-bold text-neutral-950">Direct</div>
                  <div className="text-[11px] text-neutral-500">Text Progress Logs</div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Dual Trade Mobile Rig */}
            <div className="md:col-span-5 flex flex-col gap-4">
              
              <div className="bg-white rounded-3xl border border-neutral-200 p-6 shadow-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4">
                    <Flame className="w-5 h-5 text-craft-accent" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-950">
                    Mobile Welding Rig
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    Custom metal fabrication brought directly to your property. Aluminum, carbon steel, and stainless repairs on-location.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
                  <span>Gates, Fences &amp; Structural</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </div>
              </div>

              <div className="bg-neutral-950 rounded-3xl p-6 text-white shadow-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Direct Contact</div>
                  <div className="text-xl font-display font-bold text-white">
                    {COMPANY_INFO.phone}
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Call or text Joseph directly for fast quotes and project scheduling.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="flex-1 py-2.5 rounded-xl bg-white text-neutral-950 text-xs font-bold text-center hover:bg-neutral-200 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={`sms:${COMPANY_INFO.phoneClean}`}
                    className="flex-1 py-2.5 rounded-xl bg-neutral-800 text-white text-xs font-bold text-center hover:bg-neutral-700 transition-colors"
                  >
                    Send Text
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BRIEF ABOUT INTRO SECTION (Blueprint Exact) */}
      <section className="py-20 bg-white border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">
              <span>Introduction</span>
              <span className="text-neutral-300">•</span>
              <span>Fabela's Home Improvement Contractor Services LLC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
              Craftsmanship Built on Trust &amp; Transparency
            </h2>

            {/* Exact Blueprint Copy */}
            <p className="text-neutral-700 text-base sm:text-xl leading-relaxed font-normal">
              Welcome to Fabela's Home Improvement Contractor Services LLC. Founded by Joseph Fabela, a certified tradesman with two decades of hands-on experience, we bring dependable, high-quality residential improvements and mobile welding directly to your doorstep. We pride ourselves on transparent pricing, clear text updates, and keeping your project running seamlessly.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-[#292929] hover:bg-[#1F1F1F] text-white font-bold text-xs transition-colors"
              >
                Meet the Craftsman
              </button>

              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors shadow-sm"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CORE PILLAR CALLOUTS (Blueprint Exact) */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950">
              Three Pillars of Our Work
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm">
              The foundation behind every remodel, repair, and precision weld.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Certified Expertise */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-950 font-mono font-bold text-xs mb-6">
                  01
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-950 mb-2">
                  Certified Expertise
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  20+ years of trade experience.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Joseph's hands-on trade mastery</span>
              </div>
            </div>

            {/* Pillar 2: Fully Versatile */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-950 font-mono font-bold text-xs mb-6">
                  02
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-950 mb-2">
                  Fully Versatile
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Handyman, major remodeling, and precision welding all under one roof.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>One reliable contact for all repairs</span>
              </div>
            </div>

            {/* Pillar 3: BBB Accredited */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-950 font-mono font-bold text-xs mb-6">
                  03
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-950 mb-2">
                  BBB Accredited
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  A business built on trust, honesty, and verified client satisfaction.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ethical estimates &amp; client trust</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Precision Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950">
                Our Expert Services
              </h2>
              <p className="text-neutral-600 text-sm mt-2 max-w-xl">
                We deliver reliable, top-tier craftsmanship across multiple residential and structural trades:
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:underline"
            >
              <span>Explore All 4 Trade Portfolios</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="h-52 rounded-2xl overflow-hidden mb-6 bg-neutral-200">
                    <img 
                      src={srv.image} 
                      alt={srv.category} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-craft-accent font-semibold mb-1">
                    {srv.badge}
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-950">
                    {srv.category}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2">
                    {srv.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="text-neutral-400">•</span>
                        <div>
                          <strong className="text-neutral-950 font-medium">{f.title}: </strong>
                          <span className="text-neutral-500">{f.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200">
                  <button
                    onClick={() => {
                      setActivePage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs border border-neutral-200 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODERN BEFORE & AFTER SLIDER */}
      <BeforeAfterSlider onOpenQuote={onOpenQuote} />

      {/* MODERN INTERACTIVE PROJECT ESTIMATOR */}
      <ProjectEstimator onOpenQuoteWithScope={onOpenQuoteWithScope} />

      {/* MODERN TEXT LOG PREVIEW */}
      <TextLogPreview onOpenQuote={onOpenQuote} />

      {/* CLIENT REVIEWS */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950">
              Verified Homeowner Reviews
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm">
              Real projects completed in Morrisville, Cary, and Raleigh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#FFB000] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <h4 className="text-xs font-bold text-neutral-950">{t.name}</h4>
                  <div className="text-[11px] text-neutral-500">{t.project}</div>
                  <div className="text-[10px] text-neutral-400">{t.city} • {t.date}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICE AREA CHECKER */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreaChecker onOpenQuote={onOpenQuote} />
        </div>
      </section>

    </div>
  );
}
