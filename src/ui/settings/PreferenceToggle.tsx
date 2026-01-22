// settings/PreferenceToggle.tsx
// A binary choice switch with tactile physics.
// Avoids "Success Green" in favor of "Active Stone".

import React, { useState, useEffect } from 'react';

interface PreferenceToggleProps {
  label: string;
  description?: string;
  checked?: boolean; // Controlled state
  defaultChecked?: boolean; // Uncontrolled initial state
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
}

export const PreferenceToggle: React.FC<PreferenceToggleProps> = ({
  label,
  description,
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  id,
  className = ''
}) => {
  // Handle both controlled and uncontrolled modes
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const toggleId = id || `toggle-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const handleToggle = () => {
    if (!isControlled) {
      setInternalChecked(!isChecked);
    }
    onChange?.(!isChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`flex items-start justify-between gap-8 py-2 ${className}`}>
      {/* Label Group */}
      <div className="flex-1 space-y-1 cursor-pointer" onClick={handleToggle}>
        <label 
          htmlFor={toggleId}
          className="block text-base font-medium text-stone-800 cursor-pointer select-none"
        >
          {label}
        </label>
        {description && (
          <p className="text-sm font-normal text-stone-500 leading-relaxed select-none">
            {description}
          </p>
        )}
      </div>
      
      {/* The Mechanical Switch */}
      <button
        id={toggleId}
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`
          relative inline-flex flex-shrink-0 
          h-7 w-12 
          border-2 border-transparent 
          rounded-full 
          cursor-pointer 
          transition-colors duration-200 ease-in-out 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50
          ${isChecked ? 'bg-stone-600' : 'bg-stone-200'}
        `}
      >
        <span className="sr-only">Use setting: {label}</span>
        
        {/* The Thumb */}
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block 
            h-6 w-6 
            rounded-full bg-white shadow-sm ring-0 
            transform transition-transform duration-200 ease-out
            ${isChecked ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
};