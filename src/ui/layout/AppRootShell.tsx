// AppRootShell.tsx
// Top-level structural container establishing application-wide layout baseline.
// Enforces physical stability (no bounce) and global reading mechanics.

import React from 'react';

interface AppRootShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppRootShell({
  children,
  className = '',
}: AppRootShellProps) {
  return (
    <div
      // Role 'region' is more appropriate than 'application' for document-heavy apps,
      // but generic div is safest for a top-level shell wrapper.
      className={`
        relative w-full min-h-screen
        flex flex-col
        overflow-x-hidden
        overscroll-none
        antialiased
        selection:bg-stone-200 selection:text-stone-900
        ${className}
      `}
    >
      {/* Structural Intent:
        1. flex-col: Allows children to naturally stack or expand to fill height (sticky footers).
        2. overscroll-none: Prevents 'rubber-banding'. The app feels grounded, like stone/sand.
        3. overflow-x-hidden: A safety net against horizontal layout drift.
      */}
      {children}
    </div>
  );
}