import { defineNuxtPlugin } from '#app';
import { configure, defineRule, ErrorMessage, Form, Field, useForm } from 'vee-validate';
import * as yup from 'yup';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ErrorMessage);
  nuxtApp.vueApp.use(Form);
  nuxtApp.vueApp.use(Field);
  nuxtApp.vueApp.use(useForm);


  configure({
    generateMessage: (ctx) => {
      const messages = {
        required: `O campo ${ctx.field} é obrigatório.`,
        email: `O campo ${ctx.field} deve ser um e-mail válido.`,
      };
      return messages[ctx.rule.name] || `O campo ${ctx.field} é inválido.`;
    },
  });

  defineRule('phone', value => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(value) || 'Número de telefone inválido.';
  });
});
