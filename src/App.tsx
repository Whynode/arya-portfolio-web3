import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

// Animated beam lines background
function BeamLines() {
  const beams = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    left: `${(i / 16) * 100 + Math.random() * 5}%`,
    duration: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 10}s`,
    height: `${80 + Math.random() * 100}px`,
    opacity: 0.15 + Math.random() * 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="beam-line"
          style={{
            left: beam.left,
            height: beam.height,
            '--duration': beam.duration,
            '--delay': beam.delay,
            opacity: beam.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

// Cinematic loading intro
function LoadingSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-[#000000] flex items-center justify-center overflow-hidden"
    >
      {/* Background depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05)_0%,transparent_100%)]" />

      {/* High-speed vertical scan line */}
      <motion.div
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent blur-[1px]"
      />

      {/* Main content */}
      <div className="relative z-10">
        <div className="relative">
          {/* Decorative circle glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.5, 0.2], scale: [0.8, 1.1, 1] }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute inset-0 -m-8 border border-accent/20 rounded-full blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.5em', filter: 'blur(10px)' }}
            animate={{ opacity: 1, letterSpacing: '-0.02em', filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-white relative">
              ARYA<span className="text-accent">.</span>
              
              {/* Glitch layers */}
              <motion.span 
                animate={{ opacity: [0, 1, 0], x: [-2, 2, -2] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 text-accent/30 translate-x-[2px] blur-[1px] select-none pointer-events-none"
              >
                ARYA.
              </motion.span>
              <motion.span 
                animate={{ opacity: [0, 1, 0], x: [2, -2, 2] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3.1 }}
                className="absolute inset-0 text-blue-500/20 -translate-x-[2px] blur-[1px] select-none pointer-events-none"
              >
                ARYA.
              </motion.span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 overflow-hidden"
        >
          <p className="text-[10px] md:text-xs text-text-muted tracking-[0.5em] uppercase font-bold text-gradient">
            Merancang Realitas Digital
          </p>
          
          {/* Minimal progress line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-[1px] w-full bg-accent mt-4 origin-left opacity-40" 
          />
        </motion.div>
      </div>

      {/* Subtle digital noise / stars */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </motion.div>
  );
}

// Page transition wrapper
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/project/:id" element={
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDetail />
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Blog />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && <LoadingSkeleton />}
      </AnimatePresence>

      <div className="min-h-screen bg-bg-primary text-text-muted relative overflow-hidden">
        
        {/* Dot grid pattern */}
        <div className="fixed inset-0 dot-grid pointer-events-none z-0"></div>

        {/* Animated beam lines */}
        <BeamLines />

        {/* Floating glow blobs */}
        <div className="glow-blob glow-blob-purple w-[500px] h-[500px] fixed top-[10%] left-[-10%] z-0" style={{ animation: 'float-slow 20s ease-in-out infinite' }}></div>
        <div className="glow-blob glow-blob-blue w-[400px] h-[400px] fixed bottom-[10%] right-[-5%] z-0" style={{ animation: 'float-reverse 25s ease-in-out infinite' }}></div>
        <div className="glow-blob glow-blob-purple w-[300px] h-[300px] fixed top-[60%] left-[40%] z-0 opacity-[0.06]" style={{ animation: 'float 18s ease-in-out infinite' }}></div>

        {/* Scroll progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-blue z-[60] origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <Navbar />

        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}