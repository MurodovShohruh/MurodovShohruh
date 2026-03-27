import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MurodovShohruh/',
  plugins: [
    react()
  ],
  build: {
    outDir: 'dist'
  }
})
