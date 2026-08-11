import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sparkles, Users, Award, MapPin } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: '🎋',
      title: 'Kriya Anyaman Bambu',
      desc: 'Diwariskan secara puluhan tahun oleh pengrajin di Dusun 1 dan 2 dengan bambu lokal bermutu.',
    },
    {
      icon: '🪵',
      title: 'Kayu & Furnitur Minimalis',
      desc: 'Diolah di Dusun 3 menjadi kayu reng presisi serta produk rak kayu minimalis modern.',
    },
    {
      icon: '🌿',
      title: 'Hasil Bumi Alami',
      desc: 'Kapulaga, buah segar, dan rempah pegunungan berkualitas tinggi dari hasil kebun warga.',
    },
    {
      icon: '👗',
      title: 'Konveksi & Maklon',
      desc: 'Rumah produksi celana dan jahit kerudung halus untuk kebutuhan fashion lokal dan nasional.',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-cream-50/60 border-t border-b border-cream-300/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tan-500/20 text-maroon-700 text-xs font-semibold tracking-widest uppercase shadow-chip">
            <Sparkles className="w-3.5 h-3.5 text-tan-500" />
            <span>Tentang E-Katalog Desa</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-600 tracking-tight">
            Memberdayakan Potensi Lokal Desa Nangtang
          </h2>

          <p className="text-ink-500 text-base leading-relaxed">
            E-Katalog UMKM ini diinisiasi oleh <strong>Tim KKN Kelompok 02 Universitas Siliwangi (UNSIL) 2026</strong> bekerjasama dengan Perangkat Desa Nangtang untuk mendigitalisasi etalase produk lokal, mempermudah akses pasar, dan memperkuat identitas usaha desa secara inklusif.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-cream-100 p-6 rounded-3xl border border-cream-300/80 shadow-soft hover:shadow-lift transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-cream-50 text-2xl flex items-center justify-center shadow-chip border border-cream-300">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-maroon-600">
                {item.title}
              </h3>
              <p className="text-xs text-ink-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Banner KKN Commitment */}
        <div className="mt-14 p-8 rounded-4xl bg-gradient-to-r from-maroon-600 to-maroon-700 text-cream-50 shadow-emboss flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-2xl">
              Ingin Mendaftarkan Usaha UMKM Anda?
            </h3>
            <p className="text-cream-200 text-sm max-w-xl">
              Warga Desa Nangtang yang memiliki usaha kerajinan, makanan, atau hasil bumi dapat menghubungi tim KKN untuk dimasukkan ke katalog digital ini secara gratis.
            </p>
          </div>

          <a
            href="https://wa.me/6282311995020?text=Halo%20Tim%20KKN,%20saya%20warga%20Desa%20Nangtang%20ingin%20mendaftarkan%20usaha%20saya%20ke%20E-Katalog."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-tan-500 hover:bg-tan-400 text-maroon-900 font-bold text-sm shadow-lift active:scale-95 transition-all"
          >
            Daftarkan Usaha Sekarang
          </a>
        </div>

      </div>
    </section>
  );
}
