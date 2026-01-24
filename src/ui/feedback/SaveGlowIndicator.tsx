// ui/feedback/SaveGlowIndicator.tsx
// A subconscious visual cue for persistence.
// Mimics a slow heartbeat or "ink drying" rather than a digital write operation.

import React, { useEffect, useState } from 'react';

interface SaveGlowIndicatorProps {
  state?: 'idle' | 'saving' | 'saved' | 'error';
  className?: string;
}

export const SaveGlowIndicator: React.FC<SaveGlowIndicatorProps> = ({
  state = 'idle',
  className = ''
}) => {
  const [visualState, setVisualState] = useState(state);

  // Manage internal visual transitions to ensure the "Saved" state 
  // is visible long enough to be registered, even if the API is fast.
  useEffect(() => {
    if (state === 'saving') {
      setVisualState('saving');
    } else if (state === 'saved') {
      setVisualState('saved');
      const timer = setTimeout(() => setVisualState('idle'), 2000); // Linger for 2s
      return () => clearTimeout(timer);
    } else if (state === 'error') {
      setVisualState('error');
    } else {
      setVisualState('idle');
    }
  }, [state]);

  const isVisible = visualState !== 'idle';

  return (
    <div
      className={`
        flex items-center gap-2
        transition-opacity duration-700 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      aria-hidden="true" // Purely decorative, assuming text status exists elsewhere for screen readers
    >
      {/* The Light Source */}
      <div 
        className={`
          w-2 h-2 rounded-full
          transition-all duration-500
          ${visualState === 'saving' ? 'bg-amber-400/60 shadow-[0_0_8px_rgba(251,191,36,0.4)] animate-pulse' : ''}
          ${visualState === 'saved' ? 'bg-stone-400/40 shadow-none scale-90' : ''}
          ${visualState === 'error' ? 'bg-stone-400/20' : ''} /* We don't use red for errors here, just subtle gray */
        `}
      />
      
      {/* Optional Text Label for clarity (fades in only when needed) */}
      <span 
        className={`
          font-serif text-[10px] italic text-stone-300
          transition-all duration-500
          ${visualState === 'saving' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}
        `}
      >
        saving...
      </span>
    </div>
  );
};