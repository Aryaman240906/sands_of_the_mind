// MicrophoneControlButton.tsx
// Calm, reversible affordance to begin or end speaking.
// Uses organic shape shifting (Circle -> Square) instead of harsh icons.

import React from 'react';

interface MicrophoneControlButtonProps {
  recording?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function MicrophoneControlButton({
  recording = false,
  disabled = false,
  onClick,
  className = '',
}: MicrophoneControlButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      aria-label={recording ? 'Stop recording' : 'Start recording'}
      aria-pressed={recording}
      className={`
        relative group
        flex items-center justify-center
        h-20 w-20 md:h-24 md:w-24
        rounded-full
        transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)
        
        /* Surface Materiality */
        ${recording 
          ? 'bg-stone-200/50 scale-95 ring-1 ring-stone-300/50' // Active: Pressed in, subtle warmth
          : 'bg-stone-100 hover:bg-white hover:shadow-lg shadow-sm scale-100' // Resting: Raised, cool
        }
        
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
        ${className}
      `}
    >
      {/* The "Pulse" Emitter (Behind the button) 
          Visible only when recording to show the button is "alive".
      */}
      <div className={`
        absolute inset-0 rounded-full border border-stone-300
        transition-all duration-1000
        ${recording ? 'animate-ping opacity-30 duration-[2000ms]' : 'opacity-0 scale-50'}
      `} />

      {/* The Morphing Core (Circle <-> Square) */}
      <div
        className={`
          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${recording 
            ? 'w-8 h-8 rounded-md bg-stone-600' // Stop State (Square)
            : 'w-8 h-8 rounded-full bg-rose-900/10 group-hover:bg-rose-900/20' // Mic State (Circle/Hole)
          }
        `}
      >
        {/* Optional: Micro-icon inside the resting state for clarity, 
            fading out when recording starts 
        */}
        <div className={`
          flex items-center justify-center h-full w-full text-stone-500
          transition-opacity duration-300
          ${recording ? 'opacity-0' : 'opacity-100'}
        `}>
           {/* Simple Mic SVG */}
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
             <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
           </svg>
        </div>
      </div>
    </button>
  );
}