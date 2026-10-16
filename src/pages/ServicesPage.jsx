import React, { useState } from 'react';
import { 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/websiteData';

export default function ServicesPage({ onOpenQuote, onOpenQuoteWithScope }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.id === activeTab);

  const handleRequestService = (serviceCategory, featureTitle) => {
    onOpenQuoteWithScope({
      trade: serviceCategory,
      scope: featureTitle,
      estimateRange: 'Upfront Line-Item Estimate',
      time: 'Standard Trade Window'
    });
  };

  return (
    <div className="py-14 sm:py-20 bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header (Blueprint Exact) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-800">
            <span>Specialized Capabilities</span>
            <span className="text-neutral-300">•</span>
            <span>20+ Years Experience</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-neutral-950 tracking-tight">
            Our Expert Services
          </h1>

          {/* Blueprint exact copy */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            We deliver reliable, top-tier craftsmanship across multiple residential and structural trades:
          </p>

          {/* Clean Segmented Tab Filters */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                activeTab === 'all'
                  ? 'bg-neutral-950 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              All Trades (4)
            </button>

            {SERVICES.map((srv) => {
              const isSelected = activeTab === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                    isSelected
                      ? 'bg-neutral-950 text-white'
                      : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {srv.shortTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Service Trade Cards */}
        <div className="space-y-12">
          {filteredServices.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <section
                key={service.id}
                id={service.id}
                className="p-6 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Clean Visual Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                      <img 
                        src={service.image} 
                        alt={service.category} 
                        className="w-full h-[320px] sm:h-[360px] object-cover"
                        loading="lazy"
                      />
                      <div className="p-4 bg-white border-t border-neutral-200 text-xs text-neutral-500 flex justify-between items-center">
                        <span className="font-bold text-neutral-950">{service.shortTitle}</span>
                        <span className="font-mono text-neutral-400">{service.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (Blueprint Exact) */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="text-xs font-mono uppercase tracking-wider text-craft-accent font-bold">
                      {service.badge}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950">
                      {service.category}
                    </h2>

                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Feature Items (Blueprint Exact bullets) */}
                    <div className="space-y-3 pt-2">
                      {service.features.map((feature, fIdx) => (
                        <div 
                          key={fIdx}
                          className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-sm font-bold text-neutral-950">
                                {feature.title}
                              </h3>
                              <p className="text-xs text-neutral-700 font-medium mt-0.5">
                                {feature.description}
                              </p>
                              <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                                {feature.details}
                              </p>
                            </div>

                            <button
                              onClick={() => handleRequestService(service.category, feature.title)}
                              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-neutral-900 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shrink-0 transition-colors shadow-sm hover:bg-neutral-100"
                            >
                              <span>Quote</span>
                              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleRequestService(service.category, service.shortTitle)}
                        className="px-6 py-3 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
                      >
                        <span>Request Quote for {service.shortTitle}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
                      </button>

                      <a
                        href={`sms:${COMPANY_INFO.phoneClean}`}
                        className="px-5 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs transition-colors flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-neutral-600" />
                        <span>Text Scope to Joseph</span>
                      </a>
                    </div>

                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* Clean Unified Multi-Trade Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#292929] text-white text-center space-y-4 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Need Multiple Trades on a Single Project?
          </h3>

          <p className="max-w-2xl mx-auto text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Instead of hiring separate subcontractors for carpentry, tile, and structural welding, Joseph Fabela handles all three under one insured, BBB accredited contractor with clear daily text logs.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3.5 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors shadow-sm"
            >
              Get a Unified Estimate
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>Call Joseph: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
