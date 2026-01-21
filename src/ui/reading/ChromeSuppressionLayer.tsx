// ChromeSuppressionLayer.tsx
// Visually dampens navigation, actions, and system noise during deep reading.
// Acts like a "Cinema Mode" that vignettes the periphery.

import React from 'react';

interface ChromeSuppressionLayerProps {
  children: React.ReactNode;
  active?: boolean; // Renamed from 'suppressed' for clarity (Active = Suppression is ON)
  className?: string;
}

export default function ChromeSuppressionLayer({
  children,
  active = false,
  className = '',
}: ChromeSuppressionLayerProps) {
  return (
    <div
      className={`relative ${className}`}
      // 'isolation: isolate' creates a new stacking context, ensuring 
      // the suppression effects don't bleed out to the global app shell unexpectedly.
      style={{ isolation: 'isolate' }}
    >
      {/* The Suppression Curtain:
        A fixed overlay that sits ON TOP of the interface but BELOW the content.
        It uses a gradient to specifically target the top/bottom chrome areas.
      */}
      <div
        className={`
          pointer-events-none fixed inset-0 z-40
          bg-gradient-to-b from-stone-50/95 via-stone-50/40 to-stone-50/95
          backdrop-blur-[2px]
          transition-opacity duration-1000 ease-in-out
          ${active ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      />

      {/* The Content Stage:
        When active, we explicitly lift the content (z-50) above the curtain.
        When inactive, it sits naturally in the flow.
      */}
      <div 
        className={`
          relative transition-all duration-1000
          ${active ? 'z-50 scale-[1.01]' : 'z-0 scale-100'}
        `}
      >
        {children}
      </div>
    </div>
  );
}