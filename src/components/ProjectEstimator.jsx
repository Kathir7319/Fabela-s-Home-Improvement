import React, { useState } from 'react';
import { 
  Clock, 
  MessageSquare, 
  Home,
  Flame,
  Layers,
  Zap,
  ArrowRight
} from 'lucide-react';
import { ESTIMATOR_DATA, COMPANY_INFO } from '../data/websiteData';

export default function ProjectEstimator({ onOpenQuoteWithScope }) {
  const [selectedTradeIdx, setSelectedTradeIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);
  const [isUrgent, setIsUrgent] = useState(false);

  const currentTrade = ESTIMATOR_DATA.trades[selectedTradeIdx];
  const currentOption = currentTrade.options[selectedOptionIdx] || currentTrade.options[0];

  const tradeIcons = [Home, Flame, Layers, Zap];
  const CurrentIcon = tradeIcons[selectedTradeIdx] || Home;

  const basePrice = currentOption.baseCost;
  const lowPrice = Math.round(basePrice * 0.9);
  const highPrice = Math.round(basePrice * 1.25 * (isUrgent ? 1.15 : 1));

  const handleSendViaSMS = () => {
    const textBody = encodeURIComponent(
      `Hi Joseph, I used your website estimator for "${currentTrade.name} - ${currentOption.label}". Can we discuss an upfront quote?`
    );
    window.open(`sms:${COMPANY_INFO.phoneClean}?body=${textBody}`, '_blank');
  };

  const handleLaunchQuoteModal = () => {
    if (onOpenQuoteWithScope) {
      onOpenQuoteWithScope({
        trade: currentTrade.name,
        scope: currentOption.label,
        estimateRange: `$${lowPrice.toLocaleString()} - $${highPrice.toLocaleString()}`,
        time: currentOption.time
      });
    }
  };

  return (
    <section className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-neutral-950">
            Interactive Project &amp; Cost Estimator
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Select your scope to see real-world investment ranges and completion timelines in Morrisville &amp; Cary.
          </p>
        </div>

        {/* Estimator Card */}
        <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 sm:p-8">
          
          {/* Step 1: Trade Category */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              1. Trade Category
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {ESTIMATOR_DATA.trades.map((trade, idx) => {
                const IconComponent = tradeIcons[idx] || Home;
                const isSelected = selectedTradeIdx === idx;
                return (
                  <button
                    key={trade.id}
                    onClick={() => {
                      setSelectedTradeIdx(idx);
                      setSelectedOptionIdx(0);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                      isSelected
                        ? 'bg-white border-neutral-950 text-neutral-950 shadow-sm font-bold'
                        : 'bg-white/60 border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-white'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? 'text-neutral-950' : 'text-neutral-400'}`} />
                    <span className="text-xs truncate">{trade.name.split(' ')[0]} {trade.name.split(' ')[1] || ''}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Specific Scope */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              2. Project Scope
            </div>
            <div className="space-y-2">
              {currentTrade.options.map((option, idx) => {
                const isSelected = selectedOptionIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedOptionIdx(idx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white border-neutral-950 text-neutral-950 shadow-sm'
                        : 'bg-white/60 border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-neutral-950 bg-neutral-950 text-white' : 'border-neutral-300'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold">
                        {option.label}
                      </span>
                    </div>

                    <span className="text-xs text-neutral-500 font-mono shrink-0">
                      {option.time}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Urgent Checkbox */}
          <div className="mb-6 pt-3 border-t border-neutral-200 flex items-center justify-between flex-wrap gap-2 text-xs text-neutral-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="w-4 h-4 rounded border-neutral-300 text-neutral-950 focus:ring-0"
              />
              <span>Urgent turnaround required (within 48 hours)</span>
            </label>
            <span className="text-[11px] text-neutral-400 font-mono">* Estimates are upfront guidance.</span>
          </div>

          {/* Output Bar */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                Estimated Investment Range
              </span>
              <div className="text-2xl sm:text-4xl font-display font-extrabold text-neutral-950 mt-1">
                ${lowPrice.toLocaleString()} – ${highPrice.toLocaleString()}
              </div>
              <div className="text-xs text-neutral-500 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Typical Duration: <strong>{currentOption.time}</strong></span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
              <button
                onClick={handleLaunchQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors text-center shadow-sm"
              >
                Lock In This Free Quote
              </button>

              <button
                onClick={handleSendViaSMS}
                className="px-4 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Text Scope to Joseph</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
