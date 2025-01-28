import { Github } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundClip: ['text']
    },
    colors: {
      primary: "#ffffff",
      secondary: "#3172c0",
      third: "#757575",
      fourth: "#000000",
      primary_text: "#292929",
      secondary_text: "#757575",
      third_text: "#ffffff",
      title_text: "#000000",
      bg_primary: "#eef2f8",
      linkedin: "#0c64c4",
      github: "#842791",
      github2: "#4c277a"
    }
  },
  plugins: [],
};
