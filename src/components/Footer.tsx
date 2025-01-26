import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">

          <div className="flex items-center gap-2">
            <Mail size={18} />
              martinrojasa at outlook.com
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/martinrojasmet/" className="hover:text-purple-600" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/martinroan/" className="hover:text-blue-600" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}