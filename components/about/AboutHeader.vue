<template>
  <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: -50, scale: 0.95 }" :visible="{
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 400,
      type: 'spring',
      stiffness: 80
    }
  }">
    <h1 class="text-4xl font-bold mb-4 text-white" v-motion :initial="{ opacity: 0, rotateX: -15 }" :visible="{
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 350,
        delay: 100,
        type: 'spring'
      }
    }">
      {{ title }}
    </h1>
    <p class="text-xl text-white/90 max-w-3xl mx-auto" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 300,
        delay: 150
      }
    }">
      {{ description }}
    </p>
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
  }
});
</script>

<style scoped>
/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>