// privacy/PrivacyOverviewSurface.tsx
// Primary container for privacy information emphasizing clarity and control.
// Sets a calm, reading-room atmosphere for understanding system mechanics.

import React from 'react';

interface PrivacyOverviewSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export default function PrivacyOverviewSurface({
  children,
  className = '',
}: PrivacyOverviewSurfaceProps) {
  return (
    <div
      className={`
        min-h-screen w-full 
        /* Calm, solid background - feels like a clean document */
        bg-stone-50 
        
        /* Spacing and Typography */
        px-6 py-16 md:px-12 md:py-24 
        selection:bg-stone-200 selection:text-stone-900
        
        ${className}
      `}
      role="main"
      aria-label="Privacy and Data Mechanics"
    >
      <div className="mx-auto max-w-3xl space-y-16 animate-in fade-in duration-700 ease-out">
        {/* Contextual Header: Frames the page as technical transparency, not legal defense */}
        <header className="space-y-6 border-b border-stone-200/60 pb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-800 tracking-tight">
            System Mechanics
          </h1>
          <p className="font-serif text-lg md:text-xl text-stone-500 leading-relaxed max-w-2xl">
            This document explains how your data exists, moves, and disappears within this system. 
            There are no hidden clauses.
          </p>
        </header>
        
        {/* Main Content Area: High spacing to prevent "Wall of Text" fatigue */}
        <main className="space-y-20">
          {children}
        </main>
      </div>
    </div>
  );
}