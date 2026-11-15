// Side-effect CSS imports (e.g. '@xyflow/react/dist/style.css') carry no types;
// this lets `tsc` accept them during the library build. The host app's bundler
// (Vite) resolves the actual stylesheet.
declare module '*.css';
