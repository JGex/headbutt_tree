import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,
    port: 8080,
    hmr: {
      port: 8080,
      clientPort: 8080,
      host: 'localhost'
    },
    watch: {
      usePolling: true
    },
  },
})
