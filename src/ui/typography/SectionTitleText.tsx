// ui/typography/SectionTitleText.tsx
// The system/utility voice.
// Used for labels, group headers, and metadata tags.

import React from 'react';

interface SectionTitleTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h3' | 'h4' | 'h5' | 'span' | 'div';
}

export const SectionTitleText: React.FC<SectionTitleTextProps> = ({
  children,
  className = '',
  as: Component = 'h3'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Technical/System Mono */
        font-mono 
        text-[10px] md:text-xs 
        uppercase 
        tracking-[0.2em] 
        font-medium
        
        /* Color: Receding to let content shine */
        text-stone-400
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};