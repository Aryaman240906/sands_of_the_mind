// ReadOnlyTextBlock.tsx
// Renders finalized journal text without affordances or interaction hints.
// Represents the "Dried Ink" stage—permanent, distinct, and optimized for deep reading.

import React from 'react';

interface ReadOnlyTextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function ReadOnlyTextBlock({
  children,
  className = '',
}: ReadOnlyTextBlockProps) {
  return (
    <div
      className={`
        /* 1. The Structure of Thought */
        whitespace-pre-wrap       /* Respects every line break and pause the user originally typed */
        break-words               /* Prevents long words from breaking the layout */
        
        /* 2. The Voice (Serif)
           Distinguishes the "Human Story" from the "System Interface" (Sans).
        */
        font-serif
        
        /* 3. The Pace
           - text-lg/xl: Large size reduces eye strain.
           - leading-loose: Generous vertical space slows down reading speed.
           - tracking-wide: Adds air between letters for clarity.
        */
        text-lg md:text-xl
        leading-loose
        tracking-wide
        
        /* 4. The Ink
           Dark stone, high contrast but organic.
        */
        text-stone-800
        
        /* 5. Interaction
           Selectable for quoting, but otherwise passive.
        */
        select-text
        cursor-text
        
        ${className}
      `}
      style={{
        WebkitUserSelect: 'text',
        userSelect: 'text',
      }}
    >
      {children}
    </div>
  );
}