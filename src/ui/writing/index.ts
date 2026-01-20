// index.ts
// WRITING & FEEDBACK LAYER ENTRY POINT
// Exports the core writing engine and its associated feedback mechanisms.

// The Canvas & Input
export { default as WritingCanvas } from './WritingCanvas';
export { default as InfiniteTextSurface } from './InfiniteTextSurface';
export { default as AutoExpandingTextArea } from './AutoExpandingTextArea';
export { default as WritingFocusHalo } from './WritingFocusHalo';
export { default as WritingPlaceholderBlock } from './WritingPlaceholderBlock';

// The Feedback Signals
export { default as WritingPersistenceIndicator } from './WritingPersistenceIndicator';
export { default as DraftPresenceMarker } from './DraftPresenceMarker';
export { default as OfflineWriteIndicator } from './OfflineWriteIndicator';