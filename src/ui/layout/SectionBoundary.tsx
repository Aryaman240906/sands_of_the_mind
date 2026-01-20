// SectionBoundary.tsx
// Visual separation through whitespace without borders or lines.
// Uses "Negative Space" as the primary structural element, 
// forcing a mental pause between major content blocks.

import React from 'react';

interface SectionBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionBoundary({
  children,
  className = '',
}: SectionBoundaryProps) {
  return (
    <section 
      className={`
        relative w-full
        /* The Pause: 
           Standard apps use 4rem borders. We use 12rem of nothingness.
           This is the "Desert Walk" between landmarks. */
        py-24 md:py-36 lg:py-48
        ${className}
      `}
    >
      {children}
    </section>
  );
}