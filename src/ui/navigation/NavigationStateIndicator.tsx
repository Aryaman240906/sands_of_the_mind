// NavigationStateIndicator.tsx
// Purely visual hint of current location.
// A subtle "mark" indicating presence, like a small stick placed in the sand.

import React from 'react';

interface NavigationStateIndicatorProps {
  active?: boolean;
  position?: 'left' | 'bottom';
  className?: string;
}

export default function NavigationStateIndicator({
  active = false,
  position = 'left',
  className = '',
}: NavigationStateIndicatorProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        absolute rounded-full bg-stone-500/60
        transition-all duration-700 ease-out
        
        /* Positioning Logic:
           We don't span the full edge. We float in the center.
           This looks more like a deliberate mark than a border.
        */
        ${position === 'left' 
          ? 'left-0 top-1/2 -translate-y-1/2 w-0.5 h-1/2' // Vertical: 50% height
          : 'bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/3' // Horizontal: 33% width
        }
        
        /* State Visibility */
        ${active 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-0'
        }
        
        ${className}
      `}
    />
  );
}