import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import md from 'vite-plugin-md';
import YAMLPlugin from "unplugin-yaml/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), md(), YAMLPlugin()],
  assetsInclude: ['**/*.md'],
  base: '/idmattGameDevlog/'
})
