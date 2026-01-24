// ui/overlays/ConfirmationDialog.tsx
// A "Pause for Thought."
// Forces a conscious decision before a significant action.

import React from 'react';

interface ConfirmationDialogProps {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  isDestructive?: boolean;
  className?: string;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  title = "Confirm Action",
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  isDestructive = false,
  className = ''
}) => {
  return (
    <div className={`p-8 md:p-10 text-center space-y-8 ${className}`}>
      
      {/* Content Block */}
      <div className="space-y-3">
        {title && (
          <h2 className="font-serif text-xl md:text-2xl text-stone-800 tracking-tight">
            {title}
          </h2>
        )}
        
        <p className="font-sans text-sm md:text-base text-stone-500 leading-relaxed max-w-xs mx-auto">
          {message}
        </p>
      </div>
      
      {/* Action Row */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-3 sm:gap-4">
        {/* Cancel (Safe path) */}
        <button
          onClick={onCancel}
          className="
            w-full sm:w-auto px-6 py-3
            text-xs font-mono uppercase tracking-widest text-stone-500
            hover:bg-stone-100 hover:text-stone-700
            rounded-sm
            transition-colors duration-200
          "
        >
          {cancelLabel}
        </button>

        {/* Confirm (Commitment) */}
        <button
          onClick={onConfirm}
          className={`
            w-full sm:w-auto px-8 py-3
            text-xs font-mono uppercase tracking-widest text-white
            shadow-md shadow-stone-200/50
            rounded-sm
            transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:shadow-lg
            focus-visible:ring-2 focus-visible:ring-offset-2
            ${isDestructive 
              ? 'bg-rose-900/90 hover:bg-rose-800 focus-visible:ring-rose-900' 
              : 'bg-stone-800 hover:bg-stone-700 focus-visible:ring-stone-800'
            }
          `}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
};