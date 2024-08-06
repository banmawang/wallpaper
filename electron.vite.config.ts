import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [vue()],
    define: {
      'process.env': {
        VITE_SNIPPETS_VERSION: JSON.stringify(packageJson.version).replace(/"/g, '')
        // Define other variables as needed
      }
    }
  }
})
