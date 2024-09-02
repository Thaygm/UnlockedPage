import { maska } from 'vue-the-mask';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(maska);
});
