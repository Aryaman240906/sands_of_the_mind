// profile/ProfileOverviewCard.tsx
// Grounding presence card without metrics or identity performance.
// A static anchor for the self, not a billboard for others.

import React from 'react';

interface ProfileOverviewCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ProfileOverviewCard({
  children,
  className = '',
}: ProfileOverviewCardProps) {
  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden
        
        /* Material: Paper-like, matte, grounded */
        bg-stone-50
        border border-stone-100
        rounded-sm
        shadow-[0_2px_10px_-6px_rgba(68,64,60,0.05)]
        
        /* Spacing */
        p-8 md:p-12
        
        /* Entrance */
        animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out
        
        ${className}
      `}
      role="region"
      aria-label="Identity anchor"
    >
      {/* Decorative vertical accent (The "Spine" of the book) */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1 bg-stone-200/50" 
        aria-hidden="true" 
      />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 text-center md:text-left">
        {children}
      </div>
    </section>
  );
}