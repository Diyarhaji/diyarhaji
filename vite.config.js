import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/diyarhaji/', // Must match exact repo name (case-sensitive) with trailing slashes
})