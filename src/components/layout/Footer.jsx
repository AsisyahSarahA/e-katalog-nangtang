import React from 'react';
import { Home, Heart, MapPin, Mail, MessageCircle, Users } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-maroon-800 text-cream-100 woven-texture border-t-4 border-tan-500 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-tan-500 text-maroon-900 flex items-center justify-center shadow-emboss font-bold">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-cream-50 tracking-tight">
                  Desa Nangtang
                </h3>
                <span className="text-xs uppercase tracking-widest text-tan-500 font-semibold block">
                  E-Katalog UMKM Digital
                </span>
              </div>
            </div>
            <p className="text-cream-200/90 text-sm leading-relaxed max-w-sm">
              Etalase produk dan karya unggulan warga Desa Nangtang, Kecamatan Cigalontang, Kabupaten Tasikmalaya. Memfasilitasi koneksi langsung antara pembeli dan pengrajin desa secara inklusif.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-tan-500/20 text-tan-500 hover:bg-tan-500 hover:text-maroon-900 text-xs font-semibold transition-all border border-tan-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Admin Desa</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg text-cream-50 tracking-wide border-b border-maroon-700/80 pb-2 inline-block">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200">
              <li>
                <a href="#beranda" className="hover:text-tan-500 transition-colors flex items-center gap-2">
                  <span className="text-tan-500">›</span> Beranda Utama
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-tan-500 transition-colors flex items-center gap-2">
                  <span className="text-tan-500">›</span> Katalog UMKM & Produk
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-tan-500 transition-colors flex items-center gap-2">
                  <span className="text-tan-500">›</span> Tentang Desa & Program
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-tan-500 transition-colors flex items-center gap-2">
                  <span className="text-tan-500">›</span> Kontak & Peta Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & KKN Credit */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg text-cream-50 tracking-wide border-b border-maroon-700/80 pb-2 inline-block">
              Lokasi & Tim KKN
            </h4>
            <div className="space-y-3 text-sm text-cream-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tan-500 shrink-0 mt-0.5" />
                <span>
                  Desa Nangtang, Kecamatan Cigalontang, Kabupaten Tasikmalaya, Jawa Barat 46463
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-tan-500 shrink-0 mt-0.5" />
                <span>kkn02.nangtang@lp3i.ac.id</span>
              </div>
              <div className="pt-2.5 border-t border-maroon-700/60 space-y-1.5">
                <span className="text-xs text-cream-300 block">Diprogram & disusun oleh:</span>
                <span className="font-semibold text-tan-500 text-xs flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Kelompok KKN 02 26 LP3I Tasikmalaya
                </span>
                <div className="pt-1 space-y-1 text-xs text-cream-200">
                  <p>
                    <span className="text-cream-400 font-medium">Developer:</span>{' '}
                    <span className="text-tan-300 font-medium">Asisyah Sarah Azzahra</span>
                  </p>
                  <p>
                    <span className="text-cream-400 font-medium">Creative:</span>{' '}
                    <span>Azril Darussalam</span>
                  </p>
                  <p>
                    <span className="text-cream-400 font-medium">Dokumentasi:</span>{' '}
                    <span>Alfan Syahputra, Sendi Setiawan</span>
                  </p>
                  <p>
                    <span className="text-cream-400 font-medium">Admin:</span>{' '}
                    <span>Laila</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-maroon-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300">
          <p>© 2026 E-Katalog UMKM Desa Nangtang. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 fill-maroon-400 text-maroon-400 inline" />
            <span>untuk Pengrajin & Pelaku Usaha Desa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
