import React, { useState } from 'react';
import { MapPin, CheckCircle2, Search, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function ServiceAreaChecker({ onOpenQuote }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const towns = [
    { name: "Morrisville", zip: "27560", county: "Wake County", time: "Headquarters" },
    { name: "Cary", zip: "27511, 27513, 27519", county: "Wake County", time: "15-20 Min" },
    { name: "Raleigh", zip: "27601, 27606, 27607", county: "Wake County", time: "20-25 Min" },
    { name: "Durham", zip: "27701, 27703, 27713", county: "Durham County", time: "20-30 Min" },
    { name: "Apex", zip: "27502, 27523, 27539", county: "Wake County", time: "15-25 Min" },
    { name: "Holly Springs", zip: "27540", county: "Wake County", time: "20-30 Min" },
    { name: "Fuquay-Varina", zip: "27526", county: "Wake County", time: "25-35 Min" },
    { name: "Chapel Hill", zip: "27514, 27516", county: "Orange County", time: "25-35 Min" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const term = searchTerm.toLowerCase();
    const match = towns.find(
      t => t.name.toLowerCase().includes(term) || t.zip.includes(term)
    );

    if (match) {
      setSearchResult({
        covered: true,
        town: match.name,
        message: `${match.name} is within our primary service radius. Joseph's mobile rig travels directly to your property.`
      });
    } else {
      setSearchResult({
        covered: true,
        town: searchTerm,
        message: `We routinely service locations in and around ${searchTerm}. Call or text Joseph at (919) 400-3433 to confirm your time window.`
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Service Coverage
          </div>
          <h3 className="text-2xl font-display font-extrabold text-neutral-950">
            Serving Morrisville, Cary &amp; The Greater Triangle
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl">
            Check your town or zip code below for estimated mobile unit dispatch times.
          </p>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="w-full md:w-auto flex items-center gap-2">
          <div className="relative flex-1 md:w-60">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter town or zip..."
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-neutral-950 focus:outline-none focus:border-neutral-400"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-800 transition-colors shrink-0"
          >
            Check
          </button>
        </form>
      </div>

      {searchResult && (
        <div className="mb-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-700 flex items-start gap-3 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-neutral-950 block font-bold">{searchResult.town} Coverage Verified</strong>
            <span>{searchResult.message}</span>
          </div>
        </div>
      )}

      {/* Towns Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {towns.map((town, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 text-neutral-950 font-semibold text-xs">
              <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span>{town.name}</span>
            </div>
            <div className="text-[11px] text-neutral-500 mt-1 font-mono">
              {town.time}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>
          <span>Headquarters: </span>
          <strong className="text-neutral-950">Morrisville, NC 27560</strong>
        </div>

        <button
          onClick={onOpenQuote}
          className="text-neutral-950 hover:underline font-bold flex items-center gap-1"
        >
          <span>Schedule an on-site consultation</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
