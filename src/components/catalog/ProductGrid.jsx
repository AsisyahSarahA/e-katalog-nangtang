import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { ShoppingBag, RefreshCw } from 'lucide-react';

export default function ProductGrid({ items, onSelect, onResetFilters }) {
  if (!items || items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cream-50 rounded-4xl p-12 text-center border border-cream-300 shadow-soft max-w-lg mx-auto space-y-4 my-8"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 mx-auto rounded-3xl bg-maroon-100 text-maroon-600 flex items-center justify-center text-4xl shadow-chip"
        >
          🧺
        </motion.div>
        <div>
          <h3 className="font-display font-bold text-xl text-maroon-600">
            Tidak Ada UMKM Ditemukan
          </h3>
          <p className="text-sm text-ink-500 mt-1 leading-relaxed">
            Tidak ada produk atau pengrajin yang sesuai dengan pencarian atau filter yang Anda pilih.
          </p>
        </div>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-maroon-600 hover:bg-maroon-700 text-cream-50 font-semibold text-sm shadow-emboss active:scale-95 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset Semua Filter</span>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <ProductCard umkm={item} onSelect={onSelect} />
        </motion.div>
      ))}
    </div>
  );
}
