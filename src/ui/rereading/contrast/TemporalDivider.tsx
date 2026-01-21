// TemporalDivider.tsx
// Neutral separation between moments without directional implication.
// The "Hinge" that connects Then and Now.

import React from 'react';

interface TemporalDividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function TemporalDivider({
  orientation = 'vertical',
  className = '',
}: TemporalDividerProps) {
  const styles = {
    horizontal: `
      h-px w-full 
      bg-gradient-to-r from-transparent via-stone-300/40 to-transparent
      my-8 md:my-12
    `,
    vertical: `
      w-px h-auto 
      bg-gradient-to-b from-transparent via-stone-300/40 to-transparent
      mx-8 lg:mx-12
      hidden lg:block
    `,
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`
        /* Base: A gentle, non-solid divider */
        pointer-events-none
        opacity-80
        
        /* Orientation-specific geometry */
        ${styles[orientation]}
        
        ${className}
      `}
    />
  );
}