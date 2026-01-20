import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/ngb-marketing-site/",
  build: {
    outDir: "."
  },
  plugins: [react()]
});

