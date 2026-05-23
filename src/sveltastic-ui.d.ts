// Side-effect-only stylesheet entry from the kit. The Vite alias in vite.config.ts
// + the kit.alias in svelte.config.js resolve this to ui/src/styles/tokens.css at
// runtime; this declaration just lets TypeScript accept the bare `import` line.
declare module 'sveltastic-ui/styles';
