// DraftPresenceMarker.tsx
// Subtle indication that content exists without quantification.
// A visual "breadcrumb" indicating a draft is waiting—a pebble in the shoe.

import React from 'react';

interface DraftPresenceMarkerProps {
  isPresent?: boolean;
  className?: string;
}

export default function DraftPresenceMarker({
  isPresent = false,
  className = '',
}: DraftPresenceMarkerProps) {
  return (
    <div
      aria-hidden={!isPresent}
      className={`
        /* Layout */
        relative flex items-center justify-center
        
        /* Animation Physics: Slow growth, no sudden pops */
        transition-all duration-700 ease-out
        ${isPresent ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        
        ${className}
      `}
      role="status"
      aria-label={isPresent ? "Contains unsaved draft" : undefined}
    >
      {/* The Mark: 
          A simple, solid stone dot. 
          No numbers, no bright colors. Just physical presence.
      */}
      <div className="h-1.5 w-1.5 rounded-full bg-stone-500/80" />
      
      {/* Optional: A very faint ring to ensure visibility on low-contrast backgrounds */}
      <div className="absolute inset-0 rounded-full ring-1 ring-white/50" />
    </div>
  );
}