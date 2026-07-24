import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// `base` is the GitHub Pages project path in production builds; dev stays at '/'.
// Runtime asset paths use import.meta.env.BASE_URL so they resolve under it.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/peak-performance-kitchens/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
}));
