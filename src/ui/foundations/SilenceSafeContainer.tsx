// SilenceSafeContainer.tsx
// Communicates that presence is enough; nothing is required.
// Establishes a centered, bounded sanctuary for content to rest within.

import React from 'react';

interface SilenceSafeContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SilenceSafeContainer({
  children,
  className = '',
}: SilenceSafeContainerProps) {
  return (
    <div
      className={`
        relative mx-auto w-full max-w-3xl
        px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24
        animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-backwards
        ${className}
      `}
    >
      {/* The 'Safe' aspect is enforced by the max-width (max-w-3xl).
         This prevents lines of text (if thoughts are written) from becoming 
         too long to read comfortably, reducing cognitive load implicitly.
      */}
      {children}
    </div>
  );
}