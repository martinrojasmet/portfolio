import React from 'react';
import { techColors } from '../techColors';

function textColorFor(hex: string): string {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.55 ? '#111A2B' : '#FFFFFF';
}

export function TechChip({ label }: { label: string }) {
  const color = techColors[label] ?? '#6A7283';
  return (
    <span
      className="tech-chip"
      style={{ ['--chip-c' as string]: color, color: textColorFor(color) }}
    >
      {label}
    </span>
  );
}
