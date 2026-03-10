import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (isTouch) return;
    window.addEventListener('mousemove', handleMouseMove);

    // Detect hoverable elements
    const handleOver = (e) => {
      const target = e.target.closest('a, button, [data-hover]');
      setIsHovering(!!target);
    };
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [isTouch, handleMouseMove]);

  if (isTouch) return null;

  return (
    <>
      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mouse.x - (isHovering ? 20 : 4),
          y: mouse.y - (isHovering ? 20 : 4),
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
        style={{
          borderRadius: '50%',
          backgroundColor: isHovering ? 'rgba(167,139,250,0.15)' : '#a78bfa',
          border: isHovering ? '1px solid rgba(167,139,250,0.4)' : 'none',
        }}
      />
      
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border border-accent/10"
        animate={{
          x: mouse.x - 20,
          y: mouse.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0 : 0.5,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />
    </>
  );
}