// OfflineWriteIndicator.tsx
// Calm confirmation that writing continues without connection.
// Treats disconnection as a "Sanctuary Mode" rather than an error.

import React from 'react';

interface OfflineWriteIndicatorProps {
  offline?: boolean;
  className?: string;
}

export default function OfflineWriteIndicator({
  offline = false,
  className = '',
}: OfflineWriteIndicatorProps) {
  if (!offline) {
    return null;
  }

  return (
    <div
      className={`
        /* Layout & Position */
        flex items-center gap-2
        px-3 py-1.5
        rounded-full
        
        /* Materiality: Subtly distinct from the paper background */
        bg-stone-100/80 backdrop-blur-sm
        border border-dashed border-stone-300
        
        /* Typography */
        text-xs font-medium text-stone-500 tracking-wide
        
        /* Animation: Gentle entrance */
        animate-in fade-in slide-in-from-bottom-2 duration-700
        
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      {/* Icon: A quiet visual reinforcement */}
      <svg 
        className="w-3 h-3 text-stone-400" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l20 20" />
      </svg>
      
      <span>Local mode active</span>
    </div>
  );
}