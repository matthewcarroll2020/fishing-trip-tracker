// Vite configuration file

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite plugin for React and Base URL for repository
export default defineConfig({
  plugins: [react()],
  base: '/fishing-trip-tracker/', // repo name
})