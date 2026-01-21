// NowEntryPanel.tsx
// Present moment container.
// The "Active" side of the diptych—receptive and high-contrast.

import React from 'react';

interface NowEntryPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function NowEntryPanel({
  children,
  className = '',
}: NowEntryPanelProps) {
  return (
    <section
      role="region"
      aria-label="New Reflection"
      className={`
        /* 1. Layout */
        flex flex-col gap-4
        w-full
        /* Ensure it holds its ground visually even if empty */
        min-h-[50vh]
        
        /* 2. The Voice of the Present
           High contrast, "Wet Ink". 
           This container amplifies the focus of the WritingCanvas inside it.
        */
        text-stone-800
        
        /* 3. Interaction Status */
        relative z-10
        
        ${className}
      `}
    >
      {children}
    </section>
  );
}