<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8 mt-8" v-motion
    :initial="{ opacity: 0, x: -50, rotateX: 10 }" :visible="{
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 400,
        type: 'spring',
        stiffness: 70
      }
    }">
    <h2 class="text-2xl text-center font-semibold mb-6 text-gray-800" v-motion :initial="{ opacity: 0, y: 20 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 350,
          delay: 100
        }
      }">
      {{ title }}
    </h2>
    <div class="space-y-4">
      <p class="text-gray-600" v-motion :initial="{ opacity: 0, y: 15 }" :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 300,
          delay: 150
        }
      }">
        {{ description }}
      </p>

      <div class="grid md:grid-cols-3 gap-4 mt-6">
        <div v-for="(stat, index) in stats" :key="index" class="p-4 rounded-lg text-center" v-motion :initial="{
          opacity: 0,
          scale: 0.8,
          y: 30
        }" :visible="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 350,
            delay: 200 + (index * 120),
            type: 'spring'
          }
        }">
          <div class="text-3xl font-bold text-primary-600 mb-2" v-motion :initial="{ scale: 0, rotate: 45 }" :visible="{
            scale: 1,
            rotate: 0,
            transition: {
              duration: 300,
              delay: 250 + (index * 120),
              type: 'spring',
              stiffness: 120
            }
          }">
            {{ stat.value }}
          </div>
          <div class="text-gray-700" v-motion :initial="{ opacity: 0, y: 10 }" :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: 300 + (index * 120)
            }
          }">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <p class="text-gray-600 mt-4" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 300,
          delay: 400
        }
      }">
        {{ additionalInfo }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StatItem {
  value: string;
  label: string;
}

defineProps({
  title: {
    type: String,
    default: 'Наш опыт'
  },
  description: {
    type: String,
    required: true
  },
  stats: {
    type: Array as () => StatItem[],
    required: true
  },
  additionalInfo: {
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