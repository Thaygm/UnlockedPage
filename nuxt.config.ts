import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  build: {
    transpile: ['vee-validate', '@vueuse/core'],
  },
  plugins: [
    '~/plugins/axios.ts'
  ],
  vite: {
    optimizeDeps: {
      include: ['vee-validate', '@vueuse/core']
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
