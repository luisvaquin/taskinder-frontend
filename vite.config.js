import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@awesome.me': '/path/to/your/package/directory'  // Update this to the actual path
    }
  }
})
