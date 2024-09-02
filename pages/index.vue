<template>
  <div class="relative w-full h-screen bg-cover bg-center flex flex-col overflow-hidden">
    <div class="absolute inset-0 z-10">
      <img src="/images/Union.png" alt="Union" class="w-full h-full object-cover filter blur-sm" />
    </div>
    <div class="absolute inset-0 bg-gradient-to-br from-[#011215] via-[#024CC8] to-[#02C8B0] z-0"></div>
    <div class="absolute left-[130px] top-[56px]">
      <img src="/images/LOGO.png" alt="Logo" class="w-[120.17px] h-[32px]" />
    </div>

    <div class="relative z-20 container mx-auto px-6" style="top: 215px; left: 130px;">
      <div class="text-white w-full max-w-lg space-y-6">
        <form @submit.prevent="submitForm" class="w-full space-y-6">
          <h2 class="text-4xl font-bold" style="font-size: 49px; white-space: nowrap;">Inscreva-se em nossa newsletter.</h2>

          <div class="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div class="flex-1">
              <label for="name" class="block text-lg text-white">Nome Completo</label>
              <input type="text" id="name" name="name" v-model="name" placeholder="Insira o seu Nome Completo"
                    class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500" style="width: 374px; height: 40px;" />
            </div>
            <div class="flex-1">
              <label for="email" class="block text-lg text-white">E-mail</label>
              <input type="email" id="email" name="email" v-model="email" placeholder="Insira o seu E-mail"
                  class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500"  style="width: 374px; height: 40px;" />
            </div>
          </div>

          <div class="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div class="flex-1">
              <label for="phone" class="block text-lg text-white">Telefone</label>
              <input type="text" id="phone" name="phone" v-model="phoneNumber" placeholder="(00) 9 0000-0000"
                  v-maska="'(##) # ####-####'"
                    class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500" style="width: 374px; height: 40px;" />
            </div>
            <div class="flex-1">
              <label for="company" class="block text-lg text-white">Empresa</label>
              <input type="text" id="company" name="company" v-model="company" placeholder="Insira a Empresa"
                    class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500" style="width: 374px; height: 40px;"/>
            </div>
          </div>

          <button 
            type="submit" 
            @mouseover="showIcon = true" 
            @mouseout="showIcon = false"
            class="bg-pink-600 text-white font-bold py-2 px- rounded-md flex items-center justify-center space-x-2 transition-all duration-300">
            <span class="transition-opacity duration-300">Realizar inscrição</span>
            <img :class="{'opacity-100': showIcon, 'opacity-0': !showIcon}" src="/images/Newspaper.png" alt="Icon" class="w-5 h-5 transition-opacity duration-300" />
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
import { useRouter } from 'vue-router';
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const company = ref('');
const showIcon = ref(false);

const router = useRouter();

const submitForm = () => {
  router.push('/finish');
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
