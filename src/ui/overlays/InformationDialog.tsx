// ui/overlays/InformationDialog.tsx
// A quiet notification or detail view.
// Delivers knowledge without demanding an immediate complex decision.

import React from 'react';

interface InformationDialogProps {
  title?: string;
  message: string | React.ReactNode;
  dismissLabel?: string;
  onDismiss?: () => void;
  className?: string;
}

export const InformationDialog: React.FC<InformationDialogProps> = ({
  title,
  message,
  dismissLabel = 'Understood',
  onDismiss,
  className = ''
}) => {
  return (
    <div className={`p-8 md:p-10 text-center space-y-8 ${className}`}>
      
      {/* Content Block */}
      <div className="space-y-4">
        {title && (
          <h2 className="font-serif text-xl md:text-2xl text-stone-800 tracking-tight">
            {title}
          </h2>
        )}
        
        <div className="font-sans text-sm md:text-base text-stone-500 leading-relaxed max-w-md mx-auto">
          {message}
        </div>
      </div>
      
      {/* Action Row */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onDismiss}
          className="
            min-w-[8rem] px-6 py-3
            text-xs font-mono uppercase tracking-widest text-stone-50
            bg-stone-800 hover:bg-stone-700
            shadow-md shadow-stone-200/50
            rounded-sm
            transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:shadow-lg
            focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2
          "
        >
          {dismissLabel}
        </button>
      </div>
    </div>
  );
};