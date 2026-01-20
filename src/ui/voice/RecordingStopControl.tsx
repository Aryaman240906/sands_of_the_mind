// RecordingStopControl.tsx
// Gentle conclusion affordance.
// Signals "I have finished speaking" without the urgency of an emergency stop.

import React from 'react';

interface RecordingStopControlProps {
  onStop: () => void;
  visible?: boolean;
  className?: string;
}

export default function RecordingStopControl({
  onStop,
  visible = true,
  className = '',
}: RecordingStopControlProps) {
  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={onStop}
      type="button"
      className={`
        group relative
        flex items-center gap-3
        px-6 py-2.5
        rounded-full
        
        /* Materiality: A solid, grounding presence */
        bg-stone-200/50 backdrop-blur-sm
        border border-stone-300/30
        
        /* Typography */
        text-xs font-semibold uppercase tracking-wider text-stone-600
        
        /* Interaction */
        transition-all duration-300 ease-out
        hover:bg-stone-800 hover:text-stone-50 hover:border-transparent
        hover:shadow-md
        
        /* Entrance */
        animate-in fade-in slide-in-from-bottom-2 duration-1000 fill-mode-forwards
        
        ${className}
      `}
      aria-label="Finish recording"
    >
      {/* Icon: A solid square that creates a feeling of 'stopping' or 'landing' */}
      <div className="
        w-2.5 h-2.5 rounded-[2px] bg-current 
        transition-colors duration-300
      " />

      <span>Finish</span>
    </button>
  );
}