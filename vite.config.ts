import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
// Relative `base` keeps asset URLs portable: it works under a GitHub Pages
// project path AND when served from a CDN branch path (e.g. githack), with no
// per-host rebuild. Runtime asset paths use import.meta.env.BASE_URL.
//
// SINGLEFILE=1 produces a single self-contained index.html (inlined JS/CSS) for
// publishing as a standalone artifact; logos are inlined as data URIs by a
// pre-build step so nothing loads from disk.
const singleFile = process.env.SINGLEFILE === '1';

export default defineConfig({
  base: './',
  plugins: [react(), ...(singleFile ? [viteSingleFile()] : [])],
  build: singleFile ? { assetsInlineLimit: 100_000_000 } : {},
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
