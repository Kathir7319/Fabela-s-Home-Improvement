import React from 'react';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function MobileQuickBar({ onOpenQuote }) {
  return (
    <aside aria-label="Mobile quick actions" className="md:hidden fixed bottom-3 left-3 right-3 z-50">
      <div className="bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-2xl p-2 shadow-elevate max-w-sm mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-100 text-neutral-900 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-neutral-700 mb-0.5" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        <a
          href={`sms:${COMPANY_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-100 text-neutral-900 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-neutral-700 mb-0.5" />
          <span className="text-[11px] font-bold">Text</span>
        </a>

        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold active:scale-95 transition-all shadow-sm"
        >
          <span className="text-[11px] font-bold">Free Quote</span>
        </button>
      </div>
    </aside>
  );
}
