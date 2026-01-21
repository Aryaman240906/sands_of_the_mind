// export/ExportFormatSelector.tsx
// Format selection without technical jargon or implied hierarchy.
// Presents technical choices as equal, transparent utilities.

import React from 'react';

export interface ExportFormatOption {
  value: string;
  label: string;
  description?: string;
}

interface ExportFormatSelectorProps {
  options?: ExportFormatOption[];
  selected?: string;
  className?: string;
  onSelect?: (value: string) => void;
}

export default function ExportFormatSelector({
  options = [],
  selected,
  className = '',
  onSelect,
}: ExportFormatSelectorProps) {
  return (
    <fieldset className={`space-y-6 ${className}`}>
      <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
        Format Selection
      </legend>
      
      <div className="grid gap-4 md:grid-cols-1">
        {options.map((option) => {
          const isSelected = selected === option.value;
          
          return (
            <label
              key={option.value}
              className={`
                group relative flex items-start gap-5 p-5
                border rounded-sm cursor-pointer
                transition-all duration-300 ease-out
                
                /* State Styles */
                ${isSelected 
                  ? 'border-stone-500 bg-stone-100/50 shadow-sm' 
                  : 'border-stone-200 bg-transparent hover:border-stone-300 hover:bg-stone-50/30'
                }
              `}
            >
              {/* Native Input (Hidden but accessible) */}
              <input
                type="radio"
                name="export_format"
                value={option.value}
                checked={isSelected}
                onChange={() => onSelect?.(option.value)}
                className="sr-only"
              />
              
              {/* Custom Radio Indicator */}
              <div 
                className={`
                  mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center
                  transition-colors duration-300
                  ${isSelected ? 'border-stone-600' : 'border-stone-300 group-hover:border-stone-400'}
                `}
                aria-hidden="true"
              >
                {isSelected && (
                  <div className="w-2 h-2 rounded-full bg-stone-600 animate-in fade-in zoom-in duration-200" />
                )}
              </div>

              {/* Text Content */}
              <div className="space-y-1.5">
                <span className="block font-mono text-sm text-stone-800 tracking-wide">
                  {option.label}
                </span>
                {option.description && (
                  <span className="block font-serif text-sm text-stone-500 leading-relaxed">
                    {option.description}
                  </span>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}