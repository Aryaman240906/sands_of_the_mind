// ui/overlays/BottomSheetContainer.tsx
// A secondary surface that slides up to offer context.
// Ideal for mobile-first workflows, filters, and quick edits.

import React, { useEffect } from 'react';

interface BottomSheetContainerProps {
  isOpen: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const BottomSheetContainer: React.FC<BottomSheetContainerProps> = ({
  isOpen,
  onDismiss,
  children,
  className = ''
}) => {
  // 1. Lock Body Scroll & Handle Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent rubber-banding on iOS
      document.body.style.touchAction = 'none'; 
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onDismiss?.();
      };
      
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onDismiss]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* The Backdrop: Blurs the context behind */}
      <div
        className="
          absolute inset-0 
          bg-stone-900/20 backdrop-blur-[2px] 
          transition-opacity duration-500 ease-out
          animate-in fade-in
        "
        onClick={onDismiss}
        aria-hidden="true"
      />
      
      {/* The Sheet: Slides up on mobile, fades in on Desktop */}
      <div
        className={`
          relative w-full sm:max-w-lg
          bg-stone-50 
          rounded-t-3xl sm:rounded-2xl
          shadow-[0_-8px_30px_rgba(0,0,0,0.12)]
          max-h-[90vh] overflow-y-auto
          pb-safe /* Respect iOS Home Indicator */
          
          /* Entrance Physics */
          animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-4 sm:fade-in sm:zoom-in-95
          duration-500 cubic-bezier(0.32, 0.72, 0, 1) /* Spring-like release */
          
          ${className}
        `}
      >
        {/* The Drag Handle (Affordance) */}
        <div 
          className="sticky top-0 z-10 w-full flex justify-center pt-3 pb-5 bg-stone-50 cursor-grab active:cursor-grabbing"
          onClick={onDismiss} // Optional: clicking handle closes it
        >
          <div className="w-12 h-1.5 bg-stone-200 rounded-full" />
        </div>

        {/* Content Container */}
        <div className="px-6 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
};