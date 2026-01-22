// profile/ThemeSelectionGrid.tsx
// Calm grid for atmosphere selection without ranking.
// Presents themes as "environments" rather than "skins".

import React from 'react';

interface ThemeSelectionGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function ThemeSelectionGrid({
  children,
  className = '',
}: ThemeSelectionGridProps) {
  return (
    <fieldset
      className={`space-y-6 ${className}`}
      role="radiogroup"
      aria-label="Select interface atmosphere"
    >
      <div className="flex items-baseline justify-between">
        <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
          Atmosphere
        </legend>
        <span className="text-[10px] text-stone-300 font-sans hidden sm:inline-block">
          Select your quiet space
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {children}
      </div>
    </fieldset>
  );
}