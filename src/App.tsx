import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TrustedLogos from './components/TrustedLogos';
import WhyBitB from './components/WhyBitB';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Set document title
    document.title = 'bitB - Your Entire Network, Discovered and Mapped';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Hero />
      <Features />
      <TrustedLogos />
      <WhyBitB />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;