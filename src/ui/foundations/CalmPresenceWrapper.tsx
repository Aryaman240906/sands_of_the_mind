// CalmPresenceWrapper.tsx
// Softens visual intensity and edges. 
// Acts as a "frosted lens" to reduce noise around content, 
// creating a localized area of focus without harsh separation.

import React from 'react';

interface CalmPresenceWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function CalmPresenceWrapper({
  children,
  className = '',
}: CalmPresenceWrapperProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-3xl
        bg-stone-50/60 
        backdrop-blur-md 
        border border-white/50
        shadow-[0_8px_40px_-12px_rgba(120,113,108,0.1)]
        transition-all duration-1000 ease-out
        ${className}
      `}
    >
      {/* Optional: A very subtle top-highlight to mimic overhead sun 
        catching the top edge of a stone/dune.
      */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50" />
      
      {children}
    </div>
  );
}