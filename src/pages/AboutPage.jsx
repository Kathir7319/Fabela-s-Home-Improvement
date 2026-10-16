import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  ArrowUpRight,
  Flame,
  Award
} from 'lucide-react';
import { COMPANY_INFO, CORE_PILLARS } from '../data/websiteData';

export default function AboutPage({ onOpenQuote }) {
  const commitments = [
    {
      num: "01",
      title: "Direct Owner Accountability",
      desc: "Joseph Fabela personally estimates, manages, and executes your project. No inexperienced sub-crews or detached project managers."
    },
    {
      num: "02",
      title: "Premium Material Selections",
      desc: "Heavy-gauge steel, certified stainless fasteners, moisture-tested subfloors, and quality waterproofing membranes."
    },
    {
      num: "03",
      title: "Detailed Daily Text Logs",
      desc: "Milestone photos and progress messages sent directly to your phone so you stay informed even if you are away from home."
    },
    {
      num: "04",
      title: "Respect for Your Property",
      desc: "Complete dust containment, daily job site sweep-downs, and careful protection of your furnishings and landscape."
    }
  ];

  return (
    <div className="py-14 sm:py-20 bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header (Blueprint Exact) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-800">
            <Award className="w-3.5 h-3.5 text-craft-accent" />
            <span>Founder &amp; Certified Master Tradesman</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-neutral-950 tracking-tight">
            Meet the Craftsman Behind Fabela's
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto">
            Founded by Joseph Fabela. Over 20 years of real-world trade experience in residential remodeling and custom mobile welding.
          </p>
        </div>

        {/* Founder Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80" 
                alt="Joseph Fabela - Master Craftsman" 
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md p-1.5 flex items-center justify-center">
                <img src="/logo.png" alt="Official Trade Badge" className="w-full h-full object-contain" />
              </div>

              <div className="p-5 bg-white border-t border-neutral-100">
                <div className="text-xs font-mono uppercase tracking-wider text-craft-accent font-bold">
                  Certified Tradesman &amp; Owner
                </div>
                <div className="text-xl font-display font-bold text-neutral-950 mt-0.5">
                  Joseph Fabela
                </div>
                <div className="text-xs text-neutral-500 mt-1 flex items-center justify-between">
                  <span>20+ Years Real-World Experience</span>
                  <span className="text-neutral-900 font-bold">BBB Accredited</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blueprint Copy Body */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Fabela's Home Improvement Contractor Services LLC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950">
              A Direct Commitment to Quality &amp; Communication
            </h2>

            {/* Exact Blueprint Copy Paragraph 1 */}
            <p className="text-neutral-700 text-base leading-relaxed font-normal">
              At Fabela's Home Improvement Contractor Services LLC, home improvement is more than a job—it’s a commitment to our community. Founded and operated by Joseph Fabela, our company addresses a critical gap in the industry: the need for reliable, versatile, and highly communicative trade professionals.
            </p>

            {/* Exact Blueprint Copy Paragraph 2 */}
            <p className="text-neutral-700 text-base leading-relaxed font-normal">
              With over 20 years of real-world experience, Joseph treats every project with absolute precision. Whether fixing structural wood rot or fabricating tailored iron gates, our focus remains on premium material selections, punctuality, and detailed text logs to ensure you stay informed even if you are away from home.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {CORE_PILLARS.map((p) => (
                <div key={p.id} className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <div className="text-xs font-bold text-neutral-950 mb-1">
                    {p.title}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {p.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Request a Free Quote From Joseph</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs border border-neutral-200 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

        {/* 4 Commitments Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
            <h3 className="text-2xl font-display font-extrabold text-neutral-950">
              The Standards We Bring to Every Project
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm">
              Precision craftsmanship backed by verified customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commitments.map((c, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between"
              >
                <div className="text-xs font-mono font-bold text-neutral-400 mb-4">
                  {c.num}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950 mb-1.5">
                    {c.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Rig Spotlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-craft-accent font-bold">
                Mobile Fabrication Rig
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-950">
                Commercial Metal Fabrication at Your Doorstep
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Equipped with mobile MIG, TIG, and stick welders, plasma torches, and cutting tables. We repair trailer frames, fabricate custom gates, and reinforce structural steel on-site throughout Morrisville, Cary, and Raleigh.
              </p>
              <div className="text-xs text-neutral-500 pt-1 font-mono">
                Aluminum • Stainless Steel • Carbon Steel • Ornamental Iron
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors shadow-sm"
              >
                Inquire About Welding Services
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
