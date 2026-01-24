// ui/feedback/ButtonPressFeedbackLayer.tsx
// Adds tactile depth to interactions.
// Uses scale compression to mimic physical resistance.

import React, { useState } from 'react';

interface ButtonPressFeedbackLayerProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
  as?: 'button' | 'div'; // Polymorphic support
}

export const ButtonPressFeedbackLayer: React.FC<ButtonPressFeedbackLayerProps> = ({
  children,
  onPress,
  disabled = false,
  className = '',
  as = 'div'
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    setIsPressed(true);
    e.currentTarget.setPointerCapture(e.pointerId); // Locks focus to this element
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (disabled) return;
    if (isPressed) {
      setIsPressed(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
      onPress?.();
    }
  };

  const handlePointerCancel = (e: React.PointerEvent) => {
    setIsPressed(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const Component = as;

  return (
    <Component
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerCancel}
      onPointerCancel={handlePointerCancel}
      role={onPress ? "button" : undefined}
      tabIndex={onPress && !disabled ? 0 : undefined}
      className={`
        cursor-pointer select-none
        transition-all duration-150 ease-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{
        transform: isPressed && !disabled ? 'scale(0.97) translateY(1px)' : 'scale(1) translateY(0)',
        opacity: isPressed && !disabled ? 0.8 : 1,
      }}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onPress && !disabled) {
          e.preventDefault();
          setIsPressed(true);
          setTimeout(() => {
            setIsPressed(false);
            onPress();
          }, 150); // Mimic mechanical key release time
        }
      }}
    >
      {children}
    </Component>
  );
};