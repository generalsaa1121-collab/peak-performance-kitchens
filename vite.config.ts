import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Relative `base` keeps asset URLs portable: it works under a GitHub Pages
// project path AND when served from a CDN branch path (e.g. githack), with no
// per-host rebuild. Runtime asset paths use import.meta.env.BASE_URL.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
