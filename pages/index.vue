<template>
  <div class="relative w-full h-screen bg-cover bg-center flex flex-col overflow-hidden">
    <div class="absolute inset-0 z-10">
      <img src="/images/Union.png" alt="Union" class="w-full h-full object-cover" />
    </div>

    <div class="absolute inset-0 bg-gradient-to-br from-[#011215] via-[#024CC8] to-[#02C8B0] z-0"></div>
    <div class="absolute left-[130px] top-[56px]">
      <img src="/images/LOGO.png" alt="Logo" class="w-[120.17px] h-[32px]" />
    </div>

    <div class="relative z-20 container mx-auto px-6" style="top: 215px; left: 130px; gap: 48px;">
      <div class="text-white w-full max-w-lg">
        <form @submit.prevent="submitForm" class="w-full space-y-6">
          <h2 class="text-4xl font-bold" style="font-size: 49px; white-space: nowrap;">Inscreva-se em nossa newsletter.</h2>
          <div class="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div class="flex-1">
              <label for="name" class="block text-lg text-white">Nome Completo</label>
              <input type="text" id="name" name="name" v-model="name" placeholder="Nome Completo"
                  class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="flex-1">
              <label for="email" class="block text-lg text-white">E-mail</label>
              <input type="email" id="email" name="email" v-model="email" placeholder="E-mail"
                  class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label for="phone" class="block text-lg text-white">Telefone</label>
            <input type="text" id="phone" name="phone" v-model="phone" placeholder="Telefone"
                v-mask="'(00) 00000-0000'"
                class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label for="company" class="block text-lg text-white">Empresa</label>
            <input type="text" id="company" name="company" v-model="company" placeholder="Empresa"
                class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button 
            type="submit" 
            @mouseover="showIcon = true" 
            @mouseout="showIcon = false"
            class="bg-pink-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-colors duration-300">
            <span :class="{'opacity-100': !showIcon, 'opacity-0': showIcon}" class="transition-opacity duration-300">Realizar inscrição</span>
            <img :class="{'block': showIcon, 'hidden': !showIcon}" src="/images/Newspaper.png" alt="Icon" class="w-5 h-5 transition-opacity duration-300" />
          </button>
        </form>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 z-20">
      <img src="/images/young-woman.png" alt="Woman" class="w-auto max-h-[calc(100vh - 100px)]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { maska } from 'vue-the-mask';

const name = ref('');
const email = ref('');
const phone = ref('');
const company = ref('');
const showIcon = ref(false);

const submitForm = () => {
  console.log({ name: name.value, email: email.value, phone: phone.value, company: company.value });
};
</script>

<style scoped>
html, body {
  overflow: hidden;
}

button img {
  transition: opacity 0.3s ease;
}

button span {
  transition: opacity 0.3s ease;
}
</style>
