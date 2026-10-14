import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-lines">
          <p>I build web applications.</p>
          <p>From the interface to the server.</p>
          <p>And I make sure they ship.</p>
        </div>

        <h1>Rounak Khanam</h1>

        <p className="hero-kicker">
          Full-Stack MERN Developer&nbsp;·&nbsp;React&nbsp;·&nbsp;Node.js&nbsp;·&nbsp;MongoDB
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
          <div className="socials">
            <a className="icon-btn" href="https://github.com/rounakkhanam06" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/rounak-khanam-20ab58284" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a className="icon-btn" href="mailto:raunakkhanam0207@gmail.com" aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
