import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import CatalogSection from './components/sections/CatalogSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 text-ink-900 font-body selection:bg-maroon-100 selection:text-maroon-700">
      <Navbar />
      <main>
        <HeroSection />
        <CatalogSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
