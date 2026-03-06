import React from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  // Menghasilkan 25 titik partikel dengan ukuran, posisi, dan durasi acak
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // Ukuran antara 2px hingga 6px
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 15, // Durasi gerak antara 15s hingga 25s
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-crypto-purple rounded-full shadow-[0_0_10px_rgba(124,58,237,0.8)] opacity-30"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
          animate={{
            y: [0, -80, 0], // Bergerak vertikal secara halus
            x: [0, 40, 0],  // Bergerak horizontal secara halus
            opacity: [0.1, 0.5, 0.1] // Efek kelap-kelip (Pulse)
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay
          }}
        />
      ))}
    </div>
  );
}