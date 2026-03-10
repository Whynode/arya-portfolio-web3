import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// @ts-ignore
import certPlaceholder from '../assets/images/cer.jpg';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

const certificates: Certificate[] = [
  { id: 1, title: "Machine Learning Foundation", issuer: "DBS Foundation", date: "2025", category: "AI & ML", image: certPlaceholder, description: "Penguasaan dasar hingga lanjutan Machine Learning, mencakup data preprocessing, model training, dan deployment." },
  { id: 2, title: "Full-Stack Web Development", issuer: "DBS Foundation", date: "2025", category: "FULL-STACK", image: certPlaceholder, description: "Pengembangan aplikasi web end-to-end menggunakan MERN Stack (MongoDB, Express, React, Node.js)." },
  { id: 3, title: "Google UI/UX Professional", issuer: "Google Career", date: "2024", category: "UI/UX", image: certPlaceholder, description: "Spesialisasi dalam user research, prototyping high-fidelity di Figma, dan usability testing." },
  { id: 4, title: "Blockchain Architect", issuer: "Web3 Foundation", date: "2025", category: "BLOCKCHAIN", image: certPlaceholder, description: "Merancang Smart Contract dan memahami konsensus jaringan terdesentralisasi." },
  { id: 5, title: "Cyber Security Specialist", issuer: "Cisco Networking", date: "2024", category: "SECURITY", image: certPlaceholder, description: "Mitigasi serangan siber, enkripsi data, dan implementasi protokol keamanan jaringan." },
  { id: 6, title: "TensorFlow AI Developer", issuer: "DeepLearning.AI", date: "2025", category: "AI", image: certPlaceholder, description: "Membangun Deep Neural Networks menggunakan TensorFlow untuk Computer Vision." },
  { id: 7, title: "React & TypeScript", issuer: "Meta (Facebook)", date: "2025", category: "FRONTEND", image: certPlaceholder, description: "Pengembangan komponen React modular dan scalable menggunakan TypeScript." },
  { id: 8, title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024", category: "CLOUD", image: certPlaceholder, description: "Arsitektur dasar AWS, keamanan cloud, dan manajemen resource infrastruktur global." }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section id="certificates" className="py-20 lg:py-28 relative z-10">
      <div className="glow-blob glow-blob-blue w-[400px] h-[400px] absolute top-[30%] right-[-5%] opacity-[0.06]"></div>

      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[10px] font-semibold tracking-widest mb-4">
            CERTIFICATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Galeri <span className="text-gradient">Sertifikasi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="group glass-card-interactive rounded-2xl cursor-pointer overflow-hidden"
              data-hover
            >
              <div className="w-full aspect-[1080/764] overflow-hidden relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-75 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60"></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-bg-primary/70 backdrop-blur-xl text-[9px] font-bold text-accent border border-accent/20 tracking-widest">
                  {cert.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center text-[11px] text-text-muted border-t border-glass-border pt-3">
                  <span>{cert.issuer}</span>
                  <span className="text-accent/50">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-bg-primary/90 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-card border border-glass-border rounded-3xl p-6 max-w-2xl w-full shadow-card relative overflow-hidden flex flex-col md:flex-row gap-6"
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 z-50 text-text-muted hover:text-text-primary bg-bg-elevated p-2 rounded-full transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="w-full md:w-1/2 aspect-[1080/764] rounded-2xl overflow-hidden border border-glass-border">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-3 inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-widest w-fit">
                  {selectedCert.category}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2 leading-tight">{selectedCert.title}</h3>
                <p className="text-accent/60 font-medium mb-4 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                <div className="bg-bg-primary/50 p-4 rounded-xl border border-glass-border">
                  <p className="text-text-muted leading-relaxed text-sm">{selectedCert.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}