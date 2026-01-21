// archive/ChronologicalEntryList.tsx
// Display entries across time without ranking or recency emphasis.
// A vertical stream that breathes, treating time as a river, not a spreadsheet.

import React from 'react';

interface ChronologicalEntryListProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChronologicalEntryList({
  children,
  className = '',
}: ChronologicalEntryListProps) {
  return (
    <div
      role="feed"
      aria-label="Chronological archive"
      className={`
        /* 1. Layout & Flow */
        flex flex-col
        w-full
        
        /* 2. Vertical Rhythm (The "Breath" between moments) */
        gap-16 md:gap-24
        
        /* 3. Bottom padding to allow scrolling past the last item */
        pb-32
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}