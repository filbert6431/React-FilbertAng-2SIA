import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      'react-icons/bs': path.resolve('node_modules/react-icons/bs'),
      'react-icons/fa': path.resolve('node_modules/react-icons/fa'),
      'react-icons/hi': path.resolve('node_modules/react-icons/hi'),
      'react-icons/fc': path.resolve('node_modules/react-icons/fc'),
      'react-icons/sl': path.resolve('node_modules/react-icons/sl'),
      'react-icons/tb': path.resolve('node_modules/react-icons/tb')
    }
  },
  optimizeDeps: {
    include: [
      'react-icons'
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-icons': ['react-icons']
        }
      }
    }
  }
})
