// export/ExportScopeSelector.tsx
// Temporal or content scope selection without pressure or completionism.
// Distinguishes between "Time" (Range) and "Depth" (Metadata).

import React from 'react';

export interface ScopeOption {
  value: string;
  label: string;
  description?: string;
}

interface ExportScopeSelectorProps {
  // Primary Scope (Time/Quantity)
  scopeOptions?: ScopeOption[];
  selectedScope?: string;
  onSelectScope?: (value: string) => void;

  // Secondary Scope (Detail/Metadata)
  includeTags?: boolean;
  includeMetadata?: boolean;
  onToggleTags?: () => void;
  onToggleMetadata?: () => void;

  className?: string;
}

export default function ExportScopeSelector({
  scopeOptions = [],
  selectedScope,
  onSelectScope,
  includeTags = false,
  includeMetadata = false,
  onToggleTags,
  onToggleMetadata,
  className = '',
}: ExportScopeSelectorProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      
      {/* SECTION 1: Time Scope (Radios) */}
      <fieldset className="space-y-4">
        <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
          Time Range
        </legend>
        <div className="grid gap-3">
          {scopeOptions.map((option) => {
            const isSelected = selectedScope === option.value;
            return (
              <label
                key={option.value}
                className={`
                  flex items-center gap-4 p-4 rounded-sm border cursor-pointer
                  transition-all duration-200
                  ${isSelected 
                    ? 'border-stone-400 bg-stone-100/40' 
                    : 'border-stone-200 bg-transparent hover:border-stone-300'
                  }
                `}
              >
                <input
                  type="radio"
                  name="export_scope"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => onSelectScope?.(option.value)}
                  className="sr-only"
                />
                
                {/* Custom Radio Graphic */}
                <div 
                  className={`
                    w-4 h-4 rounded-full border flex items-center justify-center shrink-0
                    transition-colors duration-200
                    ${isSelected ? 'border-stone-600' : 'border-stone-300'}
                  `}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-stone-600" />}
                </div>

                <div className="flex flex-col">
                  <span className="font-serif text-stone-800 text-sm">
                    {option.label}
                  </span>
                  {option.description && (
                    <span className="text-xs text-stone-500 font-sans mt-0.5">
                      {option.description}
                    </span>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* SECTION 2: Content Detail (Checkboxes) */}
      {(onToggleTags || onToggleMetadata) && (
        <fieldset className="space-y-4 pt-4 border-t border-stone-100">
          <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
            Content Detail
          </legend>
          
          <div className="flex flex-col gap-3">
            {/* Tags Toggle */}
            {onToggleTags && (
              <label className="flex items-center gap-4 cursor-pointer group w-max">
                <div 
                  className={`
                    w-4 h-4 border flex items-center justify-center transition-colors duration-200
                    ${includeTags ? 'bg-stone-600 border-stone-600' : 'border-stone-300 group-hover:border-stone-400 bg-white'}
                  `}
                >
                  {includeTags && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                  <input type="checkbox" checked={includeTags} onChange={onToggleTags} className="sr-only" />
                </div>
                <span className="text-sm text-stone-600 font-serif group-hover:text-stone-800 transition-colors">
                  Include semantic tags
                </span>
              </label>
            )}

            {/* Metadata Toggle */}
            {onToggleMetadata && (
              <label className="flex items-center gap-4 cursor-pointer group w-max">
                <div 
                  className={`
                    w-4 h-4 border flex items-center justify-center transition-colors duration-200
                    ${includeMetadata ? 'bg-stone-600 border-stone-600' : 'border-stone-300 group-hover:border-stone-400 bg-white'}
                  `}
                >
                  {includeMetadata && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                  <input type="checkbox" checked={includeMetadata} onChange={onToggleMetadata} className="sr-only" />
                </div>
                <span className="text-sm text-stone-600 font-serif group-hover:text-stone-800 transition-colors">
                  Include system metadata (IDs, Timestamps)
                </span>
              </label>
            )}
          </div>
        </fieldset>
      )}
    </div>
  );
}