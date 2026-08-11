import React, { useState, useMemo } from 'react';
import SearchBar from '../catalog/SearchBar';
import FilterSidebar from '../catalog/FilterSidebar';
import FilterChips from '../catalog/FilterChips';
import ProductGrid from '../catalog/ProductGrid';
import ProductModal from '../catalog/ProductModal';
import { umkmData } from '../../data/umkm';
import { Sparkles, Grid } from 'lucide-react';

export default function CatalogSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDusun, setActiveDusun] = useState(null);
  const [activeKategori, setActiveKategori] = useState(null);
  const [selectedUmkm, setSelectedUmkm] = useState(null);

  const filteredItems = useMemo(() => {
    return umkmData.filter((item) => {
      // Search term filter
      const term = searchTerm.trim().toLowerCase();
      const matchSearch =
        !term ||
        item.nama.toLowerCase().includes(term) ||
        item.usaha.toLowerCase().includes(term) ||
        item.deskripsi.toLowerCase().includes(term) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(term)));

      // Dusun filter
      const matchDusun = activeDusun === null || item.dusun === activeDusun;

      // Category filter
      const matchKategori = activeKategori === null || item.kategori === activeKategori;

      return matchSearch && matchDusun && matchKategori;
    });
  }, [searchTerm, activeDusun, activeKategori]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setActiveDusun(null);
    setActiveKategori(null);
  };

  return (
    <section id="katalog" className="py-20 paper-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-100 text-maroon-700 text-xs font-semibold tracking-widest uppercase shadow-chip">
            <Grid className="w-3.5 h-3.5 text-maroon-600" />
            <span>Katalog Resmi UMKM</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-maroon-600 tracking-tight">
            Temukan Karya & Produk Desa
          </h2>

          <p className="text-ink-500 text-sm sm:text-base leading-relaxed">
            Gunakan fitur pencarian atau filter berdasarkan wilayah Dusun dan Kategori untuk menemukan usaha lokal Desa Nangtang.
          </p>
        </div>

        {/* Search Bar Bar Top */}
        <div className="max-w-3xl mx-auto">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            totalResults={filteredItems.length}
            totalItems={umkmData.length}
          />
        </div>

        {/* Mobile Horizontal Chips */}
        <FilterChips
          activeDusun={activeDusun}
          setActiveDusun={setActiveDusun}
          activeKategori={activeKategori}
          setActiveKategori={setActiveKategori}
        />

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <FilterSidebar
              activeDusun={activeDusun}
              setActiveDusun={setActiveDusun}
              activeKategori={activeKategori}
              setActiveKategori={setActiveKategori}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9">
            <ProductGrid
              items={filteredItems}
              onSelect={(umkm) => setSelectedUmkm(umkm)}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>

      </div>

      {/* Product Detail Modal Portal */}
      {selectedUmkm && (
        <ProductModal
          umkm={selectedUmkm}
          onClose={() => setSelectedUmkm(null)}
        />
      )}
    </section>
  );
}
