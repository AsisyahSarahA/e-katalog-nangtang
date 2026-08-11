import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  MessageCircle,
  ShoppingBag,
  ExternalLink,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
  Copy,
  Star,
} from 'lucide-react';
import { CATEGORY_COLORS } from '../../data/umkm';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { getGoogleMapsUrl } from '../../utils/maps';
import { shareUmkm } from '../../utils/share';

export default function ProductModal({ umkm, onClose }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (umkm) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [umkm, onClose]);

  if (!umkm) return null;

  const photos = umkm.foto && umkm.foto.length > 0 ? umkm.foto : [];
  const waUrl = getWhatsAppUrl(umkm);
  const mapsUrl = getGoogleMapsUrl(umkm);
  const categoryStyle = CATEGORY_COLORS[umkm.kategori] || {
    bg: 'bg-cream-200',
    text: 'text-maroon-700',
    border: 'border-cream-300',
  };

  const handleNextPhoto = () => {
    if (photos.length > 1) {
      setCurrentImgIndex((prev) => (prev + 1) % photos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (photos.length > 1) {
      setCurrentImgIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  const handleShare = async (platform) => {
    const res = await shareUmkm(umkm, platform);
    if (res.method === 'copy') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop Dark Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink-900/50 backdrop-blur-sm"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-cream-50 rounded-t-4xl sm:rounded-4xl shadow-lift border border-cream-300 overflow-hidden z-10 paper-grain max-h-[92vh] sm:max-h-[85vh] flex flex-col md:flex-row"
        >
          {/* Mobile Bottom Sheet Drag Handle */}
          <div className="w-12 h-1.5 bg-cream-300 rounded-full mx-auto my-2.5 sm:hidden shrink-0" />

          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-cream-50/90 text-maroon-600 border border-cream-300 shadow-chip hover:bg-cream-200 active:scale-95 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Carousel */}
          <div className="md:w-1/2 relative bg-cream-200 aspect-[4/3] md:aspect-auto flex items-center justify-center overflow-hidden shrink-0">
            {photos.length > 0 ? (
              <img
                src={photos[currentImgIndex]}
                alt={umkm.usaha}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-cream-200 to-cream-300 text-maroon-600">
                <span className="text-6xl mb-3">🧺</span>
                <span className="font-display font-semibold text-lg text-ink-900">{umkm.usaha}</span>
              </div>
            )}

            {/* Carousel Arrow Controls */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-3 p-2 rounded-full bg-cream-50/80 backdrop-blur-sm text-maroon-600 border border-cream-300 shadow-chip hover:bg-cream-50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-3 p-2 rounded-full bg-cream-50/80 backdrop-blur-sm text-maroon-600 border border-cream-300 shadow-chip hover:bg-cream-50 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                {/* Dots indicator */}
                <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
                  {photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImgIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentImgIndex
                          ? 'bg-maroon-600 w-6'
                          : 'bg-cream-50/70 border border-cream-300'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Column: UMKM Details & CTAs */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-300/70 text-ink-900 text-xs font-semibold hover:bg-cream-300 transition-colors shadow-chip"
                >
                  <MapPin className="w-3.5 h-3.5 text-sage-500" />
                  <span>
                    Dusun {umkm.dusun} • RT {umkm.rt || '001'}/RW {umkm.rw || '001'}
                  </span>
                  <ExternalLink className="w-3 h-3 text-ink-500" />
                </a>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border shadow-chip ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}
                >
                  {umkm.kategori}
                </span>
              </div>

              {/* Title & Owner */}
              <div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-maroon-600 leading-tight">
                  {umkm.usaha}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-ink-900">
                    Pemilik: {umkm.nama}
                  </span>
                  <span className="text-xs text-gold-400 font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-gold-400" />
                    {umkm.rating || 4.9} ({umkm.ulasan || 15} Ulasan)
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 text-sm text-ink-500 leading-relaxed border-t border-b border-cream-300/60 py-4">
                <h4 className="font-semibold text-xs uppercase tracking-widest text-ink-900">
                  Deskripsi Produk & Usaha:
                </h4>
                <p>{umkm.deskripsi}</p>
              </div>

              {/* Tags */}
              {umkm.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {umkm.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg bg-cream-200/80 text-ink-500 text-[11px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CTAs & Social Actions */}
            <div className="space-y-3 pt-4 border-t border-cream-300/60">
              {/* Primary WA Button */}
              {waUrl ? (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-maroon-600 hover:bg-maroon-700 text-cream-50 font-bold text-sm shadow-emboss active:translate-y-0.5 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Hubungi via WhatsApp (Langsung)</span>
                </a>
              ) : (
                <div className="p-3 rounded-2xl bg-cream-200 text-center text-xs text-ink-500 font-medium">
                  Kontak WhatsApp belum terdaftar. Silakan kunjungi lokasi dusun.
                </div>
              )}

              {/* Secondary Toko Online Button (Shopee / TikTok Shop) */}
              {(umkm.shopee || umkm.tiktok) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {umkm.shopee && (
                    <a
                      href={umkm.shopee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 text-xs font-semibold border border-orange-300 transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4 text-orange-600" />
                      <span>Kunjungi Shopee</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
                    </a>
                  )}

                  {umkm.tiktok && (
                    <a
                      href={umkm.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-900 text-xs font-semibold border border-stone-400 transition-colors"
                    >
                      <span className="font-bold">🎵</span>
                      <span>Kunjungi TikTok Shop</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
                    </a>
                  )}
                </div>
              )}

              {/* Social Share Row */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-500">Bagikan UMKM:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare('whatsapp')}
                    title="Bagikan ke WhatsApp"
                    className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 flex items-center justify-center shadow-chip transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    title="Bagikan ke Facebook"
                    className="w-9 h-9 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 flex items-center justify-center shadow-chip transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    title="Salin Tautan"
                    className="w-9 h-9 rounded-full bg-cream-300 text-ink-900 hover:bg-cream-400 flex items-center justify-center shadow-chip transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {copied && (
                <p className="text-[11px] text-emerald-600 text-right font-medium">
                  ✓ Tautan berhasil disalin ke papan klip!
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
