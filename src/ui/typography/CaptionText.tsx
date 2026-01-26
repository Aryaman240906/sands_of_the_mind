// ui/typography/CaptionText.tsx
// The metadata voice.
// Used for timestamps, counters, IDs, and technical details.

import React from 'react';

interface CaptionTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'div' | 'time';
}

export const CaptionText: React.FC<CaptionTextProps> = ({
  children,
  className = '',
  as: Component = 'span'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Technical Mono */
        font-mono 
        text-xs 
        font-normal
        
        /* Color: Low contrast metadata */
        text-stone-400 
        
        /* Spacing for legibility of numbers/codes */
        tracking-wide 
        leading-normal
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};