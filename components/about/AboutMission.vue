<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8 mb-8" v-motion
    :initial="{ opacity: 0, x: -60, rotateY: -15 }" :visible="{
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 400,
        type: 'spring',
        stiffness: 70
      }
    }">
    <h2 class="text-2xl font-semibold mb-6 text-gray-800" v-motion :initial="{ opacity: 0, y: 20, rotateX: -10 }"
      :visible="{
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          duration: 350,
          delay: 100
        }
      }">
      {{ title }}
    </h2>
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <div class="md:w-1/3" v-motion :initial="{ opacity: 0, scale: 0.8, rotate: -5 }" :visible="{
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 400,
          delay: 150,
          type: 'spring'
        }
      }">
        <img :src="imageUrl" :alt="imageAlt" class="rounded-lg shadow-md max-w-full h-auto" :onerror="fallbackImage" />
      </div>
      <div class="md:w-2/3">
        <p v-for="(paragraph, index) in paragraphs" :key="index" class="text-gray-600 mb-4" v-motion
          :initial="{ opacity: 0, y: 20, x: 30 }" :visible="{
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 350,
              delay: 200 + (index * 100)
            }
          }">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Наша миссия'
  },
  paragraphs: {
    type: Array as () => string[],
    required: true
  },
  imageUrl: {
    type: String,
    default: '/images/about/mission.png'
  },
  imageAlt: {
    type: String,
    default: 'Миссия компании ПлесКад'
  },
  fallbackImage: {
    type: String,
    default: ""
  }
});
</script>

<style scoped>
/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>