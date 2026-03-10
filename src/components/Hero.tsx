import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
// @ts-ignore
import profileImg from '../assets/images/profile-avatar.jpg';

// Counter animation hook
function useCounter(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;
    const numEnd = parseInt(end);
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numEnd));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);
  return count;
}

// Magnetic button component
function MagneticButton({ children, href, className, download = false }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download || undefined}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      data-hover
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const count1 = useCounter('3', 1500, isStatsInView);
  const count2 = useCounter('10', 2000, isStatsInView);
  const count3 = useCounter('8', 1800, isStatsInView);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-screen flex items-center">
      
      {/* Clean section glow - no floating icons */}
      <div className="glow-blob glow-blob-purple w-[500px] h-[500px] absolute top-[-15%] left-[-10%] opacity-[0.1]"></div>
      <div className="glow-blob glow-blob-blue w-[400px] h-[400px] absolute bottom-[-10%] right-[-5%] opacity-[0.06]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
        
        {/* Left: Content */}
        <div>
          {/* Status badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[11px] font-semibold tracking-widest mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
            </span>
            AVAILABLE FOR WORK
          </motion.div>

          {/* Clean heading — proportional sizes */}
          <motion.h1 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-text-primary mb-5 tracking-tight leading-[1.1]"
          >
            Merancang{' '}
            <span className="text-gradient">Realitas Digital.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm md:text-base text-text-muted mb-8 leading-relaxed max-w-md"
          >
            Saya <span className="text-text-primary font-medium">Arya Suhendra</span> — Full-Stack Developer & Machine Learning Enthusiast. Membangun ekosistem web berkinerja tinggi dengan estetika futuristik.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-accent text-bg-primary font-semibold text-sm hover:shadow-glow-strong transition-all duration-500 inline-flex items-center gap-2"
            >
              Eksplorasi Portofolio
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </MagneticButton>
            <MagneticButton
              href="/Arya_Suhendra_CV.pdf"
              download={true}
              className="px-6 py-3 rounded-full bg-glass-bg border border-glass-border text-text-primary font-semibold text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-500 backdrop-blur-xl inline-flex items-center gap-2"
            >
              Unduh CV
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </MagneticButton>
          </motion.div>

          {/* Stats counter */}
          <motion.div 
            ref={statsRef}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-8 mt-12 pt-6 border-t border-glass-border"
          >
            {[
              { num: count1, suffix: '+', label: 'Tahun Pengalaman' },
              { num: count2, suffix: '+', label: 'Project Selesai' },
              { num: count3, suffix: '', label: 'Sertifikasi' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-2xl md:text-3xl font-extrabold text-text-primary group-hover:text-gradient transition-all duration-300">
                  {stat.num}{stat.suffix}
                </div>
                <div className="text-[11px] text-text-muted mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile Image — properly contained */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[340px] aspect-[3/4] group mx-auto">
            {/* Subtle glow behind */}
            <div className="absolute inset-4 bg-accent/15 rounded-2xl blur-[50px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* Image container — clean border, no overflow */}
            <div className="relative w-full h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-accent/40 via-accent-blue/20 to-transparent overflow-hidden">
              <div className="w-full h-full bg-bg-card rounded-[14px] overflow-hidden relative">
                <img 
                  src={profileImg} 
                  alt="Arya Suhendra" 
                  className="w-full h-full object-cover object-top" 
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-bg-card to-transparent"></div>
                
                {/* Clean label */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-4 left-4 right-4 p-3 glass-card rounded-lg"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow"></div>
                    <div>
                      <div className="text-text-primary font-semibold text-xs">Full-Stack Developer</div>
                      <div className="text-text-muted text-[10px]">Machine Learning Enthusiast</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}