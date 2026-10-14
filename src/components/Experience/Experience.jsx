import React from 'react';
import { experienceData } from '../../data/experience';
import { ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span>04</span>Experience</div>
          <h2 className="section-title">Where I've worked.</h2>
        </div>

        <div className="timeline">
          {experienceData.map((exp) => (
            <article key={exp.company} className="job reveal">
              <div className="job-when">
                <div>{exp.period}</div>
                <div>{exp.location}</div>
              </div>

              <div>
                <h3>{exp.role}</h3>
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="job-company">
                    {exp.company} <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <div className="job-company">{exp.company}</div>
                )}

                <p className="job-desc">{exp.description}</p>

                <ul>
                  {exp.achievements.map((ach) => (
                    <li key={ach}>{ach}</li>
                  ))}
                </ul>

                <div className="tag-row">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
