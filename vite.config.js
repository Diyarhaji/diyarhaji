import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 👈 Fixed this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 Keeps your GitHub subfolder path safe
})