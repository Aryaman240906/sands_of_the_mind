// ui/typography/HelperCopyText.tsx
// The instructional voice.
// Used for input hints, form explanations, and functional footnotes.

import React from 'react';

interface HelperCopyTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'label';
}

export const HelperCopyText: React.FC<HelperCopyTextProps> = ({
  children,
  className = '',
  as: Component = 'p'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Small Sans */
        font-sans 
        text-xs 
        font-normal 
        
        /* Color: Recessive gray */
        text-stone-400 
        
        /* Spacing */
        leading-relaxed 
        tracking-normal
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};