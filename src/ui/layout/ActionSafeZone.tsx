// ActionSafeZone.tsx
// Reserved spatial area for optional controls.
// Actions sit in isolation, centered and distant, never crowding content.

import React from 'react';

interface ActionSafeZoneProps {
  children?: React.ReactNode;
  position?: 'top' | 'bottom' | 'inline';
  className?: string;
}

const positionMap = {
  // Top: Usually for navigation/back. Subtle separation from content below.
  top: 'mb-12 md:mb-20',
  
  // Bottom: The "End of Thought" actions. Massive distance from the last word.
  bottom: 'mt-16 md:mt-24',
  
  // Inline: Contextual actions (e.g., "Edit this specific section").
  inline: 'my-10',
} as const;

export default function ActionSafeZone({
  children,
  position = 'bottom',
  className = '',
}: ActionSafeZoneProps) {
  // If no actions exist, the zone vanishes completely to preserve silence.
  if (!children) {
    return null;
  }

  return (
    <div
      className={`
        w-full
        flex items-center justify-center
        flex-wrap gap-6
        transition-opacity duration-500 ease-out
        ${positionMap[position]} 
        ${className}
      `}
      role="group" 
      aria-label="Available Actions"
    >
      {children}
    </div>
  );
}