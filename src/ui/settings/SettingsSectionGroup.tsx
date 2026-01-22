// settings/SettingsSectionGroup.tsx
// A semantic chapter within the settings page.
// Groups related controls under a unified context.

import React from 'react';

interface SettingsSectionGroupProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const SettingsSectionGroup: React.FC<SettingsSectionGroupProps> = ({
  title,
  description,
  children,
  className = ''
}) => {
  // Generate a safe ID for aria-labelledby
  const labelId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section 
      className={`space-y-8 ${className}`}
      aria-labelledby={labelId}
    >
      <header className="space-y-3 md:w-3/4">
        <h2 
          id={labelId}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400"
        >
          {title}
        </h2>
        
        {description && (
          <p className="font-serif text-lg text-stone-600 leading-relaxed">
            {description}
          </p>
        )}
      </header>
      
      <div 
        className="
          space-y-6 
          /* Optional: Indent slightly on desktop to align with text flow */
          md:pl-0 
        "
      >
        {children}
      </div>
    </section>
  );
};