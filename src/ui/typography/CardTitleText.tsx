// ui/typography/CardTitleText.tsx
// The object-level voice.
// Used for individual card headers, entry titles, or widget names.

import React from 'react';

interface CardTitleTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h3' | 'h4' | 'h5' | 'p' | 'div';
}

export const CardTitleText: React.FC<CardTitleTextProps> = ({
  children,
  className = '',
  as: Component = 'h4'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Distinct Narrative Serif */
        font-serif 
        text-lg md:text-xl 
        font-medium 
        text-stone-800 
        
        /* Rhythm */
        leading-snug 
        tracking-tight
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};