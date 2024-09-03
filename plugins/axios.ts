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

  nuxtApp.provide('api', api);
});
