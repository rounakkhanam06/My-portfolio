import React, { useState } from 'react';
import { skillsList, skillsCategories } from '../../data/skills';
import SkillIcon from './SkillIcons';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span>02</span>Skills</div>
          <h2 className="section-title">Tools I work with every day.</h2>
          <p className="section-subtitle">
            A practical stack for building, scaling and shipping modern web applications.
          </p>
        </div>

        <div className="filter-row">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`chip ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="card card-hover skill">
              <div className="skill-icon">
                <SkillIcon name={skill.name} size={22} />
              </div>
              <span className="skill-name">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
