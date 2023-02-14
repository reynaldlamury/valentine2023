import { defineConfig } from 'vite';

export default defineConfig({
  // base: '/valentine2023',
  root: 'src',
  build: {
    outDir: '../dist',
  },

  assets: {
    include: ['**/*.mp3', '**/*.jpg', '**/*.JPG', '**/*.png', '**/*.PNG'],
  },
});
