import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import YAMLPlugin from "unplugin-yaml/vite";
import md from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), md(), YAMLPlugin()],
  assetsInclude: ['**/*.md'],
  base: '/idmattGameDevlog/'
})
