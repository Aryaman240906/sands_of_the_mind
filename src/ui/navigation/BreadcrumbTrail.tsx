// BreadcrumbTrail.tsx
// Optional orientation aid showing current location depth.
// Visualizes the "path traveled" as a faint trace in the sand.

import React from 'react';

interface BreadcrumbTrailProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreadcrumbTrail({
  children,
  className = '',
}: BreadcrumbTrailProps) {
  return (
    <nav
      role="navigation"
      aria-label="Breadcrumb"
      className={`
        flex items-center
        text-xs font-medium tracking-wide
        text-stone-400
        select-none
        ${className}
      `}
    >
      <ol className="
        flex items-center gap-2
        
        /* Automatic Separator Injection:
           Targets direct <li> children to add the separator via CSS.
           This keeps the JSX clean and the spacing perfectly uniform.
        */
        [&>li]:flex [&>li]:items-center [&>li]:gap-2
        
        /* The Separator: A very faint forward slash */
        [&>li:not(:last-child)::after]:content-['/']
        [&>li:not(:last-child)::after]:text-stone-300
        [&>li:not(:last-child)::after]:font-light
      ">
        {children}
      </ol>
    </nav>
  );
}