import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowUpRight,
  Eye
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function GalleryPage({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryProjects = [
    {
      id: 1,
      title: "Custom Wrought Iron Driveway Security Gate",
      category: "welding",
      categoryName: "Custom Welding",
      location: "Morrisville, NC",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Heavy-duty carbon steel security gate with ornamental scrollwork, automated hinge brackets, and satin black powder coat finish.",
      materials: "Carbon Steel • Heavy Duty Hinges • Powder Coat"
    },
    {
      id: 2,
      title: "Master Ensuite Porcelain Tile Shower & Vanity",
      category: "remodel",
      categoryName: "Bathroom Remodeling",
      location: "Cary, NC",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      description: "Complete bathroom modern overhaul including Schluter waterproof shower system, recessed niche, matte black fixtures, and double vanity.",
      materials: "Porcelain Subway Tile • Schluter Membrane • Quartz"
    },
    {
      id: 3,
      title: "Whole-Home Luxury Vinyl Plank (LVP) Installation",
      category: "flooring",
      categoryName: "Flooring",
      location: "Raleigh, NC",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
      description: "1,400 sq ft seamless plank installation with acoustic underlayment, leveling compounds, and 5-inch craftsman baseboards.",
      materials: "20mil LVP • Soundproof Underlay • Craftsman Trim"
    },
    {
      id: 4,
      title: "Mobile Aluminum Trailer Frame Structural Repair",
      category: "welding",
      categoryName: "Mobile Welding",
      location: "Apex, NC",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      description: "On-site TIG structural reinforcement for cracked commercial aluminum equipment trailer tongue and safety chain mounts.",
      materials: "6061 Aluminum • TIG Welding • Gusset Plates"
    },
    {
      id: 5,
      title: "Modern Kitchen Island Backsplash & Custom Trim",
      category: "remodel",
      categoryName: "Kitchen & Carpentry",
      location: "Morrisville, NC",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted herringbone tile backsplash, custom crown molding along upper cabinetry, and LED under-cabinet task lighting.",
      materials: "Glazed Ceramic • Crown Molding • Dimmable LEDs"
    },
    {
      id: 6,
      title: "Multi-Level Exterior Deck Restoration & Staining",
      category: "fixtures",
      categoryName: "Exterior Fixtures",
      location: "Holly Springs, NC",
      image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80",
      description: "Full wood rot remediation on joists, board replacement, pressure cleaning, and two coats of UV-blocking penetrating stain.",
      materials: "Treated Pine • Marine Deck Screws • Penetrating Stain"
    }
  ];

  const filtered = activeFilter === 'all'
    ? galleryProjects
    : galleryProjects.filter(p => p.category === activeFilter);

  return (
    <div className="py-14 sm:py-20 bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-800">
            <Eye className="w-3.5 h-3.5 text-craft-accent" />
            <span>Verified Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-neutral-950 tracking-tight">
            Craftsman Project Gallery
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Recent home improvements, custom mobile welding fabrications, and flooring installations throughout the Triangle area.
          </p>

          {/* Clean Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'welding', label: 'Custom Welding' },
              { id: 'remodel', label: 'Remodeling & Carpentry' },
              { id: 'flooring', label: 'Flooring' },
              { id: 'fixtures', label: 'Exterior & Decks' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  activeFilter === tab.id
                    ? 'bg-neutral-950 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Before & After Slider */}
        <div className="mb-16">
          <BeforeAfterSlider onOpenQuote={onOpenQuote} />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(proj => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-colors flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-neutral-100">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-neutral-950 text-[11px] font-bold border border-neutral-200 shadow-sm">
                    {proj.categoryName}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-neutral-600 text-[11px] font-medium flex items-center gap-1 border border-neutral-200 shadow-sm">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-neutral-950">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
                    {proj.materials}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <span>Request Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200 text-center space-y-3 shadow-sm">
          <h3 className="text-2xl font-display font-extrabold text-neutral-950">
            Have a Custom Project in Mind?
          </h3>
          <p className="text-neutral-600 text-xs sm:text-sm max-w-md mx-auto">
            Joseph Fabela creates custom solutions tailored to your property. Reach out today for an honest, upfront quote.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors shadow-sm"
            >
              Get Your Custom Estimate
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
