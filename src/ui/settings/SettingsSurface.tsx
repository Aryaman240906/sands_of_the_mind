// settings/SettingsSurface.tsx
// The quiet room for tuning the machine.
// A focused, distraction-free container for preferences.

import React from 'react';

interface SettingsSurfaceProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const SettingsSurface: React.FC<SettingsSurfaceProps> = ({
  children,
  title = 'Settings',
  description,
  className = ''
}) => {
  return (
    <div 
      className={`
        min-h-screen w-full 
        bg-stone-50 
        px-6 py-16 md:px-12 md:py-24 
        selection:bg-stone-200 selection:text-stone-900
        ${className}
      `}
      role="main"
      aria-label={`${title} page`}
    >
      <div 
        className="
          mx-auto max-w-2xl 
          animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out
        "
      >
        {/* Header Section */}
        <header className="mb-20 space-y-4 border-b border-stone-200/60 pb-8">
          <div className="flex items-center gap-3">
             <span className="h-px w-8 bg-stone-300" />
             <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
               Configuration
             </span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl text-stone-800 tracking-tight">
            {title}
          </h1>
          
          {description && (
            <p className="font-sans text-base text-stone-500 max-w-lg leading-relaxed">
              {description}
            </p>
          )}
        </header>
        
        {/* Content Stacking - High spacing for clarity */}
        <div className="space-y-16">
          {children}
        </div>
      </div>
    </div>
  );
};