import React from 'react';
import { motion } from 'framer-motion';

// IMPOR ASET IKON 3D (JALUR SUDAH DIKALIBRASI)
import iconResearch from '../assets/icons/icon-blockchain.jpg';
import iconAnalyze from '../assets/icons/icon-security.jpg';
import iconDesign from '../assets/icons/icon-design.jpg';
import iconLaunch from '../assets/icons/icon-blockchain.jpg'; // Kita gunakan ulang untuk langkah ke-4

export default function WorkProcess() {
  // 2. SUNTIKKAN VARIABEL IKON KE DALAM DATA ARRAY
  const processes = [
    {
      id: '01',
      icon: iconResearch, // <-- Sambungan ikon
      title: 'Riset Mendalam',
      description: 'Menganalisis kebutuhan ekosistem, target pengguna, dan tren Web3 terkini untuk membangun fondasi yang solid.',
    },
    {
      id: '02',
      icon: iconAnalyze, // <-- Sambungan ikon
      title: 'Arsitektur & Analisis',
      description: 'Merancang alur logika dan struktur data presisi sebelum masuk ke tahap visualisasi antarmuka.',
    },
    {
      id: '03',
      icon: iconDesign, // <-- Sambungan ikon
      title: 'Desain UI/UX',
      description: 'Menciptakan antarmuka pengguna bergaya futuristik yang intuitif, berfokus pada pengalaman interaksi yang mulus.',
    },
    {
      id: '04',
      icon: iconLaunch, // <-- Sambungan ikon
      title: 'Integrasi & Peluncuran',
      description: 'Mengeksekusi kode dengan performa tinggi dan melakukan peluncuran produk digital yang responsif dan aman.',
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proses <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400 drop-shadow-neon-purple">Kerja</span>
          </h2>
          <p className="text-crypto-silver max-w-2xl mx-auto text-sm md:text-base">
            Metodologi sistematis yang saya terapkan untuk mengubah konsep abstrak menjadi realitas digital yang fungsional dengan standar industri tingkat tinggi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-glass-bg border border-glass-border backdrop-blur-crypto hover:shadow-neon-purple transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-crypto-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* 3. MODUL RENDER IKON 3D MELAYANG */}
              <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
                {/* Efek Cahaya Latar Ikon */}
                <div className="absolute inset-0 bg-crypto-purple opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Gambar Ikon 3D */}
                <motion.img 
                  src={process.icon} 
                  alt={process.title}
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                  animate={{ y: [0, -8, 0] }} // Animasi melayang konstan
                  transition={{ duration: 3 + (index * 0.5), repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Angka Transparan di Belakang Ikon */}
                <div className="absolute -right-4 -bottom-4 text-7xl font-black text-white/[0.03] pointer-events-none z-0">
                  {process.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{process.title}</h3>
              <p className="text-sm text-crypto-silver leading-relaxed relative z-10">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}