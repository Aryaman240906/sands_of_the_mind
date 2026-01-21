// ReflectionEntryTrigger.tsx
// Subtle, ignorable affordance to begin a new entry based on a past insight.
// "Spark the gap" between Past and Present.

import React from 'react';

interface ReflectionEntryTriggerProps {
  onClick?: () => void;
  visible?: boolean;
  className?: string;
}

export default function ReflectionEntryTrigger({
  onClick,
  visible = true,
  className = '',
}: ReflectionEntryTriggerProps) {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        /* Layout & Position */
        group relative
        flex items-center gap-2
        pl-2 pr-4 py-1.5
        rounded-full
        
        /* Typography */
        text-xs font-medium tracking-wide uppercase
        
        /* Materiality (Ghost) */
        bg-transparent
        text-stone-400/50
        
        /* Interaction State: Only becomes solid when directly interacted with */
        transition-all duration-500 ease-out
        hover:bg-stone-100 hover:text-stone-600
        hover:shadow-sm
        
        ${className}
      `}
      aria-label="Start new entry from this point"
    >
      {/* Icon: A specialized "Spark" or "Branch" symbol */}
      <svg 
        className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-90" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>

      {/* Label: Slides in on hover for clarity */}
      <span className="
        opacity-0 -translate-x-2 
        group-hover:opacity-100 group-hover:translate-x-0 
        transition-all duration-500
      ">
        Reflect
      </span>
    </button>
  );
}