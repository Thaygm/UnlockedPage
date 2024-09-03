<template>
  <div class="relative w-full h-screen bg-cover bg-center flex flex-col overflow-hidden">
    <div class="absolute inset-0 z-10">
      <img src="/images/Union.png" alt="Union" class="w-full h-full object-cover filter blur-sm" />
    </div>
    <div class="absolute inset-0 bg-gradient-to-br from-[#011215] via-[#024CC8] to-[#02C8B0] z-0"></div>

    <div class="absolute top-4 left-4 lg:top-[56px] lg:left-[130px] z-10">
      <img src="/images/LOGO.png" alt="Logo" class="w-[80px] h-[21px] lg:w-[120.17px] lg:h-[32px]" />
    </div>

    <div class="relative z-20 container mx-auto px-4 sm:px-6 lg:px-6 lg:top-[215px] lg:left-[130px] top-[100px]">
      <div class="text-white w-full max-w-lg space-y-6">
        <FeedbackMessage :message="feedbackMessage" :type="feedbackType" v-if="feedbackMessage" />
        <form @submit.prevent="handleSubmitForm" class="w-full space-y-6">
          <h2 class="text-2xl sm:text-3xl lg:text-5xl font-bold lg:whitespace-nowrap">
            Inscreva-se em nossa newsletter.
          </h2>

          <div class="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div class="flex-1">
              <label for="name" class="block text-lg text-white">Nome Completo</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Insira o seu Nome Completo"
                class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500"
                style="width: 374px; height: 40px;"
              />
              <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
            </div>
            <div class="flex-1">
              <label for="email" class="block text-lg text-white">E-mail</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="Insira o seu E-mail"
                class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500"
                style="width: 374px; height: 40px;"
              />
              <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div class="flex-1">
              <label for="phone" class="block text-lg text-white">Telefone</label>
              <input
                type="text"
                id="phone"
                v-model="form.phone"
                placeholder="(00) 9 0000-0000"
                class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500"
                style="width: 374px; height: 40px;"
              />
              <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
            </div>
            <div class="flex-1">
              <label for="company" class="block text-lg text-white">Empresa</label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                placeholder="Insira a Empresa"
                class="w-full h-12 px-4 rounded-full bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-blue-500"
                style="width: 374px; height: 40px;"
              />
              <span v-if="errors.company" class="text-red-500">{{ errors.company }}</span>
            </div>
          </div>

          <button
            type="submit"
            @mouseover="showIcon = true"
            @mouseout="showIcon = false"
            class="bg-pink-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <span class="transition-opacity duration-300">Realizar inscrição</span>
            <img
              :class="{'opacity-100': showIcon, 'opacity-0': !showIcon}"
              src="/images/Newspaper.png"
              alt="Icon"
              class="w-5 h-5 transition-opacity duration-300"
            />
          </button>
        </form>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 z-20 hidden lg:block">
      <img src="/images/young-woman.png" alt="Woman" class="w-auto max-h-[calc(100vh - 100px)]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FeedbackMessage from '~/components/FeedbackMessage.vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: ''
});

const errors = ref({
  name: '',
  email: '',
  phone: '',
  company: ''
});

const showIcon = ref<boolean>(false);
const router = useRouter();
const feedbackMessage = ref('');
const feedbackType = ref<'success' | 'error'>('success');

const validateForm = () => {
  errors.value.name = form.value.name ? '' : 'O campo Nome Completo é obrigatório.';
  errors.value.email = form.value.email ? '' : 'O campo E-mail é obrigatório.';
  errors.value.phone = form.value.phone ? '' : 'O campo Telefone é obrigatório.';
  errors.value.company = form.value.company ? '' : 'O campo Empresa é obrigatório.';

  return !Object.values(errors.value).some(error => error);
};

const handleSubmitForm = () => {
  if (validateForm()) {
    feedbackMessage.value = 'Inscrição realizada com sucesso!';
    feedbackType.value = 'success';
    setTimeout(() => router.push('/finish'), 2000);
  } else {
    feedbackMessage.value = 'Por favor, preencha todos os campos obrigatórios.';
    feedbackType.value = 'error';
  }
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

@media (max-width: 1024px) {
  .whitespace-nowrap {
    white-space: normal;
  }
  .container {
    top: 150px;
    left: 20px;
  }
  .hidden.lg\:block {
    display: none;
  }
}
</style>