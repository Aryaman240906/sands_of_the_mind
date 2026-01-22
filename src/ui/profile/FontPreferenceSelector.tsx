// profile/FontPreferenceSelector.tsx
// Reading comfort selector without personality or productivity framing.
// Allows the user to choose the "Voice" of the text.

import React from 'react';

export interface FontOption {
  value: string;
  label: string; // e.g. "Serif", "Sans", "Mono"
  fontFamily: string; // CSS value
}

interface FontPreferenceSelectorProps {
  options?: FontOption[];
  selected?: string;
  onSelect?: (value: string) => void;
  className?: string;
}

export default function FontPreferenceSelector({
  options = [],
  selected,
  onSelect,
  className = '',
}: FontPreferenceSelectorProps) {
  // A neutral, texture-rich sentence to test legibility and vibe
  const previewText = "The heavy rain falls silently on the stone path.";

  return (
    <fieldset
      className={`space-y-6 ${className}`}
      role="radiogroup"
      aria-label="Select typography preference"
    >
      <div className="flex items-baseline justify-between">
        <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
          Typography
        </legend>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {options.map((option) => {
          const isSelected = selected === option.value;
          
          return (
            <label
              key={option.value}
              className={`
                group relative flex items-center justify-between
                p-5 md:p-6
                rounded-sm border cursor-pointer
                transition-all duration-200 ease-out
                select-none
                
                /* Selection Physics */
                ${isSelected 
                  ? 'border-stone-400 bg-stone-100/50 shadow-sm' 
                  : 'border-stone-200 bg-transparent hover:border-stone-300 hover:bg-stone-50/30'
                }
              `}
            >
              {/* Native Input (Hidden) */}
              <input
                type="radio"
                name="font_preference"
                value={option.value}
                checked={isSelected}
                onChange={() => onSelect?.(option.value)}
                className="sr-only"
              />

              <div className="space-y-2 flex-1 mr-6">
                {/* The Font Name (System Font) */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400">
                    {option.label}
                  </span>
                  {isSelected && (
                     <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-in fade-in zoom-in" />
                  )}
                </div>

                {/* The Preview (Target Font) */}
                <p 
                  className={`
                    text-lg md:text-xl transition-colors
                    ${isSelected ? 'text-stone-800' : 'text-stone-600 group-hover:text-stone-700'}
                  `}
                  style={{ fontFamily: option.fontFamily }}
                >
                  {previewText}
                </p>
              </div>

              {/* Character Set Preview (Aa) */}
              <div 
                className="text-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ fontFamily: option.fontFamily }}
                aria-hidden="true"
              >
                Aa
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}