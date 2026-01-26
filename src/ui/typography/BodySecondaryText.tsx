// ui/typography/BodySecondaryText.tsx
// The supporting voice.
// Used for subtitles, hints, and context that is less critical than primary text.

import React from 'react';

interface BodySecondaryTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export const BodySecondaryText: React.FC<BodySecondaryTextProps> = ({
  children,
  className = '',
  as: Component = 'p'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Smaller Sans */
        font-sans 
        text-xs md:text-sm 
        font-normal 
        
        /* Color: Muted Stone to recede visually */
        text-stone-500 
        
        /* Spacing */
        leading-relaxed
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};