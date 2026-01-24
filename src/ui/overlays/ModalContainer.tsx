// ui/overlays/ModalContainer.tsx
// A focused layer that feels like stepping into a quiet side room.
// Uses blur and gentle scaling to shift focus without jarring interruptions.

import React, { useEffect, useRef } from 'react';

interface ModalContainerProps {
  isOpen: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onDismiss,
  children,
  className = '',
  size = 'md'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onDismiss]);

  if (!isOpen) return null;

  // Size mapping
  const maxWidthClass = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }[size];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* The Backdrop: "Depth of Field" 
        Instead of blacking out the back, we blur it to push it away.
      */}
      <div
        className="
          absolute inset-0 
          bg-stone-900/20 backdrop-blur-sm 
          transition-opacity duration-500 ease-out
          animate-in fade-in
        "
        onClick={onDismiss}
        aria-hidden="true"
      />
      
      {/* The Surface: "Lifted Paper" 
        Enters with a gentle zoom to simulate coming closer to the eye.
      */}
      <div
        ref={modalRef}
        className={`
          relative 
          bg-stone-50 
          rounded-xl sm:rounded-2xl
          border border-stone-100
          shadow-xl shadow-stone-200/50
          w-full ${maxWidthClass}
          max-h-[90vh] overflow-y-auto
          scrollbar-hide
          
          /* Entrance Physics */
          animate-in fade-in zoom-in-[0.98] slide-in-from-bottom-2 
          duration-300 ease-out
          
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};