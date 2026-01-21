// TemporalContrastLayout.tsx
// Symmetric comparison layout.
// Creates a "Diptyque" view—holding space for two moments in time simultaneously.

import React from 'react';

interface TemporalContrastLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function TemporalContrastLayout({
  children,
  className = '',
}: TemporalContrastLayoutProps) {
  return (
    <div
      role="region"
      aria-label="Temporal Comparison: Past vs Present"
      className={`
        /* 1. Layout Structure */
        w-full max-w-[90rem] mx-auto
        grid grid-cols-1 lg:grid-cols-2
        
        /* 2. The "Time Gap"
           A wide gutter separates the two panels, preventing visual bleeding.
           This whitespace represents the time elapsed.
        */
        gap-12 lg:gap-24
        
        /* 3. Padding & Safe Zones */
        px-6 py-8 md:px-12 md:py-16
        
        /* 4. Alignment
           items-start ensures each column flows naturally based on its own length.
        */
        items-start
        
        /* 5. Entrance Animation */
        animate-in fade-in duration-1000 slide-in-from-bottom-4
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}