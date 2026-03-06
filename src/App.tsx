import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <CustomCursor />
      
      <div className="min-h-screen bg-crypto-dark text-crypto-silver font-sans relative overflow-hidden cursor-none">
        
        {/* Sistem Partikel di Latar Belakang */}
        <ParticleBackground />

        {/* Efek Cahaya Kosmik Global */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-crypto-purple opacity-20 blur-[150px] rounded-full pointer-events-none z-0"></div>

        {/* MENGGUNAKAN NAVBAR DINAMIS */}
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}