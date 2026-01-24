// ui/overlays/DismissOverlay.tsx
// The atmospheric layer that separates focus from background.
// Uses blur to simulate depth of field.

import React from 'react';

interface DismissOverlayProps {
  onDismiss?: () => void;
  className?: string;
  isVisible?: boolean; // Can be used for controlled animations
}

export const DismissOverlay: React.FC<DismissOverlayProps> = ({
  onDismiss,
  className = '',
  isVisible = true
}) => {
  return (
    <div
      className={`
        absolute inset-0 z-[-1]
        bg-stone-900/20 
        backdrop-blur-[2px]
        cursor-pointer
        
        /* Entrance Physics */
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 backdrop-blur-[2px]' : 'opacity-0 backdrop-blur-none'}
        
        ${className}
      `}
      onClick={onDismiss}
      aria-hidden="true"
      data-testid="dismiss-overlay"
    />
  );
};