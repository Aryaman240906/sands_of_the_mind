// GlobalNavigationBar.tsx
// Quiet container for primary navigation.
// Acts as the "Horizon Line" of the application—always present but soft.

import React from 'react';

interface GlobalNavigationBarProps {
  children: React.ReactNode;
  position?: 'top' | 'side';
  className?: string;
}

export default function GlobalNavigationBar({
  children,
  position = 'top',
  className = '',
}: GlobalNavigationBarProps) {
  const isTop = position === 'top';

  return (
    <nav
      role="navigation"
      aria-label="Global navigation"
      className={`
        /* Structural Positioning */
        ${isTop ? 'sticky top-0 w-full z-40' : 'relative h-full w-72'}
        
        /* Materiality: Frosted Sand */
        /* High opacity ensures legibility, but transparency lets the page 'breathe' underneath */
        bg-stone-50/80 backdrop-blur-md
        
        /* Transition for potential scroll-state changes later */
        transition-all duration-500 ease-out
        
        ${className}
      `}
    >
      {/* 1. The Horizon Line (Soft Border)
          Instead of a solid mechanical border, we use a gradient that fades at the edges.
          This feels organic, like a ridge in the sand.
      */}
      <div 
        className={`
          absolute pointer-events-none opacity-60
          ${isTop ? 'bottom-0 inset-x-0 h-px' : 'right-0 inset-y-0 w-px'}
          ${isTop 
            ? 'bg-gradient-to-r from-transparent via-stone-300/50 to-transparent' 
            : 'bg-gradient-to-b from-transparent via-stone-300/50 to-transparent'
          }
        `} 
      />

      {/* 2. Content Container 
          Ensures the nav items align perfectly with the page content below.
      */}
      <div className={`
        ${isTop 
          ? 'mx-auto max-w-7xl px-6 md:px-12 h-20 md:h-24 flex items-center justify-between' 
          : 'p-8 flex flex-col gap-8 h-full'
        }
      `}>
        {children}
      </div>
    </nav>
  );
}