// archive/ArchiveSurface.tsx
// Primary container for archived content without dashboard or inventory feel.
// A "Reading Room" environment.

import React from 'react';

interface ArchiveSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArchiveSurface({
  children,
  className = '',
}: ArchiveSurfaceProps) {
  return (
    <main
      role="main"
      className={`
        /* 1. Global Geometry */
        min-h-screen w-full
        
        /* 2. Spacing (Generous top padding to clear the nav and settle the mind) */
        px-6 py-20 md:px-12 md:py-32
        
        /* 3. Atmosphere */
        bg-stone-50
        
        /* 4. Text Selection Override (System Consistency) */
        selection:bg-stone-200 selection:text-stone-900
        
        /* 5. Entrance Animation */
        animate-in fade-in duration-1000 ease-out
        
        ${className}
      `}
    >
      {/* The Central Reading Column 
          Constrained to max-w-3xl for optimal line length (approx 65-75 chars).
      */}
      <div className="mx-auto max-w-3xl space-y-16 md:space-y-24">
        {children}
      </div>
    </main>
  );
}