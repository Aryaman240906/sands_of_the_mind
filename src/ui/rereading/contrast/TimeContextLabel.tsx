// TimeContextLabel.tsx
// Temporal identifier.
// Anchors the user in time (Then vs Now) without using "Progress" language.

import React from 'react';

interface TimeContextLabelProps {
  children: React.ReactNode;
  moment?: 'then' | 'now';
  className?: string;
}

export default function TimeContextLabel({
  children,
  moment = 'now',
  className = '',
}: TimeContextLabelProps) {
  // Visual distinction between Past (Static) and Present (Active)
  const dotStyles = {
    then: 'bg-stone-300', // Cool, settled, static
    now: 'bg-amber-400/60 shadow-[0_0_8px_rgba(251,191,36,0.4)]', // Warm, alive, slightly glowing
  };

  return (
    <div
      role="heading"
      aria-level={2}
      className={`
        flex items-center gap-3
        pb-6
        border-b border-stone-100
        ${className}
      `}
    >
      {/* The Status Indicator */}
      <div 
        className={`h-1.5 w-1.5 rounded-full ${dotStyles[moment]}`} 
        aria-hidden="true"
      />

      {/* The Label */}
      <span className={`
        font-mono text-[10px] uppercase tracking-[0.2em] font-medium
        ${moment === 'then' ? 'text-stone-400' : 'text-stone-500'}
      `}>
        {children}
      </span>
    </div>
  );
}