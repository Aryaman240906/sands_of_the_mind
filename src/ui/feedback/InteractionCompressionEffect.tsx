// ui/feedback/InteractionCompressionEffect.tsx
// A universal wrapper that adds "physicality" to any interactive element.
// Simulates surface tension and spring-back mechanics.

import React, { useState } from 'react';

interface InteractionCompressionEffectProps {
  children: React.ReactNode;
  onInteract?: () => void;
  disabled?: boolean;
  className?: string;
  scale?: number; // Depth of compression (default 0.97)
}

export const InteractionCompressionEffect: React.FC<InteractionCompressionEffectProps> = ({
  children,
  onInteract,
  disabled = false,
  className = '',
  scale = 0.97
}) => {
  const [isCompressed, setIsCompressed] = useState(false);

  // -- Handlers --

  const handlePressStart = () => {
    if (!disabled) setIsCompressed(true);
  };

  const handlePressEnd = () => {
    if (!disabled && isCompressed) {
      setIsCompressed(false);
      onInteract?.();
    }
  };

  const handleCancel = () => {
    setIsCompressed(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsCompressed(true);
      // Simulate mechanical release after short delay
      setTimeout(() => {
        setIsCompressed(false);
        onInteract?.();
      }, 150);
    }
  };

  return (
    <div
      role={onInteract ? "button" : undefined}
      tabIndex={onInteract && !disabled ? 0 : undefined}
      onPointerDown={handlePressStart}
      onPointerUp={handlePressEnd}
      onPointerLeave={handleCancel}
      onPointerCancel={handleCancel}
      onKeyDown={handleKeyDown}
      className={`
        /* Base Logic */
        cursor-pointer select-none
        touch-manipulation
        
        /* The "Spring" Physics: Fast in, Slow out */
        transition-transform 
        ${isCompressed ? 'duration-100 ease-out' : 'duration-300 cubic-bezier(0.25, 1, 0.5, 1)'}
        
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{
        transform: isCompressed 
          ? `scale(${scale}) translateY(1px)` // Press IN and DOWN
          : 'scale(1) translateY(0)'
      }}
    >
      {children}
    </div>
  );
};