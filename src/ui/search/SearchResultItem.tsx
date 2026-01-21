// search/SearchResultItem.tsx
// Entry preview without relevance emphasis or metadata overload.
// Visualizes the result as an excerpt from a book.

import React from 'react';

interface SearchResultItemProps {
  children: React.ReactNode; // The text snippet (potentially with highlights)
  date: string;
  onClick?: () => void;
  className?: string;
}

export default function SearchResultItem({
  children,
  date,
  onClick,
  className = '',
}: SearchResultItemProps) {
  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      className={`
        group
        relative block w-full
        pt-6 
        /* Separator Line */
        border-t border-stone-200/40
        
        /* Interaction Styling */
        cursor-pointer
        outline-none
        transition-colors duration-300
        hover:border-stone-300/80
        focus-visible:border-stone-400
        
        ${className}
      `}
    >
      {/* Metadata Header */}
      <header className="mb-3 flex items-center gap-3">
        <time 
          className="
            font-mono text-[10px] uppercase tracking-wider 
            text-stone-400 group-hover:text-stone-500 
            transition-colors duration-300
          "
        >
          {date}
        </time>
        
        {/* Subtle Hover Indicator */}
        <span 
          className="
            text-stone-300 text-xs
            opacity-0 -translate-x-2 
            group-hover:opacity-100 group-hover:translate-x-0 
            transition-all duration-300 ease-out
          "
          aria-hidden="true"
        >
          &rarr;
        </span>
      </header>

      {/* The Memory Snippet */}
      <div className="
        font-serif text-lg leading-relaxed 
        text-stone-600 group-hover:text-stone-800 
        transition-colors duration-300
        line-clamp-3 md:line-clamp-none
      ">
        {children}
      </div>
    </article>
  );
}