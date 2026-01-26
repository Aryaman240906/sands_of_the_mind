// ui/typography/PlaceholderText.tsx
// The ephemeral voice.
// Used for input prompts, empty states, and "ghost" text.

import React from 'react';

interface PlaceholderTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'div';
}

export const PlaceholderText: React.FC<PlaceholderTextProps> = ({
  children,
  className = '',
  as: Component = 'span'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Ghostly & Prompting */
        text-base md:text-lg
        font-light 
        italic 
        
        /* Color: Very low contrast to suggest "emptiness" */
        text-stone-300 
        
        /* UX: Non-interactive background feel */
        select-none
        cursor-text
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};