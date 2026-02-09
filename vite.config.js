import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: "/samuel-portifolio/",
  plugins: [react()],
  resolve: {
    alias: {
      // Isso cria o atalho '@' que aponta para a pasta 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // IMPORTANTE: Use o alias '@' aqui para evitar erros de caminho relativo
        additionalData: `
          @use "sass:color";
          @use "@/styles/abstracts/variables" as *;
          @use "@/styles/abstracts/mixins" as * ;
        `,
      },
    },
  },
})