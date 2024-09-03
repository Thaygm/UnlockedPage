<template>
    <div v-if="message" :class="messageTypeClass" class="p-4 rounded-md shadow-md">
      {{ message }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps<{
    message: string;
    type: 'success' | 'error';
  }>();
  
  const messageTypeClass = computed(() => {
    switch (props.type) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  });
  </script>

  