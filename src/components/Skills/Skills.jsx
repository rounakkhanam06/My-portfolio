import React, { useState } from 'react';
import { skillsList, skillsCategories } from '../../data/skills';
import SkillIcon from './SkillIcons';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1rem',
              background: 'rgba(0, 245, 212, 0.08)',
              border: '1px solid rgba(0, 245, 212, 0.25)',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--neon-cyan)',
              fontWeight: 600
            }}
          >
            <Sparkles size={14} />
            <span>CORE STACK & FRAMEWORKS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1rem',
              letterSpacing: '-0.5px'
            }}
          >
            Technical <span className="gradient-text-cyan">Skills</span>
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.02rem',
              maxWidth: '860px',
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            Writing code using modern technologies :{' '}
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>
              React.js, Node.js, Express.js, MongoDB, JavaScript, Java, HTML5, CSS3, Tailwind CSS, Redis, Next.js, Nginx, PM2, VPS / Linux & Git.
            </span>
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            margin: '2rem 0 3rem'
          }}
        >
          {skillsCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: isActive ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(0, 245, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? 'var(--neon-cyan)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid - Inspired by User Reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              style={{
                background: 'linear-gradient(145deg, #0a1329 0%, #060b18 100%)',
                border: '1px solid rgba(33, 66, 133, 0.35)',
                borderRadius: '14px',
                padding: '1.5rem 1.25rem 1.25rem',
                minHeight: '145px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                cursor: 'default',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = skill.color;
                e.currentTarget.style.boxShadow = `0 14px 30px rgba(0, 0, 0, 0.5), 0 0 20px ${skill.color}35`;
                const label = e.currentTarget.querySelector('.skill-label');
                if (label) label.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(33, 66, 133, 0.35)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.35)';
                const label = e.currentTarget.querySelector('.skill-label');
                if (label) label.style.color = '#94a3b8';
              }}
            >
              {/* Subtle Corner Glow on Hover */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '60px',
                  height: '60px',
                  background: skill.color,
                  opacity: 0.08,
                  filter: 'blur(20px)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />

              {/* Icon Container */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.25rem 0',
                  minHeight: '62px'
                }}
              >
                <SkillIcon name={skill.name} size={50} />
              </div>

              {/* Skill Name Label */}
              <div
                className="skill-label"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: '#94a3b8',
                  letterSpacing: '0.75px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                  marginTop: '0.75rem'
                }}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
