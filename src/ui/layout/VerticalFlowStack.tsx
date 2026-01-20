// VerticalFlowStack.tsx
// Consistent vertical spacing between children with rhythm preservation.
// Manages the "Breath" of the layout—ensuring elements never crowd each other.

import React from 'react';

interface VerticalFlowStackProps {
  children: React.ReactNode;
  /* Rhythm Scale:
    - tight:   Grouped items (e.g., label + input).
    - normal:  Standard content flow (e.g., paragraphs).
    - relaxed: Distinct thoughts or cards.
    - loose:   Major sectional shifts (the "silence" between topics).
  */
  spacing?: 'tight' | 'normal' | 'relaxed' | 'loose';
  className?: string;
}

const spacingMap = {
  tight: 'gap-6',      // 1.5rem / 24px
  normal: 'gap-10',    // 2.5rem / 40px
  relaxed: 'gap-20',   // 5rem   / 80px
  loose: 'gap-32',     // 8rem   / 128px
} as const;

export default function VerticalFlowStack({
  children,
  spacing = 'normal',
  className = '',
}: VerticalFlowStackProps) {
  return (
    <div 
      className={`
        flex flex-col w-full
        ${spacingMap[spacing]} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}