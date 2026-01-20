// PrimaryNavItem.tsx
// Main destination affordance with stable, minimal visual presence.
// Uses weight and subtle tonal shifts rather than heavy background blocks.

import React from 'react';

interface PrimaryNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  muted?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryNavItem({
  children,
  active = false,
  muted = false,
  onClick,
  className = '',
}: PrimaryNavItemProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-current={active ? 'page' : undefined}
      disabled={muted}
      className={`
        relative
        group
        flex items-center justify-center
        px-6 py-2.5
        rounded-full
        text-sm tracking-wide
        transition-all duration-500 ease-out
        
        /* State: Active */
        ${active 
          ? 'bg-stone-100 text-stone-900 font-medium shadow-sm ring-1 ring-stone-200/50' 
          : 'bg-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-50/50'
        }
        
        /* State: Muted */
        ${muted ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}

        ${className}
      `}
    >
      {/* Micro-interaction: A tiny dot that appears below the text on hover,
         mimicking a grain of sand settling.
      */}
      {!active && !muted && (
        <span className="
          absolute bottom-1.5 left-1/2 -translate-x-1/2
          w-1 h-1 rounded-full bg-stone-300
          opacity-0 scale-0 
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-500 delay-75
        " />
      )}
      
      {children}
    </button>
  );
}