import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Background3D from './components/ThreeCanvas/Background3D';

export default function App() {
  return (
    <div className="portfolio-root" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 3D Dynamic Interactive Particle & Geometry Background */}
      <Background3D />

      {/* Fixed Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
