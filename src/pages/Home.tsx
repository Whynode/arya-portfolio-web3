import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import WorkProcess from '../components/WorkProcess';
import Portfolio from '../components/Portfolio';
import Certificates from '../components/Certificates'; // <-- 1. Impor Modul Sertifikat
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Divider from '../components/Divider';

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <TechStack />
      <Divider />
      <WorkProcess />
      <Divider />
      <Portfolio />
      <Divider />
      <Certificates /> {/* <-- 2. Tampilkan di sini */}
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}