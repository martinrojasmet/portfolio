import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';

function App() {
  const [currentPage, setCurrentPage] = useState('Projects');

  const renderContent = () => {
    switch (currentPage) {
      case 'Projects':
        return <Projects />;
      case 'About Me':
        return <AboutMe />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="min-h-screen bg-bg_primary flex flex-col">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="container mx-auto px-4 py-8 max-w-7xl flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;