import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  // For GitHub Pages: https://nategoss.github.io/nate-portfolio/
  const base = mode === 'production' ? '/nate-portfolio/' : '/'
  
  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './components'),
        '@/styles': path.resolve(__dirname, './styles'),
      },
    },
    server: {
      port: 3000,
      host: true
    },
    css: {
      postcss: './postcss.config.js',
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            motion: ['framer-motion']
          }
        }
      }
    },
    // Ensure proper asset handling
    publicDir: 'public',
    // Handle TypeScript path mapping
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }
  }
})