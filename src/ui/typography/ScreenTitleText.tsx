// ui/typography/ScreenTitleText.tsx
// The secondary voice.
// Used for major section headers (e.g., "This Week", "Pattern Analysis").

import React from 'react';

interface ScreenTitleTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h2' | 'h3' | 'div';
}

export const ScreenTitleText: React.FC<ScreenTitleTextProps> = ({
  children,
  className = '',
  as: Component = 'h2'
}) => {
  return (
    <Component 
      className={`
        font-serif 
        text-2xl md:text-3xl 
        font-normal 
        text-stone-700 
        
        tracking-tight 
        leading-snug
        
        /* Subtle Entrance with slight delay */
        animate-in fade-in slide-in-from-bottom-1 duration-700 delay-100 ease-out
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};