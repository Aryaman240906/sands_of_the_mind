// PassiveRecallContainer.tsx
// Pure remembrance container with zero interaction affordances.
// Establishes the "Archive" atmosphere: quiet, bounded, and slow to emerge.

import React from 'react';

interface PassiveRecallContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PassiveRecallContainer({
  children,
  className = '',
}: PassiveRecallContainerProps) {
  return (
    <div
      role="region"
      aria-label="Memory Archive"
      className={`
        /* 1. Layout & Geometry */
        relative mx-auto w-full 
        max-w-[65ch] /* The "Golden Measure" for comfortable reading lines */
        px-6 py-12 md:px-8 md:py-24
        
        /* 2. Interaction Physics */
        cursor-default 
        select-text
        
        /* 3. The "Resurfacing" Animation 
           Memories shouldn't load instantly; they should drift in.
        */
        animate-in fade-in slide-in-from-bottom-4 duration-[1500ms] ease-out
        
        /* 4. Tonal Nuance
           Overrides selection color to be extremely faint, 
           preserving the "do not touch" feeling even when selecting text.
        */
        selection:bg-stone-200/30 selection:text-stone-600
        
        ${className}
      `}
    >
      {/* The "Binding" Line: 
        A ghostly divider at the top that suggests separation from the "Now".
      */}
      <div 
        className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-stone-300/40 to-transparent" 
        aria-hidden="true"
      />

      {children}
    </div>
  );
}