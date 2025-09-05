import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./",   // Netlify par deploy ke liye important
  plugins: [react()]
})
