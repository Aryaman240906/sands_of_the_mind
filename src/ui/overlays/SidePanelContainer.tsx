// ui/overlays/SidePanelContainer.tsx
// A full-height sheet for navigation or detailed inspection.
// slides in laterally, preserving vertical context.

import React, { useEffect } from 'react';

interface SidePanelContainerProps {
  isOpen: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
  className?: string;
}

export const SidePanelContainer: React.FC<SidePanelContainerProps> = ({
  isOpen,
  onDismiss,
  children,
  side = 'right',
  className = ''
}) => {
  // 1. Lock Body Scroll & Handle Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onDismiss?.();
      };
      
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onDismiss]);

  if (!isOpen) return null;

  const isRight = side === 'right';

  return (
    <div
      className={`
        fixed inset-0 z-50 flex
        ${isRight ? 'justify-end' : 'justify-start'}
      `}
      role="dialog"
      aria-modal="true"
    >
      {/* The Backdrop */}
      <div
        className="
          absolute inset-0 
          bg-stone-900/10 backdrop-blur-[2px] 
          transition-opacity duration-500 ease-out
          animate-in fade-in
        "
        onClick={onDismiss}
        aria-hidden="true"
      />
      
      {/* The Panel Surface */}
      <div
        className={`
          relative h-full w-full max-w-md
          bg-stone-50 
          shadow-2xl shadow-stone-300/50
          overflow-y-auto
          
          /* Border Logic based on side */
          ${isRight ? 'border-l border-stone-200' : 'border-r border-stone-200'}

          /* Entrance Physics */
          animate-in 
          ${isRight ? 'slide-in-from-right-full' : 'slide-in-from-left-full'}
          duration-500 cubic-bezier(0.16, 1, 0.3, 1) /* Smooth deceleration */
          
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};