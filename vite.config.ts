import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue(), vueJsx(), vueDevTools()],
    base: mode === 'production' ? '/family_values_vue/' : '/', // Use / for dev, /family_values_vue/ for prod
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // Correct path for src alias
      }
    }
  }
})
