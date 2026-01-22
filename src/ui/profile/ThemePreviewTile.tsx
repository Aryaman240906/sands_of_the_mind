// profile/ThemePreviewTile.tsx
// Abstract mood preview without demonstrative screenshots.
// Visualizes the relationship between Background, Text, and Accent.

import React from 'react';

interface ThemePreviewTileProps {
  label: string;
  colors: {
    background: string;
    text: string;
    accent: string;
  };
  isSelected?: boolean;
  onSelect?: () => void;
  className?: string;
}

export default function ThemePreviewTile({
  label,
  colors,
  isSelected = false,
  onSelect,
  className = '',
}: ThemePreviewTileProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        group flex flex-col gap-3 w-full
        outline-none
        ${className}
      `}
      role="radio"
      aria-checked={isSelected}
      aria-label={`Select ${label} theme`}
    >
      {/* The Visual Preview Box */}
      <div
        className={`
          relative w-full aspect-[4/3] rounded-sm
          border transition-all duration-300 ease-out
          flex flex-col items-center justify-center gap-2
          shadow-sm
          
          /* Selection State Physics */
          ${isSelected 
            ? 'border-stone-500 ring-1 ring-stone-500 scale-[0.98]' 
            : 'border-stone-200 hover:border-stone-300 hover:-translate-y-0.5'
          }
          
          /* Focus Ring */
          group-focus-visible:ring-2 group-focus-visible:ring-offset-2 group-focus-visible:ring-stone-400
        `}
        style={{ backgroundColor: colors.background }}
      >
        {/* Abstract "Text" Lines */}
        <div 
          className="w-1/2 h-1 rounded-full opacity-80"
          style={{ backgroundColor: colors.text }} 
        />
        <div 
          className="w-1/3 h-1 rounded-full opacity-60"
          style={{ backgroundColor: colors.text }} 
        />
        
        {/* Abstract "Accent" Dot */}
        <div 
          className="absolute bottom-3 right-3 w-2 h-2 rounded-full"
          style={{ backgroundColor: colors.accent }}
        />

        {/* Selected Checkmark (Subtle Overlay) */}
        {isSelected && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-900/5">
            <div className="bg-white rounded-full p-1 shadow-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-stone-800">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Label */}
      <span 
        className={`
          text-xs font-serif tracking-wide transition-colors
          ${isSelected ? 'text-stone-800 font-medium' : 'text-stone-500 group-hover:text-stone-600'}
        `}
      >
        {label}
      </span>
    </button>
  );
}