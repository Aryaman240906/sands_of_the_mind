// EnhancedLineHeightWrapper.tsx
// Increases vertical rhythm for comfortable rereading without strain.
// Controls the "Breath" of the text—adding silence between thoughts.

import React from 'react';

interface EnhancedLineHeightWrapperProps {
  children: React.ReactNode;
  density?: 'standard' | 'relaxed' | 'spacious';
  className?: string;
}

// Typographic scales tuned for slow consumption
const rhythmMap = {
  // Standard: Already generous (2.0), matching the 'leading-loose' of the writing canvas
  standard: 'leading-loose',
  
  // Relaxed: The default "Dune" state (2.2). Encourages a measured pace.
  relaxed: 'leading-[2.2]',
  
  // Spacious: Near-poetic spacing (2.5). Isolates lines for deep contemplation.
  spacious: 'leading-[2.5]',
} as const;

export default function EnhancedLineHeightWrapper({
  children,
  density = 'relaxed', // Default to slower reading
  className = '',
}: EnhancedLineHeightWrapperProps) {
  return (
    <div 
      className={`
        /* The Rhythm */
        ${rhythmMap[density]} 
        
        /* Layout Stability */
        block w-full 
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}