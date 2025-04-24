import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/troutser.github.io/', // <- replace with your actual GitHub repo name
  build: {
    outDir: 'docs', // ← Important
  },
})
