// export/ExportCompletionState.tsx
// Close the export flow gently.
// No celebration; clear acknowledgment of the generated artifact.

import React from 'react';

interface ExportCompletionStateProps {
  complete?: boolean;
  filename?: string;
  onDismiss?: () => void;
  className?: string;
}

export default function ExportCompletionState({
  complete = false,
  filename,
  onDismiss,
  className = '',
}: ExportCompletionStateProps) {
  if (!complete) {
    return null;
  }

  return (
    <div
      className={`
        flex flex-col items-center justify-center text-center
        space-y-6 py-8
        animate-in fade-in zoom-in-95 duration-500 ease-out
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      {/* Icon: Downward motion (Delivery) rather than Checkmark (Success) */}
      <div className="text-stone-400 p-4 rounded-full bg-stone-100/50">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>

      <div className="space-y-3 max-w-xs mx-auto">
        <h3 className="font-serif text-xl text-stone-700">
          Export ready
        </h3>
        
        {/* Filename: Visually treated as a physical object/ticket */}
        {filename ? (
          <div className="
            inline-block 
            px-3 py-1.5 
            bg-stone-100 border border-stone-200 rounded-sm
            font-mono text-xs text-stone-600 break-all
          ">
            {filename}
          </div>
        ) : (
          <p className="text-sm text-stone-500 font-serif italic">
            Your file has been generated and downloaded.
          </p>
        )}
        
        <p className="text-xs text-stone-400 font-sans leading-relaxed pt-2">
          Check your device's download location.
        </p>
      </div>

      {/* Dismiss: Text-only to avoid "Next Step" urgency */}
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="
            mt-4
            font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400
            hover:text-stone-600 transition-colors
            border-b border-transparent hover:border-stone-300
            pb-0.5
          "
        >
          Close
        </button>
      )}
    </div>
  );
}