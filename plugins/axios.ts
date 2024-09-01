// plugins/axios.ts

import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const api = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  // api.interceptors.request.use(config => {
  //   // const token = 'token-token-token';
  //   // if (token) {
  //   //   config.headers.Authorization = `Bearer ${token}`;
  //   // }
  //   return config
  // }, error => {
  //   return Promise.reject(error)
  // })

  // api.interceptors.response.use(response => {
  //   return response
  // }, error => {
  //   console.error('API Error:', error)
  //   return Promise.reject(error)
  // })

  nuxtApp.provide('api', api)
})