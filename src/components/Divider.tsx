import React from 'react';
import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <div className="w-full flex justify-center items-center py-12 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-3/4 md:w-1/2 h-px bg-gradient-to-r from-transparent via-crypto-purple to-transparent relative"
      >
        {/* Titik Inti (Node) Bercahaya di Tengah Garis */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-crypto-purple shadow-[0_0_20px_rgba(124,58,237,1)]">
          <div className="absolute inset-0 bg-white rounded-full opacity-50 blur-[1px]"></div>
        </div>
      </motion.div>
    </div>
  );
}