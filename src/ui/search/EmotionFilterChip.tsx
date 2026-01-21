// search/EmotionFilterChip.tsx
// Explicit emotional language filter without inference.
// Visualizes feelings as neutral "Weather Conditions" rather than good/bad states.

import React from 'react';

interface EmotionFilterChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function EmotionFilterChip({
  children,
  active = false,
  onClick,
  className = '',
}: EmotionFilterChipProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      role="switch"
      aria-checked={active}
      className={`
        /* Layout */
        inline-flex items-center gap-2
        px-4 py-1.5
        rounded-full
        border
        
        /* Typography (The Human Voice) */
        font-serif italic text-sm
        
        /* Transitions */
        transition-all duration-300 ease-out
        
        /* Interaction States */
        ${active 
          ? 'bg-stone-50 border-stone-300 text-stone-800 shadow-sm' 
          : 'bg-transparent border-stone-100 text-stone-400 hover:border-stone-200 hover:text-stone-500'
        }
        
        ${className}
      `}
    >
      {/* The "Presence" Dot 
          Indicates that this feeling is currently "switched on" in the filter.
      */}
      <span 
        className={`
          h-1.5 w-1.5 rounded-full transition-colors duration-300
          ${active ? 'bg-amber-400/80' : 'bg-stone-200'}
        `} 
        aria-hidden="true"
      />
      
      <span>{children}</span>
    </button>
  );
}