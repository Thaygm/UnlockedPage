import { defineNuxtPlugin } from '#app';
import { configure, defineRule, ErrorMessage, Form, Field } from 'vee-validate';
import * as yup from 'yup';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('ErrorMessage', ErrorMessage);
  nuxtApp.vueApp.component('Form', Form);
  nuxtApp.vueApp.component('Field', Field);

  configure({
    generateMessage: (ctx) => {
      const messages: Record<string, string> = {
        required: `O campo ${ctx.field} é obrigatório.`,
        email: `O campo ${ctx.field} deve ser um e-mail válido.`,
      };
      return messages[ctx.rule?.name ?? ''] || `O campo ${ctx.field} é inválido.`;
    },
  });

  defineRule('phone', value => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(value) || 'Número de telefone inválido.';
  });
});
