import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Star, ExternalLink, Tag } from 'lucide-react';
import { CATEGORY_COLORS } from '../../data/umkm';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductCard({ umkm, onSelect }) {
  const [imgError, setImgError] = useState(false);
  const waUrl = getWhatsAppUrl(umkm);
  const categoryStyle = CATEGORY_COLORS[umkm.kategori] || {
    bg: 'bg-cream-200',
    text: 'text-maroon-700',
    border: 'border-cream-300',
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => onSelect(umkm)}
      className="group cursor-pointer bg-cream-50 rounded-3xl overflow-hidden border border-cream-300/80 shadow-soft hover:shadow-lift transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
          {!imgError && umkm.foto && umkm.foto.length > 0 ? (
            <img
              src={umkm.foto[0]}
              alt={umkm.usaha}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cream-200 to-cream-300 text-maroon-600 p-6 text-center">
              <span className="text-4xl mb-2">🧺</span>
              <span className="font-display font-semibold text-sm text-ink-900">{umkm.usaha}</span>
              <span className="text-xs text-ink-500 mt-1">{umkm.nama}</span>
            </div>
          )}

          {/* Top Dusun Badge */}
          <div className="absolute top-3 left-3 bg-cream-50/90 backdrop-blur-sm px-3 py-1 rounded-full border border-cream-300 text-xs font-semibold text-ink-900 shadow-chip flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sage-500" />
            <span>Dusun {umkm.dusun}</span>
          </div>

          {/* Top Category Badge */}
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border shadow-chip ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
            {umkm.kategori}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          <div>
            <span className="text-xs text-ink-500 font-medium block">
              {umkm.nama} • RT {umkm.rt || '001'}/RW {umkm.rw || '001'}
            </span>
            <h3 className="font-display font-bold text-lg text-maroon-600 group-hover:text-maroon-700 transition-colors leading-snug mt-0.5">
              {umkm.usaha}
            </h3>
          </div>

          <p className="text-xs text-ink-500 line-clamp-2 leading-relaxed">
            {umkm.deskripsi}
          </p>
        </div>
      </div>

      {/* Card Footer Action Bar */}
      <div className="p-5 pt-0 flex items-center justify-between border-t border-cream-300/40 mt-3 pt-3">
        <div className="flex items-center gap-1 text-xs font-bold text-gold-400">
          <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
          <span>{umkm.rating || 4.9}</span>
          <span className="text-ink-500 font-normal">({umkm.ulasan || 12})</span>
        </div>

        <div className="flex items-center gap-2">
          {waUrl ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-maroon-600 hover:bg-maroon-700 text-cream-50 text-xs font-semibold shadow-emboss active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WA</span>
            </a>
          ) : (
            <span className="px-3 py-1.5 rounded-xl bg-cream-200 text-ink-500 text-xs font-medium">
              Detail
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
