// RecordingStateIndicator.tsx
// Subtle confirmation that recording is occurring without alarm.
// Replaces the "On Air" warning light with a gentle, breathing presence.

import React from 'react';

interface RecordingStateIndicatorProps {
  active?: boolean;
  className?: string;
}

export default function RecordingStateIndicator({
  active = false,
  className = '',
}: RecordingStateIndicatorProps) {
  // We keep the component mounted but invisible to preserve layout space
  // or handle transitions smoothly if needed.
  return (
    <div
      className={`
        flex items-center gap-3
        transition-all duration-700 ease-in-out
        ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      {/* The Heartbeat: 
          A core dot with a pinging ring. 
          Uses Rose-400 for semantic clarity but low opacity for calmness.
      */}
      <div className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span 
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-20" 
        />
        <span 
          className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-400/60" 
        />
      </div>

      {/* The Label: 
          "Listening" feels more active and human than "Recording".
      */}
      <span className="
        text-[10px] uppercase tracking-[0.2em] font-medium 
        text-stone-400
      ">
        Listening
      </span>
    </div>
  );
}