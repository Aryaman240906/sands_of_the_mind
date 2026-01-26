// ui/typography/AppTitleText.tsx
// The primary identity voice.
// Used for page headers (e.g., "Memories", "Insights").

import React from 'react';

interface AppTitleTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'span'; // Polymorphic support for semantic correctness
}

export const AppTitleText: React.FC<AppTitleTextProps> = ({
  children,
  className = '',
  as: Component = 'h1'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Literary Serif */
        font-serif 
        text-3xl md:text-4xl lg:text-5xl
        font-medium 
        text-stone-800 
        
        /* Spacing & Rhythm */
        tracking-tight 
        leading-tight
        
        /* Subtle Entrance */
        animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};