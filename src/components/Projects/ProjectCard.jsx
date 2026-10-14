import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const [name, ...rest] = project.title.split(' - ');
  const subtitle = rest.join(' - ');

  return (
    <article
      className="card card-hover project"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className="project-media">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>

      <div className="project-body">
        <div className="project-top">
          <div>
            <h3 className="project-title">{name}</h3>
            {subtitle && <div className="project-sub">{subtitle}</div>}
          </div>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label={`Open ${name} live site`}
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="project-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
