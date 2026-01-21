// ThenEntryPanel.tsx
// Past moment container.
// Acts as the "Anchor" or "Prompt" for the current reflection.

import React from 'react';

interface ThenEntryPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function ThenEntryPanel({
  children,
  className = '',
}: ThenEntryPanelProps) {
  return (
    <section
      role="article"
      aria-label="The Past Entry"
      className={`
        /* 1. Layout Behavior */
        flex flex-col gap-4
        w-full
        
        /* Sticky Behavior (Desktop only):
           Keeps the memory in view while you write a long reflection against it.
        */
        lg:sticky lg:top-24
        
        /* 2. The Voice of the Past
           Slightly muted, suggesting "Dried Ink" or "Archival Text".
           It is distinct from the high-contrast "Fresh Ink" of the editor.
        */
        text-stone-600/90
        
        /* 3. Interaction
           Selectable for quoting, but immutable.
        */
        select-text
        cursor-default
        
        ${className}
      `}
    >
      {children}
    </section>
  );
}