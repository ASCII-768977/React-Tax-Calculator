import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [svelte({hot: !process.env.VITEST}), react()],
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  },
})
