import { defineConfig } from 'vite'

export default defineConfig({
  base: '/co-shop/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})