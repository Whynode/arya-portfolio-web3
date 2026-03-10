import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const processes = [
  {
    id: '01',
    title: 'Riset Mendalam',
    description: 'Menganalisis kebutuhan ekosistem, target pengguna, dan tren teknologi terkini untuk membangun fondasi yang solid.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Arsitektur & Analisis',
    description: 'Merancang alur logika dan struktur data presisi sebelum masuk ke tahap visualisasi antarmuka.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Desain UI/UX',
    description: 'Menciptakan antarmuka pengguna yang intuitif, berfokus pada pengalaman interaksi yang mulus.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Integrasi & Peluncuran',
    description: 'Mengeksekusi kode performa tinggi dan meluncurkan produk digital yang responsif dan aman.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  }
];

export default function WorkProcess() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 relative z-10">
      <div className="glow-blob glow-blob-blue w-[400px] h-[400px] absolute bottom-[10%] left-[-5%] opacity-[0.08]"></div>

      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[10px] font-semibold tracking-widest mb-4">
            WORKFLOW
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Proses <span className="text-gradient">Kerja</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            Metodologi sistematis untuk mengubah konsep menjadi realitas digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Animated connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[1px] overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-r from-accent/30 via-accent/15 to-accent/30 origin-left"
            />
          </div>
          
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="glass-card-interactive p-7 rounded-2xl group relative"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Step number with glow */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-[0_6px_16px_rgba(167,139,250,0.1),inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:shadow-[0_8px_24px_rgba(167,139,250,0.15)] transition-shadow duration-500" style={{ transform: 'perspective(200px) rotateX(5deg) rotateY(-3deg)' }}>
                  {process.icon}
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                  className="text-4xl font-black text-accent/10 group-hover:text-accent/20 transition-colors duration-500"
                >
                  {process.id}
                </motion.span>
              </div>

              <h3 className="text-base font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {process.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {process.description}
              </p>

              {/* Animated bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-accent to-accent-blue origin-left rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}