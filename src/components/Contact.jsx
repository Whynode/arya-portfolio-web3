import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 lg:py-32 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Inisiasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400 drop-shadow-neon-purple">Kolaborasi</span>
          </h2>
          <p className="text-crypto-silver max-w-2xl mx-auto text-sm md:text-base">
            Saya selalu terbuka untuk mendiskusikan peluang proyek baru, arsitektur sistem kompleks, atau sekadar bertukar pikiran mengenai tren UI/UX dan ekosistem Web3.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* KOLOM KIRI: Informasi Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Informasi Kredensial</h3>
            
            {/* Kartu Email */}
            <div className="p-6 rounded-2xl bg-glass-bg border border-glass-border backdrop-blur-crypto hover:shadow-neon-purple transition-all duration-300 flex items-center gap-5 group cursor-default">
              <div className="w-12 h-12 rounded-full border border-crypto-purple/50 bg-crypto-purple/10 flex items-center justify-center text-crypto-purple group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(124,58,237,0.2)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-crypto-silver uppercase tracking-wider mb-1">Email Komunikasi</p>
                <p className="text-white font-medium text-lg">arya.suhendra@workspace.dev</p>
              </div>
            </div>

            {/* Kartu Lokasi */}
            <div className="p-6 rounded-2xl bg-glass-bg border border-glass-border backdrop-blur-crypto hover:shadow-neon-purple transition-all duration-300 flex items-center gap-5 group cursor-default">
              <div className="w-12 h-12 rounded-full border border-crypto-purple/50 bg-crypto-purple/10 flex items-center justify-center text-crypto-purple group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(124,58,237,0.2)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-crypto-silver uppercase tracking-wider mb-1">Basis Operasi</p>
                <p className="text-white font-medium text-lg">Indonesia (Sistem Remote)</p>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN: Formulir Komunikasi */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <form className="p-8 md:p-10 rounded-3xl bg-glass-bg border border-glass-border backdrop-blur-crypto shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Input Nama */}
                <div className="relative group">
                  <input type="text" id="name" required className="w-full bg-transparent border-b border-glass-border py-2 text-white outline-none focus:border-crypto-purple transition-colors duration-300 peer placeholder-transparent" placeholder="Nama Anda" />
                  <label htmlFor="name" className="absolute left-0 top-2 text-crypto-silver text-sm transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-crypto-purple peer-valid:-top-5 peer-valid:text-xs peer-valid:text-crypto-purple">Identitas / Nama Anda</label>
                </div>
                {/* Input Email */}
                <div className="relative group">
                  <input type="email" id="email" required className="w-full bg-transparent border-b border-glass-border py-2 text-white outline-none focus:border-crypto-purple transition-colors duration-300 peer placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 top-2 text-crypto-silver text-sm transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-crypto-purple peer-valid:-top-5 peer-valid:text-xs peer-valid:text-crypto-purple">Alamat Email</label>
                </div>
              </div>

              {/* Input Subjek */}
              <div className="relative group">
                <input type="text" id="subject" required className="w-full bg-transparent border-b border-glass-border py-2 text-white outline-none focus:border-crypto-purple transition-colors duration-300 peer placeholder-transparent" placeholder="Subjek" />
                <label htmlFor="subject" className="absolute left-0 top-2 text-crypto-silver text-sm transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-crypto-purple peer-valid:-top-5 peer-valid:text-xs peer-valid:text-crypto-purple">Subjek Diskusi</label>
              </div>

              {/* Input Pesan */}
              <div className="relative group">
                <textarea id="message" rows="4" required className="w-full bg-transparent border-b border-glass-border py-2 text-white outline-none focus:border-crypto-purple transition-colors duration-300 peer placeholder-transparent resize-none" placeholder="Pesan"></textarea>
                <label htmlFor="message" className="absolute left-0 top-2 text-crypto-silver text-sm transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-crypto-purple peer-valid:-top-5 peer-valid:text-xs peer-valid:text-crypto-purple">Pesan atau Deskripsi Proyek</label>
              </div>

              {/* Tombol Kirim */}
              <button type="button" className="mt-4 w-full py-4 rounded-xl bg-crypto-purple text-white font-bold tracking-wider hover:bg-purple-600 transition-all shadow-neon-purple duration-300 flex justify-center items-center gap-3">
                Kirim Transmisi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}