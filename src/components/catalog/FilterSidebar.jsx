import React from 'react';
import { motion } from 'framer-motion';
import { KATEGORI_ENUM } from '../../data/umkm';
import { Filter, MapPin, Grid, Paintbrush, UtensilsCrossed, Leaf, Hammer, Scissors } from 'lucide-react';

const CATEGORY_ICONS = {
  [KATEGORI_ENUM.KRIYA]: Paintbrush,
  [KATEGORI_ENUM.KULINER]: UtensilsCrossed,
  [KATEGORI_ENUM.HASIL_BUMI]: Leaf,
  [KATEGORI_ENUM.MATERIAL]: Hammer,
  [KATEGORI_ENUM.KONVEKSI]: Scissors,
};

export default function FilterSidebar({
  activeDusun,
  setActiveDusun,
  activeKategori,
  setActiveKategori,
  onResetFilters,
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

  const hasActiveFilters = activeDusun !== null || activeKategori !== null;

  return (
    <aside className="space-y-8 sticky top-24 bg-cream-50/70 backdrop-blur-sm p-6 rounded-3xl border border-cream-300/60 shadow-chip">
      <div className="flex items-center justify-between border-b border-cream-300/80 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-maroon-600" />
          <h3 className="font-display font-bold text-lg text-maroon-600">Filter Katalog</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-xs font-semibold text-maroon-600 hover:text-maroon-700 underline"
          >
            Reset
          </button>
        )}
      </div>

      {/* Dusun Filter Group */}
      <div className="space-y-3">
        <label className="text-xs uppercase tracking-widest text-ink-500 font-bold flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-tan-500" />
          <span>Wilayah Dusun</span>
        </label>
        <div className="flex flex-col gap-2">
          {dusunOptions.map((opt) => {
            const isActive = activeDusun === opt.value;
            return (
              <button
                key={opt.label}
                onClick={() => setActiveDusun(opt.value)}
                className={`relative px-4 py-2.5 rounded-2xl text-sm font-medium transition-all text-left flex items-center justify-between ${
                  isActive
                    ? 'bg-maroon-600 text-cream-50 font-semibold shadow-emboss'
                    : 'bg-cream-100 text-ink-900 hover:bg-cream-200 shadow-chip border border-cream-300/40'
                }`}
              >
                <span>{opt.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeDusunDot"
                    className="w-2 h-2 rounded-full bg-cream-50 shadow-sm"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Filter Group */}
      <div className="space-y-3">
        <label className="text-xs uppercase tracking-widest text-ink-500 font-bold flex items-center gap-1.5">
          <Grid className="w-3.5 h-3.5 text-tan-500" />
          <span>Kategori Produk</span>
        </label>
        <div className="flex flex-col gap-2">
          {kategoriOptions.map((opt) => {
            const isActive = activeKategori === opt.value;
            const Icon = CATEGORY_ICONS[opt.value];
            return (
              <button
                key={opt.label}
                onClick={() => setActiveKategori(opt.value)}
                className={`relative px-4 py-2.5 rounded-2xl text-sm font-medium transition-all text-left flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-maroon-600 text-cream-50 font-semibold shadow-emboss'
                    : 'bg-cream-100 text-ink-900 hover:bg-cream-200 shadow-chip border border-cream-300/40'
                }`}
              >
                {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-cream-100' : 'text-tan-500'}`} />}
                <span className="truncate">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
