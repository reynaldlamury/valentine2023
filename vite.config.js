import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  root: 'src',
  build: {
    outDir: '../dist',
  },

  assets: {
    include: ['**/*.mp3'],
  },
});
