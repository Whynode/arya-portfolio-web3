import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (!isHomePage) return;
      const sections = ['home', 'about', 'techstack', 'portfolio', 'certificates', 'contact'];
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
  }, [isHomePage]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isMobileOpen]);

  const navLinks = [
    { name: 'Beranda', id: 'home' },
    { name: 'Tentang', id: 'about' },
    { name: 'Keahlian', id: 'techstack' },
    { name: 'Portofolio', id: 'portfolio' },
    { name: 'Sertifikasi', id: 'certificates' },
    { name: 'Kontak', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
    if (!isHomePage) {
      // Navigate to home first, then scroll
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 transition-all duration-700 ${
        isScrolled 
          ? 'py-3 glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-wider relative z-10 group" data-hover>
            <span className="text-text-primary group-hover:text-gradient transition-all duration-300">ARYA</span>
            <span className="text-accent animate-pulse-glow inline-block">.</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-glass-bg rounded-full px-2 py-1.5 border border-glass-border">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 text-[13px] font-medium transition-all duration-300 rounded-full ${
                  isHomePage && activeSection === link.id
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {isHomePage && activeSection === link.id && (
                  <motion.div
                    layoutId="navPill"
                    className="absolute inset-0 bg-accent/15 border border-accent/20 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
            {/* Blog link */}
            <Link
              to="/blog"
              className={`relative px-4 py-1.5 text-[13px] font-medium transition-all duration-300 rounded-full ${
                location.pathname === '/blog'
                  ? 'text-text-primary bg-accent/15 border border-accent/20'
                  : 'text-text-muted hover:text-text-primary'
              }`}
              data-hover
            >
              Blog
            </Link>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button onClick={() => handleNavClick('contact')} className="hidden md:inline-flex px-5 py-2 rounded-full bg-accent text-bg-primary text-sm font-semibold hover:shadow-glow-strong transition-all duration-500 hover:scale-105 cursor-pointer" data-hover>
              Hubungi Saya
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
            >
              <motion.span animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-text-primary" />
              <motion.span animate={isMobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }} className="block w-6 h-[2px] bg-text-primary" />
              <motion.span animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    activeSection === link.id ? 'text-accent' : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/blog"
                  onClick={() => { setIsMobileOpen(false); document.body.style.overflow = ''; }}
                  className="text-2xl font-bold text-text-primary hover:text-accent transition-colors duration-300"
                >
                  Blog
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}