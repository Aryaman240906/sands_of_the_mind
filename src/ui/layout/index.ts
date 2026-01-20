// index.ts
// LAYOUT LAYER ENTRY POINT
// Exports all structural components that handle positioning, spacing, and flow.
// These components create the "skeleton" of the application.

export { default as AppRootShell } from './AppRootShell';
export { default as ViewportContainer } from './ViewportContainer';
export { default as MaxReadableWidthWrapper } from './MaxReadableWidthWrapper';
export { default as SingleColumnLayout } from './SingleColumnLayout';
export { default as DualColumnComparisonLayout } from './DualColumnComparisonLayout';
export { default as VerticalFlowStack } from './VerticalFlowStack';
export { default as SectionBoundary } from './SectionBoundary';
export { default as ContentSafeZone } from './ContentSafeZone';
export { default as ActionSafeZone } from './ActionSafeZone';
export { default as ScrollContainmentLayer } from './ScrollContainmentLayer';