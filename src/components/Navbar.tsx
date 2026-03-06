import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Sensor Scroll untuk mengubah efek Navbar dan Anchor Aktif
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Deteksi posisi halaman untuk Active Anchor
      const sections = ['home', 'techstack', 'portfolio', 'certificates'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', id: 'home' },
    { name: 'Keahlian', id: 'techstack' },
    { name: 'Portofolio', id: 'portfolio' },
    { name: 'Sertifikasi', id: 'certificates' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-crypto-dark/80 border-b border-glass-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider relative z-10 cursor-pointer">
          ARYA<span className="text-crypto-purple drop-shadow-neon-purple">.DEV</span>
        </a>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-all duration-300 ${activeSection === link.id ? 'text-crypto-purple drop-shadow-neon-purple' : 'text-crypto-silver hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="px-6 py-2.5 rounded-full bg-crypto-purple text-white font-medium hover:bg-purple-600 transition-all shadow-neon-purple duration-300 cursor-pointer">
          Hubungi Saya
        </a>
      </div>
    </nav>
  );
}