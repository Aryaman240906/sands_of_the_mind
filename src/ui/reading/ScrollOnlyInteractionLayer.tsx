// ScrollOnlyInteractionLayer.tsx
// Enforces a passive consumption mode by neutralizing interactive elements.
// Creates a "Museum Glass" effect: look and scroll, but don't touch.

import React from 'react';

interface ScrollOnlyInteractionLayerProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export default function ScrollOnlyInteractionLayer({
  children,
  active = true,
  className = '',
}: ScrollOnlyInteractionLayerProps) {
  return (
    <div
      className={`
        relative w-full
        /* Cursor Logic: Only I-beam (text) or Default (arrow). Never Pointer (hand). */
        cursor-default
        
        /* CSS Neutralization: 
           If active, force all buttons, links, and inputs to be inert.
           They become ghost elements—visible but untouchable.
        */
        ${active ? '[&_button]:pointer-events-none [&_a]:pointer-events-none [&_input]:pointer-events-none' : ''}
        
        ${className}
      `}
      
      // Capture Phase: Stop events BEFORE they reach children
      onClickCapture={(e) => {
        if (!active) return;
        
        // We allow the event to propagate ONLY if it's a selection-related click.
        // But since we used pointer-events-none on buttons above, 
        // we mainly need to stop other bubbling interactions here.
        const target = e.target as HTMLElement;
        
        // Double-check safeguards for any interactive elements not caught by CSS
        const isInteractive = target.closest('button, a, input, [role="button"]');
        
        if (isInteractive) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      
      // Ensure scrolling still works on touch devices even if pointers are blocked
      style={{ 
        touchAction: 'pan-y',
        WebkitUserSelect: 'text',
        userSelect: 'text'
      }}
    >
      {children}
    </div>
  );
}