import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 paper-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-sage-500 font-bold">
            Informasi & Lokasi
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-600">
            Hubungi Perangkat Desa & KKN
          </h2>
          <p className="text-ink-500 text-sm">
            Punya pertanyaan mengenai UMKM Desa Nangtang atau tertarik memesan kerajinan dalam jumlah besar? Hubungi kami via WhatsApp atau datang langsung ke Balai Desa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-cream-50 p-8 rounded-4xl border border-cream-300 shadow-soft space-y-6">
            <h3 className="font-display font-bold text-xl text-maroon-600 border-b border-cream-300 pb-3">
              Kantor Balai Desa Nangtang
            </h3>

            <div className="space-y-4 text-sm text-ink-900">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-cream-200 text-maroon-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-maroon-600">Alamat Lengkap:</strong>
                  <span className="text-ink-500 leading-relaxed text-xs">
                    Jl. Raya Cigalontang, Desa Nangtang, Kecamatan Cigalontang, Kabupaten Tasikmalaya, Jawa Barat 46463
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-cream-200 text-maroon-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-maroon-600">Kontak WhatsApp:</strong>
                  <span className="text-ink-500 text-xs">0823-1199-5020 (Admin Desa & KKN)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-cream-200 text-maroon-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-maroon-600">Jam Layanan Desa:</strong>
                  <span className="text-ink-500 text-xs">Senin – Jumat: 08:00 – 15:00 WIB</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-300/80">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-maroon-600 hover:bg-maroon-700 text-cream-50 font-bold text-sm shadow-emboss active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kirim Pesan WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-7 bg-cream-50 p-3 rounded-4xl border border-cream-300 shadow-soft overflow-hidden h-[380px] sm:h-[420px] relative">
            <iframe
              title="Peta Desa Nangtang Cigalontang Tasikmalaya"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883906322964!2d108.0645607!3d-7.3668819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f51fbc9c09c5b%3A0xb35a0928929e5ff3!2sNangtang%2C%20Kec.%20Cigalontang%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.75rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
