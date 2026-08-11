import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

export default function SearchBar({ searchTerm, setSearchTerm, totalResults, totalItems }) {
  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-500">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari nama usaha, pemilik, atau produk (mis: Anyaman, Kapulaga, Kayu)..."
          className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-cream-50 text-ink-900 placeholder:text-ink-500/70 text-sm sm:text-base border border-cream-300/80 shadow-inset-field focus:outline-none focus:ring-2 focus:ring-maroon-300 focus:border-maroon-600 transition-all"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            aria-label="Bersihkan pencarian"
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-ink-500 hover:text-maroon-600 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-cream-300/60 flex items-center justify-center">
              <X className="w-3.5 h-3.5" />
            </div>
          </button>
        )}
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-ink-500 font-medium px-1">
        <span>
          Menampilkan <strong className="text-maroon-600 font-bold">{totalResults}</strong> dari {totalItems} UMKM Desa
        </span>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-maroon-600 underline font-semibold hover:text-maroon-700"
          >
            Reset pencarian
          </button>
        )}
      </div>
    </div>
  );
}
