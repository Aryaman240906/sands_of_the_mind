// MarginNoteSurface.tsx
// Secondary notation space that preserves original text integrity.
// Renders "Meta-Commentary" in the negative space of the page.

import React from 'react';

interface MarginNoteSurfaceProps {
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

export default function MarginNoteSurface({
  children,
  position = 'right',
  className = '',
}: MarginNoteSurfaceProps) {
  // Positioning logic:
  // We assume the parent container is 'relative'.
  // We push the note into the negative space using absolute positioning
  // relative to the block it annotates.
  const positionStyles = {
    right: `
      left-full ml-6 
      border-l border-stone-200 pl-4 
      text-left
    `,
    left: `
      right-full mr-6 
      border-r border-stone-200 pr-4 
      text-right
    `,
  };

  return (
    <aside
      role="note"
      className={`
        /* 1. Positioning & Layout */
        absolute top-0
        w-56  /* Fixed width ensures readable line lengths for notes */
        hidden xl:block /* Vanishes on small screens to protect reading flow */
        
        /* 2. Typography (The Analyst Voice) */
        font-sans 
        text-xs font-medium 
        leading-relaxed
        tracking-wide
        
        /* 3. Materiality */
        text-stone-400
        
        /* 4. Animation */
        animate-in fade-in slide-in-from-left-2 duration-1000
        
        ${positionStyles[position]}
        ${className}
      `}
    >
      {children}
    </aside>
  );
}