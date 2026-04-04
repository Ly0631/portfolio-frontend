import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // this tells vite to forward /api requests to our express backend
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
