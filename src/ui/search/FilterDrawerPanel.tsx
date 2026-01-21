// search/FilterDrawerPanel.tsx
// Optional narrowing container hidden by default.
// Uses CSS Grid mechanics for perfectly smooth height animation (0 -> Auto).

import React from 'react';

interface FilterDrawerPanelProps {
  children: React.ReactNode;
  open?: boolean;
  className?: string;
}

export default function FilterDrawerPanel({
  children,
  open = false,
  className = '',
}: FilterDrawerPanelProps) {
  return (
    <aside
      role="region"
      aria-label="Search filters"
      aria-hidden={!open}
      className={`
        /* 1. The Grid Trick for Height Animation */
        grid
        transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.2,0,0,1)]
        ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        
        /* 2. Visual Structure */
        w-full
        border-b border-stone-100/50
        
        ${className}
      `}
    >
      <div className="overflow-hidden min-h-0">
        <div className="py-8 space-y-8">
          {children}
        </div>
      </div>
    </aside>
  );
}