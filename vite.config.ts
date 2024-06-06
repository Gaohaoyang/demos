import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos',
  plugins: [
    react(),
    checker({
      typescript: true,
      overlay: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // https://rollupjs.org/configuration-options/#output-manualchunks
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
    },
  },
})
