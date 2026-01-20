// CognitiveSafetyBoundary.tsx
// Visually separates user space from system space.
// Creates a "horizon line" to gently push system utilities 
// to the periphery, keeping the user's thoughts center stage.

import React from 'react';

interface CognitiveSafetyBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

export default function CognitiveSafetyBoundary({
  children,
  className = '',
}: CognitiveSafetyBoundaryProps) {
  return (
    <div
      className={`
        relative 
        w-full max-w-lg mx-auto
        mt-16 pt-12 md:mt-24 md:pt-16
        text-sm text-stone-400/80 font-medium tracking-wide
        text-center
        transition-opacity duration-1000
        ${className}
      `}
    >
      {/* The Divider: 
        Instead of a hard border-t, we use a gradient fade.
        This feels like a wind-swept line in the sand, not a database row.
      */}
      <div 
        className="absolute top-0 inset-x-0 h-px w-3/4 mx-auto"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(168,162,158,0.4) 50%, transparent 100%)'
        }}
      />

      {children}
    </div>
  );
}