<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8 mb-8" v-motion
    :initial="{ opacity: 0, x: 60, rotateY: 15 }" :visible="{
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 400,
        type: 'spring',
        stiffness: 70
      }
    }">
    <h2 class="text-2xl text-center font-semibold mb-6 text-gray-800" v-motion
      :initial="{ opacity: 0, y: 20, scale: 0.95 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 350,
          delay: 100
        }
      }">
      {{ title }}
    </h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div v-for="(feature, index) in features" :key="feature.id" class="flex md:flex-col md:items-center items-start"
        v-motion :initial="{
          opacity: 0,
          y: 40,
          scale: 0.9,
          rotateX: 15
        }" :visible="{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    duration: 350,
                    delay: 150 + (index * 100),
                    type: 'spring'
                  }
                }">
        <div class="flex-shrink-0 mt-1">
          <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center" v-motion
            :initial="{ scale: 0, rotate: 90 }" :visible="{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 300,
                delay: 200 + (index * 100),
                type: 'spring',
                stiffness: 150
              }
            }">
            <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600" />
          </div>
        </div>
        <div class="ml-4 md:flex flex-col items-center">
          <h3 class="text-lg font-medium text-gray-800 mb-1" v-motion :initial="{ opacity: 0, x: -15 }" :visible="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 300,
              delay: 250 + (index * 100)
            }
          }">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 text-center" v-motion :initial="{ opacity: 0, y: 10 }" :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: 300 + (index * 100)
            }
          }">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

defineProps({
  title: {
    type: String,
    default: 'Почему выбирают нас'
  },
  features: {
    type: Array as () => Feature[],
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