// archive/ArchiveDeleteTrigger.tsx
// Deletion affordance as ownership without destructive emphasis.
// Implements a "Double-Tap" safety mechanism to avoid jarring modals.

import React, { useState, useEffect } from 'react';

interface ArchiveDeleteTriggerProps {
  onDelete: () => void;
  className?: string;
  label?: string;
}

export default function ArchiveDeleteTrigger({
  onDelete,
  className = '',
  label = 'Delete',
}: ArchiveDeleteTriggerProps) {
  const [isArming, setIsArming] = useState(false);

  // Auto-reset the "Armed" state after 3 seconds if not confirmed
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isArming) {
      timer = setTimeout(() => setIsArming(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [isArming]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent card click
    
    if (isArming) {
      // Second click: Execute
      onDelete();
      setIsArming(false);
    } else {
      // First click: Arm
      setIsArming(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        /* Base Typography */
        text-[10px] uppercase tracking-wider font-mono
        transition-all duration-300 ease-out
        
        /* State Styling */
        ${isArming 
          ? 'text-red-400 font-medium' 
          : 'text-stone-300 hover:text-stone-500'
        }
        
        ${className}
      `}
      aria-label={isArming ? "Confirm deletion" : "Delete entry"}
      aria-live="polite"
    >
      {isArming ? 'Confirm?' : label}
    </button>
  );
}