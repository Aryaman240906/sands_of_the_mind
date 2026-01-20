// RecordingCancelControl.tsx
// Safe, consequence-free exit from recording.
// A subtle "escape hatch" that avoids visual competition with the primary action.

import React from 'react';

interface RecordingCancelControlProps {
  onCancel: () => void;
  visible?: boolean;
  className?: string;
}

export default function RecordingCancelControl({
  onCancel,
  visible = true,
  className = '',
}: RecordingCancelControlProps) {
  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={onCancel}
      type="button"
      className={`
        group relative
        flex items-center gap-2
        px-5 py-2
        rounded-full
        
        /* Typography: Discreet and small */
        text-xs font-medium tracking-wide uppercase text-stone-400
        
        /* Interaction: Only turns "red/warning" on deliberate hover */
        transition-all duration-300 ease-out
        hover:bg-rose-50 hover:text-rose-600
        
        /* Entrance Animation */
        animate-in fade-in slide-in-from-bottom-2 duration-1000 fill-mode-forwards
        
        ${className}
      `}
      aria-label="Discard recording"
    >
      {/* Icon: Simple 'X' that rotates slightly on hover */}
      <svg 
        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-90" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

      <span>Cancel</span>
    </button>
  );
}