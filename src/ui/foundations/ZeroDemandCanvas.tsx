// ZeroDemandCanvas.tsx
// Neutral surface that does not suggest action.
// Defines a "clearing" in the visual noise—a flat, open space 
// that feels complete whether empty or filled.

import React from 'react';

interface ZeroDemandCanvasProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ZeroDemandCanvas({
  children,
  className = '',
}: ZeroDemandCanvasProps) {
  return (
    <div
      className={`
        relative w-full
        min-h-[50vh] md:min-h-[60vh]
        flex flex-col items-center justify-center
        isolate
        ${className}
      `}
    >
      {/* Visual Nuance: A very subtle "light pool" in the center. 
         This creates a subconscious focal point (a "clearing" in the woods/dunes)
         so the user knows where content resides, without using a "box" or "input field"
         that demands interaction.
      */}
      <div 
        className="absolute inset-0 -z-10 opacity-60 pointer-events-none rounded-[3rem]" 
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 65%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-0 w-full transition-opacity duration-700">
        {children}
      </div>
    </div>
  );
}