// DualColumnComparisonLayout.tsx
// Balanced, symmetric side-by-side layout for comparison contexts.
// visualizes duality (e.g., Past vs Present, Fear vs Reality).

import React from 'react';

interface DualColumnComparisonLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DualColumnComparisonLayout({
  children,
  className = '',
}: DualColumnComparisonLayoutProps) {
  return (
    <div className={`relative w-full max-w-7xl mx-auto ${className}`}>
      
      {/* The Spine: A subtle vertical thread that visually separates 
          the two states on large screens. It fades at both ends 
          to avoid harsh geometrical cuts. */}
      <div 
        className="
          hidden lg:block
          absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2
          bg-gradient-to-b from-transparent via-stone-400/20 to-transparent
          pointer-events-none
        "
      />

      {/* The Grid:
          - Mobile: Stacked vertically with significant breathing room (gap-y-16).
          - Desktop: Side-by-side with wide separation (gap-x-24).
          - items-start: Ensures content hangs naturally, even if lengths differ.
      */}
      <div className="
        grid grid-cols-1 lg:grid-cols-2 
        gap-y-16 lg:gap-x-24 
        items-start
      ">
        {children}
      </div>
    </div>
  );
}