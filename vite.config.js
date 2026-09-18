import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    cors: true,
    hmr: { clientPort: 443 },
    watch: { usePolling: true, interval: 500 },
  },
  preview: {
    host: true,
    port: 4173,
    cors: true,
    allowedHosts: true,
  },
});
