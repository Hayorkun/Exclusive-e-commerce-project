import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'firebase': ['firebase/auth', 'firebase/firestore'],
          'icons': ['lucide-react'],
        }
      }
    },
    // Optimize build size
    minify: 'terser',
    target: 'esnext',
  }
});
