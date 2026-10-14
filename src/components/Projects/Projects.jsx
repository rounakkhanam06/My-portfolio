import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span>03</span>Selected work</div>
          <h2 className="section-title">Products I've built and shipped.</h2>
          <p className="section-subtitle">
            Live client platforms spanning enterprise CRM, multi-vendor marketplaces, e-commerce and quick commerce.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setActiveProject} />
          ))}
        </div>

        {activeProject && (
          <ProjectDetails project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </div>
    </section>
  );
}
