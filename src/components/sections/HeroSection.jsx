import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Sparkles, MapPin, Star, Award, ShieldCheck } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[85vh] flex items-center py-12 md:py-20 overflow-hidden paper-grain">
      {/* Subtle Background Accent Blurs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-tan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-maroon-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-500/15 text-sage-600 border border-sage-500/30 text-xs font-semibold tracking-widest uppercase shadow-chip">
              <Sparkles className="w-3.5 h-3.5 text-sage-500" />
              <span>Etalase Resmi Desa Nangtang</span>
            </div>

            {/* H1 Heading with Fraunces font */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-maroon-600 leading-[1.12] tracking-tight">
              Pesona Karya Tangan{' '}
              <span className="relative inline-block text-maroon-700 underline decoration-tan-500/60 decoration-wavy decoration-2">
                Desa Nangtang
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-ink-500 text-base sm:text-lg leading-relaxed max-w-2xl">
              Jelajahi kehangatan warisan kerajinan anyaman bambu, olahan kayu reng, rempah kapulaga alami, serta produk unggulan warga dari 3 dusun — langsung terhubung ke pengrajinnya.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#katalog"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-maroon-600 hover:bg-maroon-700 text-cream-50 font-bold text-base shadow-emboss active:translate-y-0.5 transition-all duration-200"
              >
                <ShoppingBag className="w-5 h-5 text-cream-100" />
                <span>Jelajahi Katalog</span>
                <ArrowRight className="w-4 h-4 text-cream-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-cream-50 hover:bg-cream-200/60 text-maroon-600 border-2 border-maroon-600/30 font-semibold text-base shadow-chip transition-all duration-200"
              >
                <span>Tentang Desa</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-cream-300/70 grid grid-cols-3 gap-4 max-w-lg">
              <div className="p-3 rounded-2xl bg-cream-50/80 border border-cream-300/50 shadow-chip">
                <span className="font-display font-bold text-2xl text-maroon-600 block">11+</span>
                <span className="text-xs text-ink-500 font-medium">Pelaku UMKM</span>
              </div>
              <div className="p-3 rounded-2xl bg-cream-50/80 border border-cream-300/50 shadow-chip">
                <span className="font-display font-bold text-2xl text-maroon-600 block">3</span>
                <span className="text-xs text-ink-500 font-medium">Dusun Aktif</span>
              </div>
              <div className="p-3 rounded-2xl bg-cream-50/80 border border-cream-300/50 shadow-chip">
                <span className="font-display font-bold text-2xl text-maroon-600 block">5</span>
                <span className="text-xs text-ink-500 font-medium">Kategori Produk</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Ghibli-esque Collage Visual & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Photo Frame */}
              <div className="relative rounded-4xl overflow-hidden shadow-lift border-4 border-cream-50 bg-cream-300 group">
                <img
                  src="/images/products/anyaman-bambu/anyaman-bambu-1.jpg"
                  alt="Kerajinan Anyaman Bambu Desa Nangtang"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent" />
                
                {/* Photo Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-cream-50/90 backdrop-blur-md border border-cream-300/80 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base text-maroon-600">
                        Anyaman Bambu Tradisional
                      </h4>
                      <p className="text-xs text-ink-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-sage-500" />
                        Dusun 1, Desa Nangtang
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-tan-500/20 text-maroon-800 text-xs font-bold">
                      ★ 4.9
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card 1: Anyaman Bambu */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 sm:-left-8 bg-cream-50 p-3.5 rounded-2xl shadow-lift border border-cream-300 hidden sm:flex items-center gap-3 max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-xl bg-tan-500/20 text-maroon-600 flex items-center justify-center font-bold">
                  🧺
                </div>
                <div>
                  <span className="text-xs font-bold text-maroon-600 block">Kriya Anyaman</span>
                  <span className="text-[10px] text-ink-500">Ibu Wiarsih & Ibu Rista</span>
                </div>
              </motion.div>

              {/* Floating Mini Card 2: Rempah Kapulaga */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 sm:-right-8 bg-cream-50 p-3.5 rounded-2xl shadow-lift border border-cream-300 hidden sm:flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-sage-500/20 text-sage-600 flex items-center justify-center font-bold">
                  🌿
                </div>
                <div>
                  <span className="text-xs font-bold text-sage-600 block">Rempah Kapulaga</span>
                  <span className="text-[10px] text-ink-500">Hasil Bumi Alami</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
