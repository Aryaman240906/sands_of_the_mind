// ChronologicalEntrySeparator.tsx
// Subtle temporal boundary without visual weight.
// Acts as a "Breath" between memories, not a wall.

import React from 'react';

interface ChronologicalEntrySeparatorProps {
  timestamp?: string;
  className?: string;
}

export default function ChronologicalEntrySeparator({
  timestamp,
  className = '',
}: ChronologicalEntrySeparatorProps) {
  return (
    <div
      role="separator"
      aria-label={timestamp ? `Entry from ${timestamp}` : "Section break"}
      className={`
        relative 
        flex items-center justify-center 
        py-16 md:py-24 /* Generous vertical space to cleanse the palate */
        select-none
        ${className}
      `}
    >
      {/* The Horizon Line:
          A gentle gradient that fades out at the edges.
          It suggests continuity rather than a hard stop.
      */}
      <div 
        className="absolute inset-x-12 h-px bg-gradient-to-r from-transparent via-stone-300/40 to-transparent" 
        aria-hidden="true"
      />

      {timestamp ? (
        /* The Timestamp:
           Sits on top of the line with a background color matching the page
           to create the illusion of a gap.
        */
        <time
          dateTime={timestamp}
          className="
            relative z-10
            px-6
            bg-[#fdfcf8] /* Must match ReadingSurface background */
            font-mono text-xs uppercase tracking-[0.2em]
            text-stone-400/60
          "
        >
          {timestamp}
        </time>
      ) : (
        /* The Asterism (Alternative):
           If no time is provided, a simple diamond mark suffices.
        */
        <div 
          className="relative z-10 px-4 bg-[#fdfcf8] text-stone-300/60"
          aria-hidden="true"
        >
          ◆
        </div>
      )}
    </div>
  );
}