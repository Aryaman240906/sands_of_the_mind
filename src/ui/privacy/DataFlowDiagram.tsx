// privacy/DataFlowDiagram.tsx
// Visually explain where data goes — and where it does not.
// Uses simple geometry to show isolation and boundaries.

import React from 'react';

interface DataFlowDiagramProps {
  className?: string;
}

export default function DataFlowDiagram({
  className = '',
}: DataFlowDiagramProps) {
  return (
    <section className={`space-y-8 ${className}`} aria-label="Data Flow Diagram">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
        Data Flow
      </h2>

      <div className="w-full bg-stone-100/50 rounded-sm border border-stone-200/50 p-8 md:p-12 overflow-hidden relative">
        
        {/* The Diagram Layer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10 max-w-2xl mx-auto">
          
          {/* Node 1: User (The Source) */}
          <div className="flex flex-col items-center gap-3 text-center group">
            <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <span className="font-serif text-sm text-stone-700">You</span>
          </div>

          {/* Connection: Input Stream */}
          <div className="flex-1 h-px bg-stone-300 w-full md:w-auto relative">
             {/* Arrowhead */}
             <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-stone-300 rotate-45" />
          </div>

          {/* Node 2: Local Storage (The Vault) */}
          <div className="flex flex-col items-center gap-3 text-center">
             <div className="w-16 h-16 rounded-sm bg-white border border-stone-300 flex items-center justify-center text-stone-600 shadow-sm relative z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <span className="block font-serif text-sm text-stone-700">Local Storage</span>
              <span className="block text-[10px] uppercase tracking-wide text-stone-400">Encrypted</span>
            </div>
          </div>

          {/* Connection: The Boundary (Air Gap) */}
          <div className="flex-1 flex items-center justify-center w-full md:w-auto px-4 relative">
             {/* Dashed line implies controlled, non-continuous connection */}
             <div className="h-px bg-stone-300 w-full border-t border-dashed border-stone-300" />
             <div className="absolute bg-stone-200 px-2 py-1 rounded text-[10px] uppercase tracking-widest text-stone-500 font-mono">
               Boundary
             </div>
          </div>

          {/* Node 3: AI Inference (The Ephemeral Processor) */}
          <div className="flex flex-col items-center gap-3 text-center opacity-75">
             {/* Dashed border implies it is not a container, just a pass-through */}
             <div className="w-16 h-16 rounded-full border border-dashed border-stone-400 flex items-center justify-center text-stone-400 bg-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9" />
                <path d="M12 21v-6" />
                <path d="M12 3v6" />
                <path d="M3 12h6" />
                <path d="M21 12h-6" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <span className="block font-serif text-sm text-stone-600">AI Inference</span>
              <span className="block text-[10px] uppercase tracking-wide text-stone-400">No Memory</span>
            </div>
          </div>

        </div>

        {/* Background Grid Pattern: Adds a technical "Blueprint" feel */}
        <div 
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
            }} 
        />
      </div>
    </section>
  );
}