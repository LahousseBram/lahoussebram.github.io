import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs'


export default defineConfig({
  build: {
    outDir: 'dist',
    // after build hook to create _redirects file
    rollupOptions: {
      plugins: [{
        name: 'create-redirects',
        writeBundle() {
          const redirectsPath = path.resolve(__dirname, 'dist', '_redirects')
          fs.writeFileSync(redirectsPath, '/*    /index.html   200\n')
        }
      }]
    }
  }
})
