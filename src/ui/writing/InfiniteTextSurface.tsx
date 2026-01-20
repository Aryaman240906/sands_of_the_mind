// InfiniteTextSurface.tsx
// Visual wrapper that creates the illusion of an endless sheet of paper.
// Ensures user can click *anywhere* below the text to focus the input.

import React from 'react';

interface InfiniteTextSurfaceProps {
  children: React.ReactNode;
  onClick?: () => void; // Passed down to trigger focus on the textarea
  className?: string;
}

export default function InfiniteTextSurface({
  children,
  onClick,
  className = '',
}: InfiniteTextSurfaceProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative w-full
        min-h-[90vh]      /* Massive height ensures it always feels "open" */
        cursor-text       /* Signals: "You can write anywhere here" */
        pb-[40vh]         /* Comfort: Allows scrolling past the last line */
        ${className}
      `}
    >
      {children}
    </div>
  );
}