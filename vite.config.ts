import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import YAMLPlugin from "unplugin-yaml/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), YAMLPlugin()],
  assetsInclude: ['**/*.md'],
  base: '/idmattGameDevlog/'
})
