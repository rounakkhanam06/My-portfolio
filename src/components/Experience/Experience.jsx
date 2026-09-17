import React from 'react';
import { experienceData } from '../../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>CAREER MILESTONES</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text-purple">Experience</span>
          </h2>
          <p className="section-subtitle">
            A timeline of building production software, architecting scalable services, and collaborating with cross-functional engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Connecting Neon Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--neon-cyan) 0%, var(--neon-purple) 50%, var(--neon-pink) 100%)',
              opacity: 0.4
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experienceData.map((exp, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '55px'
                }}
              >
                {/* Glowing Node Dot */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '11px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#08090d',
                    border: '3px solid var(--neon-cyan)',
                    boxShadow: '0 0 12px var(--neon-cyan)',
                    zIndex: 2
                  }}
                />

                {/* Timeline Glass Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '1.35rem',
                    transition: 'transform 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(6px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
                >
                  {/* Top Bar */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: 700 }}>
                        {exp.role}
                      </h3>
                      <div style={{ color: 'var(--neon-cyan)', fontWeight: 600, fontSize: '1.05rem', marginTop: '0.2rem' }}>
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: 'var(--neon-cyan)',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              transition: 'opacity 0.2s ease'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                          >
                            <span>{exp.company}</span>
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {exp.achievements.map((ach, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <ChevronRight size={16} color="var(--neon-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'var(--text-main)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
