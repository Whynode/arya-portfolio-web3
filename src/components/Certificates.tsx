import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// IMPOR GAMBAR PLACEHOLDER SERTIFIKAT
import certPlaceholder from '../assets/images/cer.jpg';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: string;
  image: string;
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    { id: 1, title: "Machine Learning Foundation", issuer: "DBS Foundation", date: "2025", category: "AI & ML", image: certPlaceholder, description: "Penguasaan dasar hingga lanjutan Machine Learning, mencakup data preprocessing, model training, dan deployment." },
    { id: 2, title: "Full-Stack Web Development", issuer: "DBS Foundation", date: "2025", category: "FULL-STACK", image: certPlaceholder, description: "Pengembangan aplikasi web end-to-end menggunakan MERN Stack (MongoDB, Express, React, Node.js)." },
    { id: 3, title: "Google UI/UX Professional", issuer: "Google Career", date: "2024", category: "UI/UX DESIGN", image: certPlaceholder, description: "Spesialisasi dalam user research, prototyping high-fidelity di Figma, dan usability testing." },
    { id: 4, title: "Blockchain Architect", issuer: "Web3 Foundation", date: "2025", category: "BLOCKCHAIN", image: certPlaceholder, description: "Merancang Smart Contract dan memahami konsensus jaringan terdesentralisasi (Ethereum)." },
    { id: 5, title: "Cyber Security Specialist", issuer: "Cisco Networking", date: "2024", category: "SECURITY", image: certPlaceholder, description: "Mitigasi serangan siber, enkripsi data, dan implementasi protokol keamanan jaringan." },
    { id: 6, title: "TensorFlow AI Developer", issuer: "DeepLearning.AI", date: "2025", category: "ARTIFICIAL INTELLIGENCE", image: certPlaceholder, description: "Membangun Deep Neural Networks menggunakan library TensorFlow untuk Computer Vision." },
    { id: 7, title: "React & TypeScript", issuer: "Meta (Facebook)", date: "2025", category: "FRONTEND", image: certPlaceholder, description: "Pengembangan komponen React modular dan scalable menggunakan strict type checking TypeScript." },
    { id: 8, title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024", category: "CLOUD COMPUTING", image: certPlaceholder, description: "Arsitektur dasar AWS, keamanan cloud, dan manajemen resource infrastruktur global." }
  ];

  return (
    <section id="certificates" className="py-24 relative z-10 bg-crypto-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-crypto-purple/10 border border-crypto-purple/30 text-crypto-purple text-xs font-bold tracking-widest mb-6">
            PENCAPAIAN TEKNIS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400 drop-shadow-neon-purple">Sertifikasi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="group rounded-2xl bg-glass-bg border border-glass-border backdrop-blur-crypto hover:shadow-neon-purple hover:border-crypto-purple/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-[1080/764] overflow-hidden relative border-b border-glass-border">
                <div className="absolute inset-0 bg-crypto-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-crypto-dark/80 backdrop-blur-md text-[10px] font-mono text-crypto-purple border border-crypto-purple/40">
                  {cert.category}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-crypto-purple transition-colors duration-300">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center text-xs text-crypto-silver font-medium border-t border-glass-border pt-3 mt-1">
                  <span>{cert.issuer}</span>
                  <span className="bg-crypto-dark px-2 py-0.5 rounded text-gray-400">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-crypto-dark/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-glass-bg border border-crypto-purple/50 rounded-3xl p-6 max-w-2xl w-full shadow-[0_0_80px_rgba(124,58,237,0.3)] relative overflow-hidden flex flex-col md:flex-row gap-8"
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 z-50 text-crypto-silver hover:text-white bg-crypto-dark p-2 rounded-full transition-colors">
                ✕
              </button>
              
              <div className="w-full md:w-1/2 aspect-[1080/764] rounded-2xl overflow-hidden border border-glass-border shadow-inner-neon">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-crypto-purple/10 border border-crypto-purple/40 text-crypto-purple text-xs font-bold tracking-widest w-fit">
                  {selectedCert.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{selectedCert.title}</h3>
                <p className="text-crypto-purple font-medium mb-4 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                <div className="bg-crypto-dark/50 p-4 rounded-xl border border-glass-border">
                  <p className="text-crypto-silver leading-relaxed text-sm">
                    {selectedCert.description}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}