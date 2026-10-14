import React from 'react';
import { Layers, Database, Plug, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Layers,
    title: 'Full-stack development',
    desc: 'Connecting modern React frontends with robust Node.js and Express backends.'
  },
  {
    icon: Database,
    title: 'APIs & backend systems',
    desc: 'Scalable REST APIs, sound database design and secure authentication.'
  },
  {
    icon: Plug,
    title: 'Third-party integrations',
    desc: 'Payments, shipping and external services such as Razorpay and Shiprocket.'
  },
  {
    icon: Rocket,
    title: 'Production deployment',
    desc: 'VPS setup, PM2, Nginx and keeping applications fast and available.'
  }
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span>01</span>About</div>
          <h2 className="section-title">
            Turning ideas into <span className="serif">production-ready</span> applications.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I'm a <strong>Full-Stack MERN Developer</strong> focused on building reliable, scalable and
              user-friendly web applications.
            </p>
            <p>
              I work across the complete lifecycle — responsive React interfaces, REST APIs, database
              design, authentication, third-party integrations and deployment to production servers.
            </p>
            <p>
              I enjoy solving real problems with clean, maintainable code: e-commerce and quick-commerce
              platforms, admin dashboards, and order and delivery workflows.
            </p>
          </div>

          <div className="pillars reveal">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="pillar">
                <Icon size={20} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
