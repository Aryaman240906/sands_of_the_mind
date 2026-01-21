// sharing/ShareConfirmationDialog.tsx
// Final consent checkpoint with clear acknowledgment.
// Stops the flow to ensure the user consciously accepts the boundary crossing.

import React from 'react';

interface ShareConfirmationDialogProps {
  children: React.ReactNode;
  visible?: boolean;
  onCancel?: () => void;
  className?: string;
}

export default function ShareConfirmationDialog({
  children,
  visible = false,
  onCancel,
  className = '',
}: ShareConfirmationDialogProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      className={`
        fixed inset-0 z-[60] 
        flex items-center justify-center 
        bg-stone-900/20 backdrop-blur-sm
        animate-in fade-in duration-300
        ${className}
      `}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="share-confirmation-title"
      aria-describedby="share-confirmation-desc"
    >
      {/* Click outside to cancel (Optional safety valve) */}
      <div className="absolute inset-0" onClick={onCancel} aria-hidden="true" />

      <div 
        className={`
          relative z-10
          w-full max-w-sm mx-4
          bg-white 
          border border-stone-200
          rounded-lg
          shadow-xl shadow-stone-900/5
          p-8
          space-y-8
          
          /* Entrance Animation */
          animate-in zoom-in-95 fade-in slide-in-from-bottom-2 duration-300 ease-out
        `}
      >
        <div className="space-y-4 text-center">
          {/* Icon: A visual pause signal */}
          <div className="mx-auto w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="space-y-2">
            <h2
              id="share-confirmation-title"
              className="font-serif text-xl text-stone-800"
            >
              Confirm Sharing
            </h2>
            <p 
              id="share-confirmation-desc"
              className="text-sm font-sans text-stone-500 leading-relaxed"
            >
              This entry will leave your private journal. 
              <br />
              Once shared, it is outside this system's protection.
            </p>
          </div>
        </div>

        {/* Action Area */}
        <div className="space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}