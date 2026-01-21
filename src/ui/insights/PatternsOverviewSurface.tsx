// insights/PatternsOverviewSurface.tsx
// Quiet entry point to insights without dashboard or KPI framing.
// A gallery for observing the shapes of one's own mind.

import React from 'react';

interface PatternsOverviewSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export default function PatternsOverviewSurface({
  children,
  className = '',
}: PatternsOverviewSurfaceProps) {
  return (
    <div
      role="region"
      aria-label="Pattern Observations"
      className={`
        /* 1. Layout & Geometry */
        min-h-screen w-full
        px-6 py-16 md:px-12 md:py-24
        
        /* 2. Atmosphere
           A light, breathable surface. 
           Slightly more transparent than reading surfaces to feel "abstract".
        */
        bg-stone-50/60
        
        /* 3. Global Text Inheritance
           Ensures all charts inherit the correct font smoothing.
        */
        antialiased
        text-stone-600
        
        ${className}
      `}
    >
      {/* The "Gallery Wall" container.
        Centralizes content but allows for wider visualizations than text blocks.
      */}
      <div className="mx-auto max-w-6xl space-y-20 md:space-y-32">
        {children}
      </div>
    </div>
  );
}