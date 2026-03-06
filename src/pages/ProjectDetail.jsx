import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// IMPOR ASET GAMBAR PORTOFOLIO
// Pastikan nama file ini sama dengan yang ada di folder Anda!
import imgDex from '../assets/portfolio_image/project-dex.jpg';
import imgDashboard from '../assets/portfolio_image/project-dashboard.jpg';
import imgWallet from '../assets/portfolio_image/project-wallet.jpg';

// MOCK DATABASE DIPERBARUI
const projectDatabase = {
  'dex-interface': {
    title: 'Decentralized Exchange (DEX) Interface',
    category: 'UI/UX DESIGN & WEB3',
    date: 'Desember 2025',
    role: 'Lead UI/UX Designer',
    image: imgDex,
    overview: 'Proyek ini berfokus pada perancangan ulang antarmuka bursa kripto terdesentralisasi. Tujuan utamanya adalah menyederhanakan kompleksitas transaksi Web3 bagi pengguna awam tanpa mengorbankan fitur analitik canggih yang dibutuhkan oleh trader profesional.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Web3.js'],
  },
  'smart-contract-dashboard': {
    title: 'Smart Contract Analytics Dashboard',
    category: 'FULL-STACK DEVELOPMENT',
    date: 'Januari 2026',
    role: 'Full-Stack Engineer',
    image: imgDashboard,
    overview: 'Membangun dasbor analitik waktu-nyata (real-time) untuk melacak eksekusi dan gas fee dari smart contract di jaringan Ethereum. Sistem ini dirancang untuk memproses ribuan data per detik dengan latensi minimal.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Ethers.js'],
  },
  'nft-marketplace': {
    title: 'NFT Marketplace Portal',
    category: 'FRONTEND ENGINEERING',
    date: 'Februari 2026',
    role: 'Frontend Architect',
    image: imgWallet,
    overview: 'Mengembangkan portal interaktif untuk pencetakan dan perdagangan aset digital NFT dengan integrasi dompet Web3 yang mulus dan aman.',
    techStack: ['React', 'Tailwind CSS', 'Ethers.js', 'IPFS'],
  },
  'default': {
    title: 'Sistem Terenkripsi',
    category: 'RESEARCH & DEVELOPMENT',
    date: 'Maret 2026',
    role: 'System Architect',
    image: imgDashboard,
    overview: 'Data untuk proyek ini sedang dalam tahap sinkronisasi dengan jaringan utama. Visualisasi dan metrik lengkap akan segera tersedia setelah protokol keamanan diselesaikan.',
    techStack: ['Confidential', 'Cryptography'],
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = projectDatabase[id] || projectDatabase['default'];
    setProject(data);
  }, [id]);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-crypto-purple">Memuat Data Entitas...</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen relative z-10"
    >
      <Link to="/" className="inline-flex items-center text-crypto-silver hover:text-crypto-purple transition-colors duration-300 mb-10 group cursor-pointer relative z-20">
        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Pusat Komando
      </Link>

      <header className="mb-16">
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-crypto-purple font-bold tracking-widest text-sm mb-3"
        >
          {project.category}
        </motion.p>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {project.title}
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-6 text-sm text-gray-400 border-t border-b border-glass-border py-4"
        >
          <p><strong className="text-crypto-silver">Peran:</strong> {project.role}</p>
          <p><strong className="text-crypto-silver">Tanggal Rilis:</strong> {project.date}</p>
        </motion.div>
      </header>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full aspect-video md:aspect-[21/9] rounded-3xl border border-glass-border overflow-hidden mb-16 relative group shadow-[0_0_30px_rgba(124,58,237,0.2)]"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-crypto-dark via-transparent to-transparent pointer-events-none opacity-80"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <motion.section initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-4">Tinjauan Arsitektur</h3>
            <p className="text-crypto-silver leading-relaxed text-lg">
              {project.overview}
            </p>
          </motion.section>
        </div>

        <div className="space-y-8">
          <motion.section initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-white mb-4">Teknologi & Ekosistem</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-crypto-purple/10 border border-crypto-purple/30 text-crypto-purple text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

    </motion.div>
  );
}