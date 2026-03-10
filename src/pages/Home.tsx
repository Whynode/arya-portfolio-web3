import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import WorkProcess from '../components/WorkProcess';
import Portfolio from '../components/Portfolio';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Animated marquee ticker
function TechTicker() {
  const items = [
    'React', 'TypeScript', 'Next.js', 'Python', 'TensorFlow', 'Node.js', 
    'PostgreSQL', 'Figma', 'Tailwind CSS', 'Docker', 'Git', 'Web3.js',
    'React', 'TypeScript', 'Next.js', 'Python', 'TensorFlow', 'Node.js', 
    'PostgreSQL', 'Figma', 'Tailwind CSS', 'Docker', 'Git', 'Web3.js',
  ];

  return (
    <div className="relative py-5 overflow-hidden border-t border-b border-glass-border">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg-primary to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg-primary to-transparent"></div>
      
      <div className="flex animate-marquee whitespace-nowrap" style={{ '--marquee-duration': '35s' }}>
        {items.map((item, i) => (
          <span key={i} className="mx-6 text-text-dim text-[11px] font-medium tracking-[0.2em] uppercase flex items-center gap-3">
            {item}
            <span className="inline-block w-1 h-1 rounded-full bg-accent/25"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Animated section divider
function AnimatedDivider() {
  return (
    <div className="relative py-3 overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent relative">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-16 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }}
          animate={{ left: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TechTicker />
      <AboutMe />
      <AnimatedDivider />
      <TechStack />
      <AnimatedDivider />
      <WorkProcess />
      <AnimatedDivider />
      <Portfolio />
      <AnimatedDivider />
      <Certificates />
      <AnimatedDivider />
      <Contact />
      <Footer />
    </>
  );
}