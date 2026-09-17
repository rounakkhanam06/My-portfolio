import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import Hero3DObject from '../ThreeCanvas/Hero3DObject';

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5.5rem', position: 'relative' }}>
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Hero Content */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                background: 'rgba(0, 245, 212, 0.08)',
                border: '1px solid rgba(0, 245, 212, 0.25)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.25rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--neon-cyan)',
                  boxShadow: '0 0 10px var(--neon-cyan)'
                }}
                className="animate-pulse-glow"
              />
              <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-cyan)', fontWeight: 600 }}>
                AVAILABLE FOR ROLES & CONTRACTS
              </span>
            </div>

            {/* Greeting & Headline */}
            <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
              Hi, I'm <span className="gradient-text-mern">Rounak Khanam</span>
              <br />
              <span style={{ color: 'var(--text-main)', fontSize: 'clamp(1.7rem, 3.8vw, 3rem)', fontWeight: 800 }}>
                MERN Stack Developer
              </span>
            </h1>

            {/* Sub-headline */}
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '560px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Full Stack MERN Developer with hands-on experience building and maintaining real-world web applications using React, Node.js, Express.js, and MongoDB.
              <br style={{ marginBottom: '0.4rem', display: 'block', content: '""' }} />
              Passionate about creating scalable, user-focused solutions with clean code, modern technologies, and seamless user experiences.
            </p>

            {/* CTA Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '1.75rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Tech Stack Pills Banner */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CORE STACK:</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {[
                  { name: 'MongoDB', color: '#47A248' },
                  { name: 'Express', color: '#FFFFFF' },
                  { name: 'React', color: '#61DAFB' },
                  { name: 'Node.js', color: '#5FA04E' },
                  { name: 'Three.js', color: '#00F5D4' }
                ].map((tech) => (
                  <span
                    key={tech.name}
                    style={{
                      padding: '0.2rem 0.55rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: tech.color,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    ● {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '1.25rem' }}>
              <a
                href="https://github.com/rounakkhanam06"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rounak-khanam-20ab58284"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:raunakkhanam0207@gmail.com"
                aria-label="Email Contact"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right 3D Interactive Visual Canvas */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              className="hero-3d-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                height: '360px',
                background: 'radial-gradient(circle, rgba(157, 78, 221, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Hero3DObject />
            </div>

            {/* Interactive Terminal Snippet Card */}
            <div
              className="glass-panel hero-terminal-card"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '1.25rem',
                marginTop: '-1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                overflowX: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginLeft: 'auto' }}>rounak@mern:~$</span>
              </div>
              <div style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--neon-cyan)' }}>const</span> developer = &#123;
                <div style={{ paddingLeft: '1rem' }}>
                  name: <span style={{ color: '#f72585' }}>'Rounak Khanam'</span>,
                  stack: [<span style={{ color: '#00f5d4' }}>'MongoDB'</span>, <span style={{ color: '#00f5d4' }}>'Express'</span>, <span style={{ color: '#00f5d4' }}>'React'</span>, <span style={{ color: '#00f5d4' }}>'Node'</span>],
                  passion: <span style={{ color: '#ffd166' }}>'Building Scalable Full-Stack Applications'</span>,
                  status: <span style={{ color: '#06d6a0' }}>'Ready to Build 🚀'</span>
                &#125;;
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
