// ui/feedback/FocusHaloRing.tsx
// A calm, non-intrusive focus indicator.
// Replaces the "alert" blue ring with a "warm" stone embrace.

import React from 'react';

interface FocusHaloRingProps {
  children: React.ReactNode;
  className?: string;
  radius?: string; // e.g., 'rounded-full', 'rounded-lg'
}

export const FocusHaloRing: React.FC<FocusHaloRingProps> = ({
  children,
  className = '',
  radius = 'rounded-md'
}) => {
  return (
    <div
      className={`
        relative group
        /* We use focus-within so the parent reacts when children (inputs/buttons) are focused */
        focus-within:outline-none
        ${className}
      `}
    >
      {/* The Halo Layer */}
      <div
        className={`
          absolute -inset-1 
          pointer-events-none 
          border-2 border-stone-300/60
          opacity-0 
          transition-all duration-300 ease-out
          scale-95 group-focus-within:scale-100
          group-focus-within:opacity-100
          
          /* Match the child's shape */
          ${radius}
        `}
        aria-hidden="true"
      />
      
      {/* The Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};