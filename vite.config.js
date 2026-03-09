import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Se estiver em produção na Vercel, o base é '/', 
  // caso contrário (GitHub Pages), mantém o nome do repositório.
  base: process.env.NODE_ENV === 'production' ? '/' : '/samuel-portifolio/',
  
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @use "@/styles/abstracts/variables" as *;
          @use "@/styles/abstracts/mixins" as * ;
        `,
      },
    },
  },
})
