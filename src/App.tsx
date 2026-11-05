import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { CV } from './components/CV';
import type { Locale } from './i18n';

type Theme = 'light' | 'dark';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState<Locale>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [openProject, setOpenProject] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const openProjectFromHome = (id: string) => {
    setOpenProject(id);
    setCurrentPage('projects');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'projects':
        return (
          <Projects
            lang={lang}
            openProject={openProject}
            onConsumeOpenProject={() => setOpenProject(null)}
          />
        );
      case 'cv':
        return <CV lang={lang} />;
      default:
        return <Home lang={lang} onOpenProject={openProjectFromHome} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Header
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        lang={lang}
        onLangChange={setLang}
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      />
      <main className="page flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
