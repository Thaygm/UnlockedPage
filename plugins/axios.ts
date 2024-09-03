import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Interceptores (se necessário)
  // api.interceptors.request.use(config => {
  //   // Adicionar cabeçalhos de autenticação ou modificar a configuração se necessário
  //   return config;
  // }, error => {
  //   return Promise.reject(error);
  // });

  // api.interceptors.response.use(response => {
  //   return response;
  // }, error => {
  //   console.error('API Error:', error);
  //   return Promise.reject(error);
  // });

  nuxtApp.provide('api', api);
});
