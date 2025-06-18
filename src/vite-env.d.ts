
/// <reference types="vite/client" />

// Extending HTMLImageElement to include fetchPriority property
declare global {
  interface HTMLImageElement {
    fetchPriority?: 'high' | 'low' | 'auto';
  }
}
