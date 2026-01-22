// privacy/ExportRightsExplanation.tsx
// Explain data portability as a right, not a feature.
// Frames the system as "Open" and "Lock-in Free".

import React from 'react';

interface ExportRightsExplanationProps {
  className?: string;
}

export default function ExportRightsExplanation({
  className = '',
}: ExportRightsExplanationProps) {
  return (
    <section className={`space-y-8 ${className}`} aria-label="Data Portability Rights">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
        Portability
      </h2>

      <div className="bg-stone-50 border border-stone-200/60 rounded-sm p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Icon: The Open Box (Accessibility) */}
          <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-500 shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>

          <div className="space-y-6 flex-1">
            <h3 className="font-serif text-xl text-stone-800">
              No Lock-in. Ever.
            </h3>
            
            <p className="text-stone-600 font-serif leading-relaxed">
              We believe you should stay because you want to, not because you are trapped. 
              You can export your entire journal history at any time in standard, open formats.
            </p>

            {/* Technical Proof: The Formats */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400">
                Supported Open Standards
              </span>
              <div className="flex gap-3">
                {['JSON', 'Markdown', 'Plain Text'].map((format) => (
                  <span 
                    key={format}
                    className="
                      inline-flex items-center px-3 py-1 
                      bg-white border border-stone-200 rounded-sm 
                      font-mono text-xs text-stone-600
                    "
                  >
                    .{format.toLowerCase().replace(' ', '')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}