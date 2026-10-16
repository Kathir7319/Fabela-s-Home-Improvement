import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, ChevronRight, Check } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/websiteData';

export default function BeforeAfterSlider({ onOpenQuote }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const currentItem = BEFORE_AFTER_ITEMS[selectedIdx];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Interactive Visual Proof
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-neutral-950">
            Before &amp; After Transformations
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Drag the divider to compare original conditions with completed craftsmanship.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                selectedIdx === idx
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200'
              }`}
            >
              <span>{item.trade}</span>
              <span className="opacity-60 ml-1">({item.location})</span>
            </button>
          ))}
        </div>

        {/* Comparison Frame */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-neutral-200 p-4 shadow-sm">
          <div 
            ref={containerRef}
            className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden select-none cursor-ew-resize touch-pan-y bg-neutral-100"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* After Image */}
            <img 
              src={currentItem.afterImg} 
              alt={`${currentItem.title} - After`} 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>FABELA COMPLETED</span>
            </div>

            {/* Before Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={currentItem.beforeImg} 
                alt={`${currentItem.title} - Before`} 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-neutral-800 font-bold text-xs px-3 py-1.5 rounded-lg border border-neutral-200 shadow-sm">
                ORIGINAL
              </div>
            </div>

            {/* Divider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize shadow-md"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-neutral-300 shadow-lg flex items-center justify-center text-neutral-900">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Details Bar */}
          <div className="mt-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-display font-bold text-neutral-950 flex items-center gap-2">
                <span>{currentItem.title}</span>
                <span className="text-xs text-neutral-500 font-normal">• {currentItem.location}</span>
              </h3>
              <p className="text-xs text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                {currentItem.description}
              </p>
              <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                {currentItem.stats}
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs border border-neutral-200 transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <span>Get Similar Quote</span>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
