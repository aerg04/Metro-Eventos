import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:8080', // URL de tu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },

  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },

});