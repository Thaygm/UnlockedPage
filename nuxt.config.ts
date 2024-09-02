// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  build: {
    transpile: ['vee-validate', '@vueuse/core', 'vue-the-mask']
  },
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/vue-the-mask.js'
  ],
  vite: {
    optimizeDeps: {
      include: ['vee-validate', '@vueuse/core', 'vue-the-mask']
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.otf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '/fonts/',
            }
          }
        ]
      });
    }
  }
});


