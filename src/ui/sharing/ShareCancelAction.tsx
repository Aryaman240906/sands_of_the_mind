// sharing/ShareCancelAction.tsx
// Safe exit from sharing flow without penalty.
// Presents "Canceling" as simply returning to the private state.

import React from 'react';

interface ShareCancelActionProps {
  onCancel?: () => void;
  label?: string;
  className?: string;
}

export default function ShareCancelAction({
  onCancel,
  label = 'Cancel',
  className = '',
}: ShareCancelActionProps) {
  return (
    <button
      type="button"
      onClick={onCancel}
      className={`
        w-full py-3
        font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400
        hover:text-stone-600 hover:bg-stone-50
        rounded-sm
        transition-all duration-200 ease-out
        ${className}
      `}
      aria-label="Cancel sharing and keep private"
    >
      {label}
    </button>
  );
}