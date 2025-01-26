import React from 'react';

type HeaderProps = {
  currentPage: string;
  onPageChange: (page: string) => void;
};

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const pages = ['Projects', 'About Me'];

  return (
    <header className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Martin Rojas</h1>
          </div>
          <nav className="flex gap-4">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'text-white font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}