import React from 'react';

type HeaderProps = {
  currentPage: string;
  onPageChange: (page: string) => void;
};

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const pages = ['Projects', 'About Me'];

  return (
    <header className="text-[#292929] py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">Martin Rojas</h1>
          </div>
          <nav className="flex gap-4">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'text-black font-bold underline decoration-4 decoration-secondary underline-offset-4'
                    : 'text-black/50 hover:text-black'
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