// RecordingDurationMarker.tsx
// Minimalist timer to anchor the user in time without creating urgency.
// Uses tabular numerals to prevent layout jitter.

import React from 'react';

interface RecordingDurationMarkerProps {
  seconds: number;
  className?: string;
}

export default function RecordingDurationMarker({
  seconds,
  className = '',
}: RecordingDurationMarkerProps) {
  // Format MM:SS
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${mins}:${secs.toString().padStart(2, '0')}`;

  // Don't show 0:00 initially to keep the interface clean until action starts
  if (seconds === 0) return null;

  return (
    <div 
      className={`
        /* Typography: Monospace or Tabular nums essential for timers */
        font-mono text-xs font-medium tracking-widest text-stone-400
        
        /* Layout stability: Ensures the width doesn't fluctuate */
        tabular-nums
        
        /* Animation: Gentle entrance from below */
        animate-in fade-in slide-in-from-bottom-2 duration-700
        
        ${className}
      `}
      role="timer"
      aria-label="Recording duration"
    >
      {formatted}
    </div>
  );
}