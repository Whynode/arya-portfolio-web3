import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import imgDex from '../assets/portfolio_image/project-dex.jpg';
import imgDashboard from '../assets/portfolio_image/project-dashboard.jpg';
import imgWallet from '../assets/portfolio_image/project-wallet.jpg';

const projectKeys = ['dex-interface', 'smart-contract-dashboard', 'nft-marketplace'];

const projectDatabase = {
  'dex-interface': {
    title: 'Decentralized Exchange (DEX) Interface',
    category: 'UI/UX DESIGN & WEB3',
    date: 'Desember 2025',
    role: 'Lead UI/UX Designer',
    image: imgDex,
    overview: 'Proyek ini berfokus pada perancangan ulang antarmuka bursa kripto terdesentralisasi. Tujuan utamanya adalah menyederhanakan kompleksitas transaksi Web3 bagi pengguna awam tanpa mengorbankan fitur analitik canggih yang dibutuhkan oleh trader profesional.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Web3.js'],
    features: [
      'Token swap dengan slippage control',
      'Real-time price chart integration',
      'Multi-wallet support (MetaMask, WalletConnect)',
      'Responsive mobile-first design',
      'Dark mode dengan accent customizable',
    ],
    challenges: 'Tantangan utama adalah menyederhanakan UI untuk pengguna non-teknis sambil mempertahankan fungsionalitas trading lanjutan seperti limit order dan liquidity provision.',
  },
  'smart-contract-dashboard': {
    title: 'Smart Contract Analytics Dashboard',
    category: 'FULL-STACK DEVELOPMENT',
    date: 'Januari 2026',
    role: 'Full-Stack Engineer',
    image: imgDashboard,
    overview: 'Membangun dasbor analitik waktu-nyata untuk melacak eksekusi dan gas fee dari smart contract di jaringan Ethereum. Sistem ini dirancang untuk memproses ribuan data per detik.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Ethers.js'],
    features: [
      'Real-time transaction monitoring',
      'Gas fee optimization suggestions',
      'Historical data visualization (30d/90d/1y)',
      'Smart contract event listener',
      'Export data ke CSV & PDF',
    ],
    challenges: 'Skala data yang besar membutuhkan arsitektur streaming dan caching yang efisien untuk menjaga latensi di bawah 100ms.',
  },
  'nft-marketplace': {
    title: 'NFT Marketplace Portal',
    category: 'FRONTEND ENGINEERING',
    date: 'Februari 2026',
    role: 'Frontend Architect',
    image: imgWallet,
    overview: 'Mengembangkan portal interaktif untuk pencetakan dan perdagangan aset digital NFT dengan integrasi dompet Web3 yang mulus dan aman.',
    techStack: ['React', 'Tailwind CSS', 'Ethers.js', 'IPFS'],
    features: [
      'Lazy minting untuk efisiensi gas',
      'IPFS decentralized storage integration',
      'Auction & fixed-price listing',
      'Collection management dashboard',
      'Cross-chain support (Ethereum & Polygon)',
    ],
    challenges: 'Mengoptimalkan loading time untuk gallery NFT dengan resolusi tinggi sambil menjaga UX yang mulus saat wallet interaction.',
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = projectDatabase[id];
    if (data) {
      setProject(data);
      setCurrentIndex(projectKeys.indexOf(id));
    } else {
      setProject(projectDatabase['dex-interface']);
      setCurrentIndex(0);
    }
  }, [id]);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
  const nextProject = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto min-h-screen relative z-10">
      <div className="glow-blob glow-blob-purple w-[400px] h-[400px] absolute top-[10%] right-[-10%] opacity-[0.07]"></div>

      {/* Back link */}
      <Link to="/" className="inline-flex items-center text-text-muted hover:text-accent transition-colors duration-300 mb-8 group" data-hover>
        <svg className="w-3.5 h-3.5 mr-2 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-xs font-medium">Kembali ke Portofolio</span>
      </Link>

      {/* Header */}
      <header className="mb-12">
        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="mb-3">
          <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-bold tracking-widest">
            {project.category}
          </span>
        </motion.div>
        <motion.h1 
          initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-text-primary mb-5 leading-tight"
        >
          {project.title}
        </motion.h1>
        <motion.div 
          initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-5 text-xs text-text-muted border-t border-b border-glass-border py-3"
        >
          <p><strong className="text-text-primary">Peran:</strong> {project.role}</p>
          <p><strong className="text-text-primary">Tanggal:</strong> {project.date}</p>
        </motion.div>
      </header>

      {/* Hero image */}
      <motion.div 
        initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}
        className="w-full aspect-video md:aspect-[21/9] rounded-2xl border border-glass-border overflow-hidden mb-12 relative group shadow-card"
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none opacity-60"></div>
      </motion.div>

      {/* Content grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        
        {/* Overview */}
        <div className="md:col-span-2">
          <motion.section initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-base font-bold text-text-primary mb-3 flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center" style={{ transform: 'perspective(100px) rotateX(4deg)' }}>
                <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              </div>
              Tinjauan Proyek
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">{project.overview}</p>
          </motion.section>

          {/* Features */}
          <motion.section initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="mt-8">
            <h3 className="text-base font-bold text-text-primary mb-3 flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center" style={{ transform: 'perspective(100px) rotateX(4deg)' }}>
                <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              Fitur Utama
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2.5 text-sm text-text-muted"
                >
                  <span className="w-4 h-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Challenges */}
          <motion.section initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="mt-8">
            <h3 className="text-base font-bold text-text-primary mb-3 flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center" style={{ transform: 'perspective(100px) rotateX(4deg)' }}>
                <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
              </div>
              Tantangan
            </h3>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-sm text-text-muted leading-relaxed">{project.challenges}</p>
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div>
          <motion.section initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-sm font-bold text-text-primary mb-3">Teknologi</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg glass-card text-accent text-xs font-semibold">{tech}</span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="flex justify-between items-center border-t border-glass-border pt-8">
        {prevProject ? (
          <Link to={`/project/${prevProject}`} className="group flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-300" data-hover>
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-text-dim block">Sebelumnya</span>
              <span className="text-xs font-semibold">{projectDatabase[prevProject].title.substring(0, 30)}...</span>
            </div>
          </Link>
        ) : <div />}
        
        {nextProject ? (
          <Link to={`/project/${nextProject}`} className="group flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-300 text-right" data-hover>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-text-dim block">Selanjutnya</span>
              <span className="text-xs font-semibold">{projectDatabase[nextProject].title.substring(0, 30)}...</span>
            </div>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}