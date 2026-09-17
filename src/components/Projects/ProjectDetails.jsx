import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Server, Database } from 'lucide-react';

export default function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0c101c',
          border: '1px solid rgba(0, 245, 212, 0.3)',
          borderRadius: 'var(--radius-xl)',
          position: 'relative',
          padding: '2.5rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 245, 212, 0.15)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Category & Title */}
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: 'rgba(0, 245, 212, 0.1)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--neon-cyan)',
            marginBottom: '0.75rem'
          }}
        >
          {project.category}
        </div>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', lineHeight: 1.25 }}>
          {project.title}
        </h2>

        {/* Image Preview */}
        <div
          style={{
            width: '100%',
            height: '260px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '1.75rem'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Overview */}
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Overview</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
          {project.description}
        </p>

        {/* Architectural Highlights */}
        {project.features && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Engineering & Architecture Highlights
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--neon-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack List */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Technologies Leveraged</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((t, i) => (
              <span
                key={i}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--text-main)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '160px' }}
          >
            <ExternalLink size={17} />
            <span>Launch Live Preview</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1, minWidth: '160px' }}
          >
            <Github size={17} />
            <span>View Source Code</span>
          </a>
        </div>

      </div>
    </div>
  );
}
