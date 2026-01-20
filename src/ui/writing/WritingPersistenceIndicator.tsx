// WritingPersistenceIndicator.tsx
// Quiet reassurance that writing is being preserved.
// Replaces aggressive spinners with a gentle, organic "heartbeat".

import React, { useEffect, useState } from 'react';

interface WritingPersistenceIndicatorProps {
  status?: 'idle' | 'saving' | 'saved' | 'error';
  lastSavedAt?: Date;
  className?: string;
}

export default function WritingPersistenceIndicator({
  status = 'idle',
  lastSavedAt,
  className = '',
}: WritingPersistenceIndicatorProps) {
  // Local state to manage the "linger" effect of the 'saved' state
  const [displayStatus, setDisplayStatus] = useState(status);

  // When status changes to 'saved', keep it visible for 2 seconds, then go to 'idle'
  useEffect(() => {
    if (status === 'saved') {
      setDisplayStatus('saved');
      const timer = setTimeout(() => setDisplayStatus('idle'), 2500);
      return () => clearTimeout(timer);
    }
    setDisplayStatus(status);
  }, [status]);

  // Configuration for each state's visual appearance
  const statusConfig = {
    idle: { 
      opacity: 'opacity-0', 
      icon: null, 
      text: '' 
    },
    saving: { 
      opacity: 'opacity-100', 
      // A gentle, slow pulse indicating life/activity
      icon: <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" />, 
      text: 'Preserving...' 
    },
    saved: { 
      opacity: 'opacity-60', 
      // A static dot indicating stability
      icon: <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />, 
      text: 'Saved' 
    },
    error: {
      opacity: 'opacity-100',
      // Amber warning color, distinct but not red/aggressive
      icon: <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />,
      text: 'Not saved'
    }
  };

  const config = statusConfig[displayStatus] || statusConfig.idle;

  return (
    <div
      className={`
        flex items-center gap-2
        text-xs font-medium tracking-wide text-stone-400 uppercase
        transition-all duration-1000 ease-out
        select-none
        ${config.opacity}
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      {/* The Visual Anchor (Dot) */}
      {config.icon}
      
      {/* The Label (Optional: visible on larger screens, or just for screen readers) */}
      <span className="hidden md:inline-block">
        {config.text}
      </span>
      
      {/* Screen Reader Only: Timestamp for accessibility */}
      {lastSavedAt && (
        <span className="sr-only">
          Last saved at {lastSavedAt.toLocaleTimeString()}
        </span>
      )}
    </div>
  );
}