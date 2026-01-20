// WritingFocusHalo.tsx
// Subtle ambient indicator that the user is in "Creation Mode".
// Acts as a subconscious "Do Not Disturb" sign for the interface by vignetting the edges.

import React from 'react';

interface WritingFocusHaloProps {
  isActive: boolean;
  className?: string;
}

export default function WritingFocusHalo({
  isActive,
  className = '',
}: WritingFocusHaloProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        fixed inset-0 z-0
        transition-opacity duration-[1500ms] ease-in-out
        ${isActive ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
    >
      {/* The Halo:
        A radial gradient that leaves the center (writing area) pure and bright,
        but slightly dims the corners (navigation, distractions) with a warm stone tint.
      */}
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_center,transparent_50%,rgba(168,162,158,0.1)_100%)]
      " />
      
      {/* The Spotlight:
        A second layer that adds a very faint vertical highlight,
        subtly suggesting a "pillar of light" effect on the active page.
      */}
      <div className="
        absolute inset-x-0 top-0 h-1/3
        bg-gradient-to-b from-white/40 to-transparent
        mix-blend-overlay
      " />
    </div>
  );
}