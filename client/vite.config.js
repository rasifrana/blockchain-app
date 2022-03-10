import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://rasifrana.github.io/blockchain-app',
  plugins: [react()]
})
