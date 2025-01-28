import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-fourth/30 mt-auto m-9 mb-0">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-fourth/70 ">

          <div className="flex items-center gap-2">
            <Mail size={18} />
              martinrojasa at outlook.com
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/martinrojasmet/" className="hover:text-github" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/martinroan/" className="hover:text-linkedin" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}