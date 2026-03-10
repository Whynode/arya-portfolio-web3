import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timeline = [
  { year: '2021', title: 'Memulai Coding', description: 'Mendalami HTML, CSS, JavaScript dan dasar-dasar pemrograman web.' },
  { year: '2022', title: 'Frontend Developer', description: 'Menguasai React, Tailwind CSS, dan membangun proyek-proyek klien pertama.' },
  { year: '2023', title: 'Full-Stack & UI/UX', description: 'Ekspansi ke backend (Node.js, PostgreSQL) dan sertifikasi Google UI/UX.' },
  { year: '2024', title: 'AI & Machine Learning', description: 'Mendalami TensorFlow, prompt engineering, dan integrasi AI ke produk digital.' },
  { year: '2025', title: 'Web3 & Blockchain', description: 'Merancang antarmuka DeFi, NFT marketplace, dan smart contract analytics.' },
];

const values = [
  { icon: '🎯', title: 'Presisi', desc: 'Detail-oriented dalam setiap pixel dan baris kode.' },
  { icon: '⚡', title: 'Performa', desc: 'Mengoptimalkan kecepatan dan efisiensi di setiap layer.' },
  { icon: '🔬', title: 'Riset', desc: 'Berbasis data dan tren teknologi terkini.' },
  { icon: '🤝', title: 'Kolaborasi', desc: 'Komunikasi jelas dan workflow terstruktur.' },
];

export default function AboutMe() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-20 lg:py-28 relative z-10">
      <div className="glow-blob glow-blob-blue w-[400px] h-[400px] absolute top-[20%] right-[-8%] opacity-[0.06]"></div>

      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[10px] font-semibold tracking-widest mb-4">
            ABOUT ME
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Tentang <span className="text-gradient">Saya</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto text-sm">
            Developer yang terus berkembang — memadukan logika teknis dengan kreativitas visual.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          
          {/* Left: Career Timeline */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-text-primary mb-8 flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center shadow-[0_2px_8px_rgba(167,139,250,0.1)]" style={{ transform: 'perspective(150px) rotateX(4deg)' }}>
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              Perjalanan Karir
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent origin-top"
              />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                    className="flex gap-5 group"
                  >
                    {/* Dot */}
                    <div className="relative flex-shrink-0 mt-1.5">
                      <div className="w-[15px] h-[15px] rounded-full border-2 border-accent/30 bg-bg-primary group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(167,139,250,0.3)] transition-all duration-500 flex items-center justify-center">
                        <div className="w-[5px] h-[5px] rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300"></div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <span className="text-[10px] text-accent font-bold tracking-widest">{item.year}</span>
                      <h4 className="text-sm font-bold text-text-primary mt-0.5 group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Core Values */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-text-primary mb-8 flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center shadow-[0_2px_8px_rgba(167,139,250,0.1)]" style={{ transform: 'perspective(150px) rotateX(4deg)' }}>
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
              </div>
              Nilai & Prinsip
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="glass-card-interactive p-5 rounded-xl group cursor-default"
                >
                  <div className="text-lg mb-3 w-9 h-9 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.3)]" style={{ transform: 'perspective(120px) rotateY(-3deg)' }}>
                    {val.icon}
                  </div>
                  <h4 className="text-sm font-bold text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">{val.title}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 glass-card p-5 rounded-xl"
            >
              <p className="text-xs text-text-muted leading-relaxed">
                <span className="text-text-primary font-medium">Berbasis di Indonesia</span> — berpengalaman remote collaboration dengan tim global. Fokus utama pada <span className="text-accent">React ecosystem</span>, <span className="text-accent">Machine Learning</span>, dan <span className="text-accent">Web3</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
