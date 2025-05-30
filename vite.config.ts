import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  rollupOptions: {
      plugins: [{
        name: 'create-redirects',
        writeBundle() {
          const redirectsPath = path.resolve(__dirname, 'dist', '_redirects')
          fs.writeFileSync(redirectsPath, '/*    /index.html   200\n')
        }
      }]
    }
}));
