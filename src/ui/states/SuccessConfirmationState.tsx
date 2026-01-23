// ui/feedback/SuccessConfirmationState.tsx
// A discrete, high-contrast system acknowledgement.
// Feels like a mechanical "Click" confirming an action.

import React, { useEffect, useState } from 'react';

interface SuccessConfirmationStateProps {
  message: string;
  duration?: number;
  onComplete?: () => void;
  className?: string;
}

export const SuccessConfirmationState: React.FC<SuccessConfirmationStateProps> = ({
  message,
  duration = 3000,
  onComplete,
  className = ''
}) => {
  const [visible, setVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Start exit animation slightly before unmounting
    const exitTimer = setTimeout(() => {
      setIsLeaving(true);
    }, duration - 300); // 300ms exit transition

    const completeTimer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (!visible) return null;

  return (
    <div 
      className={`
        inline-flex items-center gap-3
        px-4 py-2.5
        rounded-full
        bg-stone-800 text-stone-50
        shadow-lg shadow-stone-200/50
        
        /* Animation Physics */
        transition-all duration-300 ease-out
        ${isLeaving 
          ? 'opacity-0 translate-y-2 scale-95' 
          : 'opacity-100 translate-y-0 scale-100 animate-in fade-in slide-in-from-bottom-2'
        }
        
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      {/* Icon: Precise Checkmark */}
      <svg 
        width="14" 
        height="14" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-stone-300"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>

      {/* Message: System Voice */}
      <span className="font-mono text-xs uppercase tracking-widest font-medium">
        {message}
      </span>
    </div>
  );
};