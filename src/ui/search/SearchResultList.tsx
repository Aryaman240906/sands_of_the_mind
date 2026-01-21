// search/SearchResultList.tsx
// Calm list of remembered entries without ranking.
// Gives each result enough space to be read as a distinct thought.

import React from 'react';

interface SearchResultListProps {
  children: React.ReactNode;
  className?: string;
}

export default function SearchResultList({
  children,
  className = '',
}: SearchResultListProps) {
  return (
    <div
      role="list"
      aria-label="Search results"
      className={`
        /* 1. Layout & Spacing */
        flex flex-col 
        gap-12 md:gap-16
        w-full
        pb-24 /* Bottom safe zone for scrolling */
        
        /* 2. Entrance Animation */
        animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}