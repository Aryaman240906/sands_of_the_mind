// profile/LogoutActionButton.tsx
// Neutral exit affordance without danger styling or guilt.
// Treats signing out as simply "closing the book".

import React from 'react';

interface LogoutActionButtonProps {
  onLogout?: () => void;
  className?: string;
}

export default function LogoutActionButton({
  onLogout,
  className = '',
}: LogoutActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onLogout}
      className={`
        group flex items-center gap-3 
        px-5 py-3
        w-full md:w-auto
        border border-stone-200 rounded-sm
        bg-transparent hover:bg-stone-50
        transition-all duration-200 ease-out
        ${className}
      `}
      aria-label="Sign out of your account"
    >
      {/* Icon: Neutral exit symbol */}
      <div className="text-stone-400 group-hover:text-stone-600 transition-colors">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </div>

      {/* Label: System voice, mechanical */}
      <span className="font-mono text-xs uppercase tracking-[0.1em] text-stone-500 group-hover:text-stone-800 transition-colors">
        Sign Out
      </span>
    </button>
  );
}