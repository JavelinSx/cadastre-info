<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8 mb-8" v-motion
    :initial="{ opacity: 0, y: 60, scale: 0.95 }" :visible="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 400,
        type: 'spring',
        stiffness: 70
      }
    }">
    <h2 class="text-2xl font-semibold mb-6 text-gray-800" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 350,
        delay: 100
      }
    }">
      {{ title }}
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(member, index) in team" :key="index"
        class="p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md md:flex flex-col items-center"
        v-motion :initial="{
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotateY: index % 2 === 0 ? -10 : 10
        }" :visible="{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    duration: 400,
                    delay: 150 + (index * 150),
                    type: 'spring'
                  }
                }">
        <div class="mb-4 flex justify-center">
          <div class="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center shadow-sm" v-motion
            :initial="{ scale: 0, rotate: 180 }" :visible="{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 350,
                delay: 200 + (index * 150),
                type: 'spring',
                stiffness: 120
              }
            }">
            <UIcon name="i-heroicons-user" class="w-16 h-16 text-primary-600" />
          </div>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 text-center mb-2 w-56" v-motion :initial="{ opacity: 0, y: 15 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: 250 + (index * 150)
            }
          }">
          {{ member.name }}
        </h3>
        <p class="text-primary-600 font-medium text-center mb-4" v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 300,
              delay: 300 + (index * 150)
            }
          }">
          {{ member.position }}
        </p>
        <p class="text-gray-600 text-center" v-motion :initial="{ opacity: 0, y: 10 }" :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: 350 + (index * 150)
          }
        }">
          {{ member.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TeamMember {
  name: string;
  position: string;
  description: string;
}

defineProps({
  title: {
    type: String,
    default: 'Наша команда'
  },
  team: {
    type: Array as () => TeamMember[],
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