import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
    rollupOptions: {
      external: ['vue'],
    },
  },
});

export default config;