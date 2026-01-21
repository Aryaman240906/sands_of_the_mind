// search/TagFilterChip.tsx
// User-created semantic anchors without system suggestions.
// Feels like a smooth river stone or a paper tab.

import React from 'react';

interface TagFilterChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
}

export default function TagFilterChip({
  children,
  active = false,
  onClick,
  onRemove,
  className = '',
}: TagFilterChipProps) {
  return (
    <div
      role="option"
      aria-selected={active}
      className={`
        inline-flex items-center
        /* Rounded full for the "Stone" feel, or slightly squared for "Tab" feel */
        rounded-full
        transition-all duration-300 ease-out
        
        /* Material States */
        ${active 
          ? 'bg-stone-200 text-stone-800 border border-stone-200 shadow-sm' 
          : 'bg-transparent text-stone-500 border border-stone-200 hover:border-stone-300 hover:text-stone-600'
        }
        
        ${className}
      `}
    >
      {/* The Label / Toggle Action */}
      <button
        type="button"
        onClick={onClick}
        className={`
          px-3 py-1.5
          text-xs font-medium tracking-wide
          bg-transparent outline-none
          cursor-pointer
        `}
      >
        {children}
      </button>

      {/* The Remove Action (Optional) 
          Rendered as a separate touch target next to the label.
      */}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className={`
            pr-2 pl-0.5 py-1.5
            flex items-center justify-center
            text-stone-400 hover:text-stone-700
            transition-colors duration-200
            outline-none
          `}
          aria-label={`Remove ${children} filter`}
        >
          <svg 
            width="10" 
            height="10" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
}