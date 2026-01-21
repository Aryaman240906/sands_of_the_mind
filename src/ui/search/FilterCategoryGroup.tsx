// search/FilterCategoryGroup.tsx
// Grouped filters without taxonomy or importance hierarchy.
// Organizes chips and selectors into clear, labeled shelves.

import React from 'react';

interface FilterCategoryGroupProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export default function FilterCategoryGroup({
  children,
  label,
  className = '',
}: FilterCategoryGroupProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`
        w-full
        space-y-3
        ${className}
      `}
    >
      {label && (
        <h3 className="
          font-mono text-[10px] uppercase tracking-[0.2em] 
          text-stone-400 font-medium
          pointer-events-none select-none
        ">
          {label}
        </h3>
      )}
      
      {/* Container for the actual filter controls (Chips, DatePickers).
        Defaults to horizontal flow (flex-wrap) for tags/chips.
      */}
      <div className="flex flex-wrap gap-2 items-center">
        {children}
      </div>
    </div>
  );
}