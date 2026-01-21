// search/SearchInputField.tsx
// Gentle invitation to search without command or urgency.
// A "Naked" input that acts like a conversation starter.

import React from 'react';

interface SearchInputFieldProps {
  value?: string;
  placeholder?: string;
  className?: string;
  onValueChange?: (value: string) => void;
  autoFocus?: boolean;
}

export default function SearchInputField({
  value = '',
  placeholder = 'Find something you wrote...',
  className = '',
  onValueChange,
  autoFocus = false,
}: SearchInputFieldProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        autoFocus={autoFocus}
        placeholder={placeholder}
        
        /* Accessibility */
        aria-label="Search entries"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        
        /* Styling */
        className={`
          w-full
          bg-transparent border-none outline-none
          
          /* Typography */
          font-serif text-xl md:text-2xl
          text-stone-800
          placeholder:text-stone-400/40 placeholder:font-sans placeholder:text-lg placeholder:tracking-wide
          
          /* Interaction */
          transition-colors duration-300
        `}
        
        /* Custom Caret Color */
        style={{ caretColor: '#78716c' }} // stone-500
      />
      
      {/* Subtle Underline (Only appears on focus/active) */}
      <div 
        className={`
          absolute bottom-0 left-0 right-0 h-px bg-stone-200/50 
          transition-transform duration-500 origin-left
          ${value.length > 0 ? 'scale-x-100' : 'scale-x-0'}
        `} 
      />
    </div>
  );
}