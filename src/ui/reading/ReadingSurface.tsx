// ReadingSurface.tsx
// Top-level container establishing the emotional baseline for reading mode.
// Enforces passivity: no editing, no urgency, just consumption.

import React from 'react';

interface ReadingSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export default function ReadingSurface({
  children,
  className = '',
}: ReadingSurfaceProps) {
  return (
    <div
      role="article"
      className={`
        /* 1. Layout & Dimensions */
        relative min-h-screen w-full
        flex flex-col items-center
        
        /* 2. Materiality: "Archival Paper"
           Slightly warmer and more solid than the writing canvas. 
           It feels finished, settled.
        */
        bg-[#fdfcf8] text-stone-800
        
        /* 3. Typography Physics
           - subpixel-antialiased: Ensures maximum sharpness for long-form reading.
           - selection: Neutral gray highlight prevents "blue flashes" from breaking immersion.
        */
        antialiased md:subpixel-antialiased
        selection:bg-stone-200/60 selection:text-stone-900
        
        /* 4. Interaction model: Passive
           The default cursor is an arrow, not a pointer. 
           This subtle cue tells the user "there is nothing to click here".
        */
        cursor-default
        
        ${className}
      `}
    >
      {/* Optional: A very faint, static noise texture can be added here 
        if consistent with the WritingCanvas, but kept even more subtle 
        to ensure zero interference with legibility. 
      */}
      <div 
        className="absolute inset-0 opacity-[0.01] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Container:
          Centralizes the text column while maintaining the "breath" of the page margins.
      */}
      <div className="relative z-10 w-full flex-grow">
        {children}
      </div>
    </div>
  );
}