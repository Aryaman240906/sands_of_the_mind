// sharing/PlatformSelector.tsx
// Destination choice without bias or recommendation.
// Treats external platforms as neutral conduits, stripping brand colors.

import React from 'react';

export interface PlatformOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface PlatformSelectorProps {
  platforms?: PlatformOption[];
  selected?: string;
  className?: string;
  onSelect?: (value: string) => void;
}

export default function PlatformSelector({
  platforms = [],
  selected,
  className = '',
  onSelect,
}: PlatformSelectorProps) {
  return (
    <fieldset
      className={`space-y-4 ${className}`}
      role="radiogroup"
      aria-label="Select sharing destination"
    >
      <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
        Destination
      </legend>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {platforms.map((platform) => {
          const isSelected = selected === platform.value;
          
          return (
            <label
              key={platform.value}
              className={`
                group flex items-center gap-4 p-4 
                rounded-sm border cursor-pointer
                transition-all duration-200 ease-out
                select-none
                ${isSelected 
                  ? 'border-stone-400 bg-stone-100/60 shadow-sm' 
                  : 'border-stone-200 bg-transparent hover:border-stone-300 hover:bg-stone-50/50'
                }
              `}
            >
              {/* Native Input (Visually Hidden) */}
              <input
                type="radio"
                name="share_platform"
                value={platform.value}
                checked={isSelected}
                onChange={() => onSelect?.(platform.value)}
                className="sr-only"
              />

              {/* Icon: Muted to neutralize brand noise */}
              {platform.icon && (
                <div 
                  className={`
                    w-5 h-5 flex items-center justify-center shrink-0
                    transition-colors duration-200
                    ${isSelected ? 'text-stone-700' : 'text-stone-400 group-hover:text-stone-500'}
                  `}
                  aria-hidden="true"
                >
                  {platform.icon}
                </div>
              )}

              {/* Label */}
              <span className={`
                flex-1 font-serif text-sm transition-colors
                ${isSelected ? 'text-stone-800' : 'text-stone-600'}
              `}>
                {platform.label}
              </span>

              {/* Selection Indicator */}
              <div 
                className={`
                  w-4 h-4 rounded-full border flex items-center justify-center shrink-0
                  transition-colors duration-200
                  ${isSelected ? 'border-stone-600' : 'border-stone-300'}
                `}
                aria-hidden="true"
              >
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-stone-600" />}
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}