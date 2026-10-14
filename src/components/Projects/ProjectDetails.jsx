import React, { useEffect } from 'react';
import { X, ArrowUpRight, Github } from 'lucide-react';

export default function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="card modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="icon-btn modal-close">
          <X size={16} />
        </button>

        <span className="tag">{project.category}</span>
        <h2>{project.title}</h2>

        <div className="modal-media">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-block">
          <h3>Overview</h3>
          <p>{project.description}</p>
        </div>

        {project.features && (
          <div className="modal-block">
            <h3>Highlights</h3>
            <ul className="feature-list">
              {project.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-block">
          <h3>Stack</h3>
          <div className="tag-row">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
            Visit live site <ArrowUpRight size={16} />
          </a>
          {project.github && project.github !== 'https://github.com' && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Github size={16} /> Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
