import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mengintai pergerakan kursor pengguna secara real-time
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* INTI KURSOR: Titik Neon Ungu yang sangat responsif */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-crypto-purple rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(124,58,237,0.9)]"
        animate={{ 
          x: mousePosition.x - 6, // Dikurangi setengah ukuran agar posisinya tepat di ujung panah
          y: mousePosition.y - 6 
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.05 }}
      />
      
      {/* AURA/CINCIN PARALLAX: Cincin luar yang mengikuti dengan sedikit delay (keterlambatan) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-crypto-purple/50 rounded-full pointer-events-none z-[9998]"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20 
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
      />
    </>
  );
}