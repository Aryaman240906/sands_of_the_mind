// AnnotationLayer.tsx
// Container for non-destructive meaning-making.
// Acts as a "Transparency Sheet" overlaying the immutable original text.

import React from 'react';

interface AnnotationLayerProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export default function AnnotationLayer({
  children,
  active = false,
  className = '',
}: AnnotationLayerProps) {
  return (
    <div
      aria-hidden={!active}
      className={`
        /* 1. Geometry
           Sits strictly on top of the text content.
           Requires parent to be 'relative'. 
        */
        absolute inset-0 z-10
        
        /* 2. Physics & Visibility 
           When inactive, it must be invisible AND permeable (pointer-events-none).
        */
        transition-opacity duration-700 ease-in-out
        ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        
        /* 3. Ink Simulation
           mix-blend-multiply ensures highlights darken the text 
           rather than sitting on top like plastic stickers.
        */
        mix-blend-multiply
        
        ${className}
      `}
      role="region"
      aria-label="Annotations"
    >
      {children}
    </div>
  );
}