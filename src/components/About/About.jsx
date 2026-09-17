import React from 'react';
import { Code2, Server, Database, Sparkles, CheckCircle2, Zap, Award, Globe } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Zap size={22} color="var(--neon-cyan)" />,
      title: "Full-Stack Development",
      desc: "Building seamless applications by connecting modern React frontends with robust Node.js and Express.js backends."
    },
    {
      icon: <Database size={22} color="#00f5d4" />,
      title: "API & Backend Systems",
      desc: "Developing scalable REST APIs, managing database structures, and integrating robust authentication."
    },
    {
      icon: <Server size={22} color="var(--neon-purple)" />,
      title: "Third-Party Integrations",
      desc: "Seamlessly connecting external services like Razorpay and Shiprocket to enhance application functionality."
    },
    {
      icon: <Globe size={22} color="#ffb703" />,
      title: "Production Deployment",
      desc: "Deploying and managing applications on production servers to ensure high availability and performance."
    }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>WHO I AM</span>
          </div>
          <h2 className="section-title">
            Building Real-World Web Applications with <span className="gradient-text-cyan">MERN</span>
          </h2>
          <p className="section-subtitle">
            I am a Full-Stack MERN Developer focused on building reliable, scalable, and user-friendly web applications using React, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        {/* Main Grid: Bio + Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          
          {/* Bio Story Card */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Turning ideas into functional, production-ready applications
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I work across the complete development lifecycle—from building responsive React interfaces and developing REST APIs to designing database structures, implementing authentication, integrating third-party services, and deploying applications to production servers.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              I enjoy solving real-world problems through clean and maintainable code, whether it’s building e-commerce and quick-commerce platforms, developing admin dashboards, managing order and delivery workflows, or integrating services such as Razorpay and Shiprocket.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                "React & Redux",
                "Node.js & Express",
                "MongoDB & Mongoose",
                "Deployment & Server Management"
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--neon-cyan)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pillars Highlight Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {highlights.map((h, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'transform 0.25s ease'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {h.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem' }}>{h.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
