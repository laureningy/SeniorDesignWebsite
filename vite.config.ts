import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    // Add a custom Vite server configuration
    fs: {
      // Allow serving files from the "public" directory
      allow: ['..'], // This allows serving files outside of the "src" directory
    },
  },
});
