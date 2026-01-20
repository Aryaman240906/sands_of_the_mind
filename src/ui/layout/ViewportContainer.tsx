// ViewportContainer.tsx
// Full viewport handling with controlled overflow behavior.
// Uses dynamic viewport units (dvh) to stabilize layout on mobile devices.

import React from 'react';

interface ViewportContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ViewportContainer({
  children,
  className = '',
}: ViewportContainerProps) {
  return (
    <div
      className={`
        relative w-full
        h-[100dvh]       /* Critical: Adapts to mobile URL bar shifts */
        flex flex-col    /* Establishes vertical flow for children */
        overflow-hidden  /* Locks the document body; internal layers handle scroll */
        ${className}
      `}
    >
      {children}
    </div>
  );
}