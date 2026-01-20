// SecondaryNavItem.tsx
// Less prominent navigation option with visual subordination.
// Relies purely on typography and tonal value—no background shapes.

import React from 'react';

interface SecondaryNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function SecondaryNavItem({
  children,
  active = false,
  onClick,
  className = '',
}: SecondaryNavItemProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-current={active ? 'page' : undefined}
      className={`
        group relative
        px-3 py-2
        text-xs font-medium tracking-wide
        transition-colors duration-500 ease-out
        
        /* State Handling */
        ${active 
          ? 'text-stone-900' 
          : 'text-stone-400 hover:text-stone-700'
        }
        
        ${className}
      `}
    >
      {/* Content */}
      <span className="relative z-10">
        {children}
      </span>

      {/* Active Indicator:
        A tiny, barely-there underline that only appears when active.
        It doesn't span the full width—just a small mark to say "you are here".
      */}
      <span 
        className={`
          absolute bottom-1 left-1/2 -translate-x-1/2
          h-px w-3 bg-stone-400
          transition-all duration-500 ease-out
          ${active ? 'opacity-100 w-4' : 'opacity-0 w-0'}
        `} 
      />
    </button>
  );
}