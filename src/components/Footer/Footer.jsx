import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Rounak Khanam</div>

        <nav className="footer-links" aria-label="Footer">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <div className="socials">
          <a className="icon-btn" href="https://github.com/rounakkhanam06" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a className="icon-btn" href="https://www.linkedin.com/in/rounak-khanam-20ab58284" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <button className="icon-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
