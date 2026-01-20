// SingleColumnLayout.tsx
// Vertical, reading-first layout with consistent flow.
// Acts as the "Riverbed" for the application's content stream.

import React from 'react';

interface SingleColumnLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function SingleColumnLayout({
  children,
  className = '',
}: SingleColumnLayoutProps) {
  return (
    <main
      className={`
        relative w-full min-h-full
        flex flex-col
        /* UX Vital: Massive bottom padding (~30% of viewport).
           This ensures the last item can always be scrolled up to 
           comfortable eye-level, never stuck at the bottom edge. */
        pb-[30vh]
        ${className}
      `}
    >
      {children}
    </main>
  );
}