import React from 'react';
import { ExternalLink, Github, Sparkles, Layers, Info } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div
      className="glass-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--neon-cyan)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}
    >
      {/* Project Image Preview Header */}
      <div
        style={{
          position: 'relative',
          height: '165px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#121826'
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          loading="lazy"
        />
        {/* Category Overlay Pill */}
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            padding: '0.2rem 0.6rem',
            background: 'rgba(8, 9, 13, 0.75)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--neon-cyan)'
          }}
        >
          {project.category}
        </div>

        {project.featured && (
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              padding: '0.2rem 0.55rem',
              background: 'linear-gradient(135deg, rgba(247, 37, 133, 0.9), rgba(123, 44, 191, 0.9))',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            <Sparkles size={11} />
            <span>FEATURED</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3
          style={{
            fontSize: '1.15rem',
            marginBottom: '0.4rem',
            color: 'var(--text-main)',
            fontWeight: 700
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            lineHeight: 1.5,
            marginBottom: '0.75rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexGrow: 1
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.15rem 0.45rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                color: 'var(--text-main)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.65rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <button
            onClick={() => onSelect(project)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--neon-cyan)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0
            }}
          >
            <Info size={14} />
            <span>View Architecture</span>
          </button>

          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Github size={16} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              style={{
                color: 'var(--neon-cyan)',
                transition: 'transform 0.2s ease',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(2px, -2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
