// WritingCanvas.tsx
// Primary writing surface container.
// Simulates the physical sensation of a clean, open page.
// Establishes the "Sacred Space" where thoughts are safe.

import React from 'react';

interface WritingCanvasProps {
  children: React.ReactNode;
  className?: string;
}

export default function WritingCanvas({
  children,
  className = '',
}: WritingCanvasProps) {
  return (
    <div
      className={`
        relative w-full min-h-screen
        flex flex-col items-center
        /* The "Fresh Page" Base Color */
        bg-stone-50
        text-stone-800
        selection:bg-amber-100/60 selection:text-stone-900
        ${className}
      `}
      role="main"
      aria-label="Writing Surface"
    >
      {/* 1. Ambient Lighting: 
         A subtle radial glow that mimics a desk lamp or overhead light 
         hitting the center of the paper, creating a natural focal point.
      */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#faf9f6] to-stone-100 opacity-80 pointer-events-none" 
      />

      {/* 2. Paper Texture: 
         Extremely faint noise. This provides "tooth" to the surface,
         preventing the stark, clinical feeling of pure digital white (#FFFFFF).
      */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. The Content Column: 
         Centers the writing experience while allowing infinite vertical growth.
      */}
      <div className="relative z-10 w-full flex-grow flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}