// ReadOnlyEntryBlock.tsx
// Immutable entry presentation without modification affordances.
// Renders the "Voice of the Past" with archival dignity.

import React from 'react';

interface ReadOnlyEntryBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function ReadOnlyEntryBlock({
  children,
  className = '',
}: ReadOnlyEntryBlockProps) {
  return (
    <article
      className={`
        /* 1. The Voice (Typography)
           Serif font is essential here to signal "Narrative/Memory" 
           vs the Sans-Serif "Interface".
        */
        font-serif
        
        /* 2. The Scale
           Slightly larger than standard input to encourage "lean back" reading.
        */
        text-lg md:text-xl
        
        /* 3. The Rhythm
           leading-[2.2] is wider than standard 'loose'. 
           It creates silence between lines.
        */
        leading-[2.2]
        tracking-wide
        
        /* 4. The Materiality
           Stone-800 is "Dried Ink" - high contrast but not digital black.
        */
        text-stone-800
        
        /* 5. Structure
           Preserves original stanza breaks and spacing.
        */
        whitespace-pre-wrap
        break-words
        
        /* 6. Interaction
           Selectable (for copying) but distinct cursor.
        */
        select-text
        cursor-text
        
        ${className}
      `}
      
      // Explicitly allow selection (passive interaction)
      style={{
        WebkitUserSelect: 'text',
        userSelect: 'text',
      }}
    >
      {children}
    </article>
  );
}