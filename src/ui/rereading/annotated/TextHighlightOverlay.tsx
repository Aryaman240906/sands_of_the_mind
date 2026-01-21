// TextHighlightOverlay.tsx
// Soft, reversible highlighting that feels like a watercolor wash.
// Uses box-decoration-break to ensure elegance across line breaks.

import React from 'react';

interface TextHighlightOverlayProps {
  children: React.ReactNode;
  highlighted?: boolean;
  tone?: 'insight' | 'memory' | 'neutral';
  className?: string;
}

const toneMap = {
  // A warm, sun-faded yellow/amber. Used for realizations.
  insight: 'bg-amber-200/30',
  
  // A solid, grounding stone grey. Used for emphasis.
  memory: 'bg-stone-300/40',
  
  // A subtle tint, barely visible. Used for general marking.
  neutral: 'bg-stone-200/30',
} as const;

export default function TextHighlightOverlay({
  children,
  highlighted = false,
  tone = 'insight',
  className = '',
}: TextHighlightOverlayProps) {
  return (
    <mark
      className={`
        /* 1. The Physics of Ink
           decoration-clone: Ensures that if text wraps, each line gets 
           its own padding and rounded corners, rather than one jagged block.
        */
        box-decoration-clone
        
        /* 2. Organic Shape
           px-1: Pushes the color slightly away from the letterforms.
           rounded: Softens the edges so it doesn't look like a computer selection.
        */
        px-1 -mx-1
        rounded-[0.2em]
        
        /* 3. Color Transition
           The highlight shouldn't snap on; it should soak in.
        */
        transition-colors duration-700 ease-out
        
        /* 4. State Management */
        ${highlighted ? toneMap[tone] : 'bg-transparent text-inherit'}
        
        ${className}
      `}
      data-highlighted={highlighted}
    >
      {children}
    </mark>
  );
}