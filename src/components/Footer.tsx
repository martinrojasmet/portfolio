import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span className="mail-line">
          <Mail /> martin.rojas.career at gmail.com
        </span>
        <div className="cols">
          <a
            className="chip-github"
            href="https://github.com/martinrojasmet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            className="chip-linkedin"
            href="https://linkedin.com/in/martinroan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
