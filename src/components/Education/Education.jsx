import React from 'react';
import { educationData, certificationsData } from '../../data/education';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text-cyan">Certifications</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          
          {/* Education Column */}
          <div>
            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
              <GraduationCap color="var(--neon-cyan)" size={20} />
              <span>Academic Education</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 700 }}>
                      {edu.degree}
                    </h4>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' }}>
                      <Calendar size={12} /> {edu.period}
                    </span>
                  </div>

                  <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 500, marginBottom: '0.75rem' }}>
                    {edu.institution}
                  </div>

                  {edu.grade && (
                    <span style={{ display: 'inline-block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', padding: '0.2rem 0.6rem', background: 'rgba(0, 245, 212, 0.08)', border: '1px solid rgba(0, 245, 212, 0.2)', borderRadius: '4px', color: 'var(--neon-cyan)' }}>
                      {edu.grade}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
              <Award color="var(--neon-purple)" size={20} />
              <span>Industry Certifications</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {cert.title}
                      </h4>
                      <div style={{ color: 'var(--neon-purple)', fontSize: '0.85rem', marginTop: '0.2rem', fontWeight: 500 }}>
                        {cert.issuer}
                      </div>
                    </div>
                    {cert.year && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.5rem',
                          background: 'rgba(157, 78, 221, 0.12)',
                          border: '1px solid rgba(157, 78, 221, 0.25)',
                          borderRadius: '4px',
                          color: '#d8b4fe',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {cert.year}
                      </span>
                    )}
                  </div>

                  {cert.skills && cert.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {cert.skills.map((s, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.12rem 0.45rem',
                            borderRadius: '4px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: 'var(--text-muted)'
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
