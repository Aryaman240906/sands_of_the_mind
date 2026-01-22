// privacy/DataOwnershipStatement.tsx
// Clearly establish ownership and control without legal ambiguity.
// A declaration of rights, not a disclaimer.

import React from 'react';

interface DataOwnershipStatementProps {
  className?: string;
}

export default function DataOwnershipStatement({
  className = '',
}: DataOwnershipStatementProps) {
  return (
    <section 
      className={`space-y-8 ${className}`}
      aria-label="Ownership Statement"
    >
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
        Ownership
      </h2>
      
      <div className="
        bg-white border border-stone-100 rounded-sm p-8 md:p-10
        shadow-[0_2px_20px_-12px_rgba(68,64,60,0.05)]
      ">
        <div className="prose prose-stone prose-lg max-w-none">
          <p className="font-serif text-2xl text-stone-800 leading-normal">
            You are the sole owner of your entries.
          </p>
          
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Column 1: Affirmative Rights */}
            <div className="space-y-2">
              <h3 className="font-sans font-medium text-stone-900 text-sm uppercase tracking-wide">
                Exclusive Rights
              </h3>
              <p className="text-base text-stone-500 leading-relaxed font-serif">
                The text you write belongs to you. It does not become property of the system, the AI provider, or the hosting service.
              </p>
            </div>
            
            {/* Column 2: Negative Restrictions */}
            <div className="space-y-2">
              <h3 className="font-sans font-medium text-stone-900 text-sm uppercase tracking-wide">
                No License
              </h3>
              <p className="text-base text-stone-500 leading-relaxed font-serif">
                Using this software does not grant us a license to use your life for advertising, model training, or analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}