// archive/EntryPreviewCard.tsx
// Respectful glimpse of past entry without evaluation.
// Visualizes the memory as a physical note card on a desk.

import React from 'react';

interface EntryPreviewCardProps {
  children: React.ReactNode;
  date: string;
  onClick?: () => void;
  className?: string;
  tags?: string[];
}

export default function EntryPreviewCard({
  children,
  date,
  onClick,
  className = '',
  tags = [],
}: EntryPreviewCardProps) {
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
        relative w-full
        p-6 md:p-8
        
        /* 1. Material (Paper on Desk) */
        bg-white
        border border-stone-100
        rounded-sm
        
        /* 2. Interaction Physics (Subtle Lift) */
        transition-all duration-500 ease-out
        cursor-pointer
        hover:border-stone-200
        hover:shadow-[0_2px_15px_-8px_rgba(68,64,60,0.08)]
        hover:-translate-y-0.5
        
        /* 3. Focus State */
        outline-none
        focus-visible:ring-1 focus-visible:ring-stone-300 focus-visible:border-stone-300
        
        ${className}
      `}
    >
      {/* Metadata Header */}
      <header className="flex items-center justify-between mb-4">
        <time 
          dateTime={date}
          className="
            font-mono text-[10px] uppercase tracking-wider 
            text-stone-400 group-hover:text-stone-500
            transition-colors duration-300
          "
        >
          {date}
        </time>
        
        {/* Tag Indicators (Dots only, to reduce clutter) */}
        {tags.length > 0 && (
          <div className="flex gap-1.5" aria-label={`${tags.length} tags`}>
            {tags.slice(0, 3).map((tag, i) => (
              <div 
                key={i} 
                className="w-1 h-1 rounded-full bg-stone-200 group-hover:bg-stone-300 transition-colors" 
              />
            ))}
          </div>
        )}
      </header>

      {/* The Memory Snippet */}
      <div className="
        font-serif text-lg leading-relaxed 
        text-stone-600 group-hover:text-stone-800 
        transition-colors duration-300
        line-clamp-4
      ">
        {children}
      </div>

      {/* Subtle "Read" Affordance (Bottom Right) */}
      <div 
        className="
          absolute bottom-6 right-6
          opacity-0 transform translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-500 ease-out
          text-stone-300
        "
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </article>
  );
}