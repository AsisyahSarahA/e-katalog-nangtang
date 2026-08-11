import React from 'react';
import { motion } from 'framer-motion';
import { KATEGORI_ENUM } from '../../data/umkm';

export default function FilterChips({
  activeDusun,
  setActiveDusun,
  activeKategori,
  setActiveKategori,
}) {
  const dusunOptions = [
    { label: 'Semua Dusun', value: null },
    { label: 'Dusun 1', value: 1 },
    { label: 'Dusun 2', value: 2 },
    { label: 'Dusun 3', value: 3 },
  ];

  const kategoriOptions = [
    { label: 'Semua Kategori', value: null },
    ...Object.values(KATEGORI_ENUM).map((cat) => ({ label: cat, value: cat })),
  ];

  return (
    <div className="space-y-3 lg:hidden">
      {/* Row 1: Dusun Chips */}
      <div className="overflow-x-auto scrollbar-hide flex gap-2 pb-1 snap-x">
        {dusunOptions.map((opt) => {
          const isActive = activeDusun === opt.value;
          return (
            <button
              key={opt.label}
              onClick={() => setActiveDusun(opt.value)}
              className={`shrink-0 snap-start px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-maroon-600 text-cream-50 shadow-emboss'
                  : 'bg-cream-50 text-ink-900 border border-cream-300 shadow-chip'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Row 2: Category Chips */}
      <div className="overflow-x-auto scrollbar-hide flex gap-2 pb-1 snap-x">
        {kategoriOptions.map((opt) => {
          const isActive = activeKategori === opt.value;
          return (
            <button
              key={opt.label}
              onClick={() => setActiveKategori(opt.value)}
              className={`shrink-0 snap-start px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-maroon-600 text-cream-50 shadow-emboss'
                  : 'bg-cream-50 text-ink-900 border border-cream-300 shadow-chip'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
