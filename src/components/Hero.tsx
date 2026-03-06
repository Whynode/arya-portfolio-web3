import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile-avatar.jpg'; 

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      
      {/* Holographic Mesh Gradient Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-crypto-purple/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-block px-4 py-2 rounded-full bg-crypto-purple/10 border border-crypto-purple/30 text-crypto-purple text-xs font-bold tracking-widest mb-6">
            FULL-STACK & MACHINE LEARNING ENTHUSIAST
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Merancang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400 drop-shadow-neon-purple">
              Realitas Digital.
            </span>
          </h1>
          <p className="text-lg text-crypto-silver mb-10 leading-relaxed max-w-xl">
            Saya Arya Suhendra. Memadukan presisi logika Full-Stack Development dengan estetika antarmuka futuristik untuk menciptakan ekosistem web berkinerja tinggi.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {/* Aktivasi Anchor Active */}
            <a href="#portfolio" className="px-8 py-3.5 rounded-full bg-crypto-purple text-white font-semibold hover:bg-purple-600 transition-all shadow-neon-purple duration-300">
              Eksplorasi Portofolio
            </a>
            {/* Aktivasi Download CV (Pastikan file PDF ada di folder public/) */}
            <a href="/Arya_Suhendra_CV.pdf" download className="px-8 py-3.5 rounded-full bg-glass-bg border border-glass-border text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-crypto">
              Unduh CV
            </a>
          </div>
        </motion.div>

        {/* Remodel Kontainer Foto Profil (Lebih Panjang & Proporsional) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-full"
        >
          {/* Kontainer aspect-[3/4] untuk postur yang lebih elegan */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-sm aspect-[3/4] rounded-[2.5rem] p-1.5 bg-gradient-to-br from-crypto-purple via-blue-500/40 to-transparent overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.3)]"
          >
            <div className="w-full h-full bg-crypto-dark rounded-[2.2rem] overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-10 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={profileImg} alt="Arya Suhendra" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-0 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-crypto-dark to-transparent z-10"></div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}