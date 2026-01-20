// BackNavigationControl.tsx
// Gentle affordance to return without aggression.
// Uses a "retreating" micro-interaction to signal movement backward in space.

import React from 'react';

interface BackNavigationControlProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function BackNavigationControl({
  children,
  onClick,
  className = '',
}: BackNavigationControlProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        group
        inline-flex items-center gap-3
        py-2 pr-4 pl-0
        text-sm font-medium text-stone-500
        transition-colors duration-500 ease-out
        hover:text-stone-800
        ${className}
      `}
      aria-label="Return to previous view"
    >
      {/* The Arrow: 
          An explicit SVG to ensure stroke weight matches the theme perfectly.
          Animating -translate-x-1 creates a physical "pull" to the left.
      */}
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-transform duration-500 ease-out group-hover:-translate-x-1"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>

      {/* The Label */}
      <span className="tracking-wide">
        {children}
      </span>
    </button>
  );
}