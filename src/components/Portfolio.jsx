import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import imgDex from '../assets/portfolio_image/project-dex.jpg';
import imgDashboard from '../assets/portfolio_image/project-dashboard.jpg';
import imgWallet from '../assets/portfolio_image/project-wallet.jpg';

// 3D Tilt card with spotlight
function Card3D({ children, className }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ rotateX: (0.5 - y) * 6, rotateY: (x - 0.5) * 6 });
    setSpotlight({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={tilt}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: `radial-gradient(250px circle at ${spotlight.x}% ${spotlight.y}%, rgba(167,139,250,0.07), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const projects = [
    {
      slug: 'dex-interface',
      image: imgDex,
      category: 'UI/UX & WEB3',
      title: 'Decentralized Exchange Interface',
      description: 'Merancang antarmuka bursa kripto terdesentralisasi dengan fokus pada kemudahan transaksi.',
      tech: ['React', 'Tailwind', 'Web3.js'],
    },
    {
      slug: 'smart-contract-dashboard',
      image: imgDashboard,
      category: 'FULL-STACK',
      title: 'Smart Contract Analytics',
      description: 'Dasbor analitik real-time untuk memantau aktivitas dan performa smart contract.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      slug: 'nft-marketplace',
      image: imgWallet,
      category: 'FRONTEND',
      title: 'NFT Marketplace Portal',
      description: 'Portal interaktif untuk pencetakan dan perdagangan aset digital NFT.',
      tech: ['React', 'Ethers.js', 'IPFS'],
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative z-10" id="portfolio">
      <div className="glow-blob glow-blob-purple w-[400px] h-[400px] absolute top-[30%] left-[-8%] opacity-[0.06]"></div>

      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[10px] font-semibold tracking-widest mb-4">
            SELECTED WORK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Karya & <span className="text-gradient">Portofolio</span>
          </h2>
          <p className="text-text-muted max-w-md mx-auto text-sm">
            Koleksi proyek terpilih yang mendemonstrasikan keahlian teknis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to={`/project/${project.slug}`} className="group block" data-hover>
                <Card3D className="glass-card-interactive rounded-2xl group relative overflow-hidden">
                  {/* Image — properly contained */}
                  <div className="h-48 w-full bg-bg-card relative overflow-hidden rounded-t-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent"></div>
                    
                    {/* Badge — glass */}
                    <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg glass-strong text-[9px] font-bold text-accent tracking-wider">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 relative z-20">
                    <h3 className="text-sm font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech tags — glass */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md glass-card text-[9px] font-medium text-text-dim">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}