import React, { useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { getTranslation, type Locale } from '../i18n';

type HeaderProps = {
  currentPage: string;
  onPageChange: (page: string) => void;
  lang: Locale;
  onLangChange: (lang: Locale) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
};

export function Header({
  currentPage,
  onPageChange,
  lang,
  theme,
  onThemeToggle,
}: HeaderProps) {
  const t = getTranslation(lang);
  const [open, setOpen] = useState(false);

  const pages = [
    { id: 'home', label: t.nav.home },
    { id: 'projects', label: t.nav.projects },
    { id: 'cv', label: t.nav.cv },
  ];

  const go = (page: string) => {
    onPageChange(page);
    setOpen(false);
  };

  return (
    <header className="masthead">
      <div className="wrap">
        <button type="button" className="wordmark" onClick={() => go('home')}>
          Martin Rojas
        </button>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Menu size={16} /> {t.nav.menu}
        </button>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className="nav-link"
              aria-current={currentPage === page.id ? 'page' : undefined}
              onClick={() => go(page.id)}
            >
              {page.label}
            </button>
          ))}
          <div className="controls">
            {/* <button
              type="button"
              className="flag-btn"
              title={current.label}
              aria-label={`Language: ${current.label}`}
              onClick={cycleLang}
            >
              {current.flag}
            </button> */}
            <button
              type="button"
              className="icon-btn"
              onClick={onThemeToggle}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
