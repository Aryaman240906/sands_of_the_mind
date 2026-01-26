// ui/typography/BodyPrimaryText.tsx
// The standard UI interface voice.
// Used for instructions, descriptions, and general content.

import React from 'react';

interface BodyPrimaryTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'div' | 'span';
}

export const BodyPrimaryText: React.FC<BodyPrimaryTextProps> = ({
  children,
  className = '',
  as: Component = 'p'
}) => {
  return (
    <Component 
      className={`
        /* Typography: Clean Sans-Serif */
        font-sans 
        text-sm md:text-base 
        font-normal 
        
        /* Color: Soft Charcoal for comfort */
        text-stone-600 
        
        /* Spacing: Relaxed for easy scanning */
        leading-relaxed
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
};