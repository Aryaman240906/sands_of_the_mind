// settings/ResetPreferenceAction.tsx
// A safe, mechanical lever to return to the default state.
// Discrete and utilitarian, avoiding "Danger Zone" aesthetics.

import React from 'react';

interface ResetPreferenceActionProps {
  onReset?: () => void;
  label?: string;
  description?: string;
  className?: string;
}

export const ResetPreferenceAction: React.FC<ResetPreferenceActionProps> = ({
  onReset,
  label = 'Restore Defaults',
  description,
  className = ''
}) => {
  const handleReset = () => {
    onReset?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleReset();
    }
  };

  return (
    <div className={`pt-6 border-t border-stone-100 ${className}`}>
      {description && (
        <p className="font-serif text-sm text-stone-500 leading-relaxed mb-4 max-w-prose">
          {description}
        </p>
      )}
      
      <button
        type="button"
        onClick={handleReset}
        onKeyDown={handleKeyDown}
        className="
          group flex items-center gap-2.5
          rounded-sm
          py-2 pr-4
          transition-colors duration-200 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400
        "
      >
        {/* Icon: Mechanical Undo */}
        <div className="text-stone-400 group-hover:text-stone-600 transition-colors">
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </div>

        {/* Label: Utility Typeface */}
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-500 group-hover:text-stone-800 transition-colors">
          {label}
        </span>
      </button>
    </div>
  );
};