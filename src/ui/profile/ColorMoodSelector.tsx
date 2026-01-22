// profile/ColorMoodSelector.tsx
// Atmospheric tone adjustment without emotion labeling.
// Presents colors as "Paper Stocks" or "Material Tints".

import React from 'react';

export interface ColorMoodOption {
  value: string;
  label: string;         // e.g. "Warm", "Cool", "Neutral"
  swatchColor: string;   // The specific hex for the dot
}

interface ColorMoodSelectorProps {
  options?: ColorMoodOption[];
  selected?: string;
  onSelect?: (value: string) => void;
  className?: string;
}

export default function ColorMoodSelector({
  options = [],
  selected,
  onSelect,
  className = '',
}: ColorMoodSelectorProps) {
  return (
    <fieldset
      className={`space-y-6 ${className}`}
      role="radiogroup"
      aria-label="Select screen tint"
    >
      <div className="flex items-baseline justify-between">
        <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
          Tint
        </legend>
      </div>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const isSelected = selected === option.value;
          
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect?.(option.value)}
              className={`
                group relative
                flex items-center gap-3 
                px-4 py-2.5
                rounded-full border
                transition-all duration-200 ease-out
                
                /* Interaction Physics */
                ${isSelected 
                  ? 'border-stone-500 bg-stone-100/50 ring-1 ring-stone-500/20' 
                  : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/30'
                }
              `}
              role="radio"
              aria-checked={isSelected}
            >
              {/* The Swatch Dot (Material Sample) */}
              <span 
                className={`
                  h-3 w-3 rounded-full border border-stone-900/10 shadow-sm
                  transition-transform duration-300
                  ${isSelected ? 'scale-110' : 'group-hover:scale-105'}
                `}
                style={{ backgroundColor: option.swatchColor }}
                aria-hidden="true"
              />

              {/* The Label */}
              <span 
                className={`
                  text-xs font-serif tracking-wide
                  ${isSelected ? 'text-stone-800 font-medium' : 'text-stone-500'}
                `}
              >
                {option.label}
              </span>

              {/* Selection Check (Subtle) */}
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-stone-800 ml-1 animate-in fade-in zoom-in" />
              )}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}