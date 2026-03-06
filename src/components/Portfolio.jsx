import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// IMPOR ASET GAMBAR PORTOFOLIO
import imgDex from '../assets/portfolio_image/project-dex.jpg';
import imgDashboard from '../assets/portfolio_image/project-dashboard.jpg';
import imgWallet from '../assets/portfolio_image/project-wallet.jpg';

export default function Portfolio() {
  const projects = [
    {
      slug: 'dex-interface',
      image: imgDex,
      category: 'UI/UX DESIGN & WEB3',
      title: 'Decentralized Exchange (DEX) Interface',
      description: 'Merancang antarmuka bursa kripto terdesentralisasi dengan fokus pada kemudahan transaksi dan visualisasi data real-time.',
    },
    {
      slug: 'smart-contract-dashboard',
      image: imgDashboard,
      category: 'FULL-STACK DEVELOPMENT',
      title: 'Smart Contract Analytics Dashboard',
      description: 'Membangun dasbor analitik komprehensif untuk memantau aktivitas dan performa smart contract di jaringan blockchain.',
    },
    {
      slug: 'nft-marketplace',
      image: imgWallet,
      category: 'FRONTEND ENGINEERING',
      title: 'NFT Marketplace Portal',
      description: 'Mengembangkan portal interaktif untuk pencetakan dan perdagangan aset digital NFT dengan integrasi dompet Web3.',
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative z-10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Karya & <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400 drop-shadow-neon-purple">Portofolio</span>
          </h2>
          <p className="text-crypto-silver max-w-2xl mx-auto text-sm md:text-base">
            Koleksi proyek terpilih yang mendemonstrasikan keahlian saya dalam merancang antarmuka pengguna dan membangun ekosistem digital berkinerja tinggi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-glass-bg border border-glass-border backdrop-blur-crypto overflow-hidden hover:shadow-neon-purple transition-all duration-500 flex flex-col cursor-pointer"
            >
              <Link to={`/project/${project.slug}`} className="flex flex-col h-full">
                
                {/* MODUL RENDER GAMBAR DINAMIS */}
                <div className="h-56 w-full bg-crypto-dark relative flex items-center justify-center overflow-hidden border-b border-glass-border">
                  <div className="absolute inset-0 bg-crypto-purple/40 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-crypto-dark/80 border border-crypto-purple/50 backdrop-blur-md text-[10px] font-mono text-crypto-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    LIHAT DETAIL
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between relative">
                  <div className="absolute -inset-2 bg-crypto-purple opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none"></div>
                  <div>
                    <p className="text-crypto-purple text-xs font-bold tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-crypto-purple group-hover:to-blue-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-crypto-silver leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-sm font-semibold text-white group-hover:text-crypto-purple transition-colors duration-300 w-fit">
                    Studi Kasus 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}