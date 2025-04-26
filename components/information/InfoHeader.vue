<template>
    <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
      <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ title }}</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        {{ description }}
      </p>
      <div v-if="introText" class="mt-4 max-w-3xl mx-auto">
        <p class="text-gray-600">{{ introText }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    introText: {
      type: String,
      default: ''
    }
  });
  </script>