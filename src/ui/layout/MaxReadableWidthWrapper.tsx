// MaxReadableWidthWrapper.tsx
// Enforces optimal line length (measure) for comfortable reading.
// Prevents eye fatigue by ensuring the eye never has to travel 
// more than ~75 characters across, regardless of screen size.

import React from 'react';

interface MaxReadableWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxReadableWidthWrapper({
  children,
  className = '',
}: MaxReadableWidthWrapperProps) {
  return (
    <div
      className={`
        w-full mx-auto
        max-w-2xl      /* The Constraint: Keeps content within the focal zone */
        px-6 md:px-8   /* The Cushion: Ensures edges never feel sharp or trapped */
        ${className}
      `}
    >
      {children}
    </div>
  );
}