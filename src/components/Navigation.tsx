import React from 'react';

type NavItemProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function NavItem({ label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-blue-100 text-blue-800'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
}

type NavigationProps = {
  currentPage: string;
  onPageChange: (page: string) => void;
};

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const pages = ['Projects', 'About Me'];

  return (
    <nav className="flex justify-center gap-4 mb-8">
      {pages.map((page) => (
        <NavItem
          key={page}
          label={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
        />
      ))}
    </nav>
  );
}