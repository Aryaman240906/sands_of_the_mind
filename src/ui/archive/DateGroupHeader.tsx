// archive/DateGroupHeader.tsx
// Gentle temporal separation without counts or emphasis.
// Acts as a "Chapter Heading" for a period of time.

import React from 'react';

interface DateGroupHeaderProps {
  children: React.ReactNode; // e.g., "October 2023" or "Yesterday"
  date?: string; // Machine readable date string
  className?: string;
}

export default function DateGroupHeader({
  children,
  date,
  className = '',
}: DateGroupHeaderProps) {
  return (
    <div
      className={`
        relative 
        flex items-center gap-4
        pt-12 pb-8 
        /* Ensure the first header doesn't push down unnecessarily */
        first:pt-0
        ${className}
      `}
    >
      {/* The Date Label */}
      <time
        dateTime={date}
        className={`
          font-mono text-[10px] uppercase tracking-[0.2em] 
          text-stone-400 font-medium
          shrink-0
        `}
      >
        {children}
      </time>

      {/* The "Timeline" Line
          A very subtle horizontal rule that fades out, suggesting continuity.
      */}
      <div 
        className="h-px w-full max-w-[120px] bg-gradient-to-r from-stone-200/60 to-transparent" 
        aria-hidden="true"
      />
    </div>
  );
}