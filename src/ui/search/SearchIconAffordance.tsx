// search/SearchIconAffordance.tsx
// Minimalist visual trigger for the search experience.
// Acts as a "Lantern" to illuminate past entries.

import React from 'react';

interface SearchIconAffordanceProps {
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export default function SearchIconAffordance({
  onClick,
  active = false,
  className = '',
}: SearchIconAffordanceProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={active ? "Close search" : "Open search"}
      aria-expanded={active}
      className={`
        /* Layout & Hit Area */
        relative
        flex items-center justify-center
        p-2
        rounded-full
        
        /* Visual Style */
        text-stone-400
        transition-all duration-300 ease-out
        
        /* Interaction */
        hover:bg-stone-100/50
        hover:text-stone-600
        active:scale-95
        
        /* State Modifications */
        ${active ? 'bg-stone-100 text-stone-800' : 'bg-transparent'}
        
        ${className}
      `}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`transition-transform duration-500 ${active ? 'scale-110' : 'scale-100'}`}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  );
}