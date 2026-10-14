import React from 'react';
import { educationData, certificationsData } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span>05</span>Education</div>
          <h2 className="section-title">Background & certifications.</h2>
        </div>

        <div className="edu-grid">
          <div className="edu-col reveal">
            <h3>Education</h3>
            {educationData.map((edu) => (
              <div key={edu.degree} className="edu-item">
                <div className="edu-row">
                  <h4>{edu.degree}</h4>
                  <span className="edu-date">{edu.period}</span>
                </div>
                <div className="edu-sub">{edu.institution}</div>
                {edu.grade && <div className="edu-grade">{edu.grade}</div>}
              </div>
            ))}
          </div>

          <div className="edu-col reveal">
            <h3>Certifications</h3>
            {certificationsData.map((cert) => (
              <div key={cert.title} className="edu-item">
                <div className="edu-row">
                  <h4>{cert.title}</h4>
                  {cert.year && <span className="edu-date">{cert.year}</span>}
                </div>
                <div className="edu-sub">{cert.issuer}</div>
                {cert.skills?.length > 0 && (
                  <div className="tag-row" style={{ marginTop: '0.75rem' }}>
                    {cert.skills.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
