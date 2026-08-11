import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ShoppingBag, Info, PhoneCall, Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda', icon: Home },
    { name: 'Katalog', href: '#katalog', icon: ShoppingBag },
    { name: 'Tentang', href: '#tentang', icon: Info },
    { name: 'Kontak', href: '#kontak', icon: PhoneCall },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-soft py-3 border-b border-cream-300/50'
          : 'bg-cream-100/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#beranda"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-maroon-300 rounded-xl p-1"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-maroon-600 to-maroon-700 text-cream-50 flex items-center justify-center shadow-emboss transition-transform duration-300 group-hover:scale-105">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display font-bold text-xl sm:text-2xl text-maroon-600 tracking-tight block leading-tight">
              Desa Nangtang
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-ink-500 block">
              E-Katalog UMKM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-cream-50/80 p-1.5 rounded-full border border-cream-300/60 shadow-chip">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-ink-900 hover:text-maroon-600 hover:bg-cream-100 transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-tan-500" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-maroon-600 hover:bg-maroon-700 text-cream-50 text-sm font-semibold shadow-emboss active:translate-y-0.5 transition-all duration-150"
          >
            <MessageCircle className="w-4 h-4 fill-cream-50/20" />
            <span>Tanya KKN</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Buka menu navigasi"
          className="md:hidden p-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-maroon-600 shadow-chip active:scale-95 transition-all"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink-900/40 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-cream-100 z-50 p-6 flex flex-col justify-between shadow-lift border-l border-cream-300/60"
            >
              <div>
                {/* Header inside Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-cream-300">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-maroon-600 text-cream-50 flex items-center justify-center">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-lg text-maroon-600">
                      Desa Nangtang
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-cream-300/50 text-ink-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="py-6 space-y-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-medium text-ink-900 hover:bg-cream-50 hover:text-maroon-600 transition-all border border-transparent hover:border-cream-300"
                      >
                        <div className="w-8 h-8 rounded-xl bg-cream-200 text-maroon-600 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="pt-6 border-t border-cream-300 space-y-3">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-maroon-600 text-cream-50 font-semibold shadow-emboss text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Hubungi via WhatsApp</span>
                </a>
                <p className="text-center text-xs text-ink-500 font-medium">
                  KKN Kelompok 02 — Universitas Siliwangi 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
