import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/diyarhaji/', // 👈 ADD THIS LINE WITH YOUR REPO NAME
})