<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8" v-motion
    :initial="{ opacity: 0, y: 50, scale: 0.9 }" :visible="{
      opacity: 1,
      y: 0,
      scale: 1,
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
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Карта -->
      <div class="lg:w-2/3 h-[300px]" v-motion :initial="{ opacity: 0, x: -40, rotateY: -10 }" :visible="{
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
          duration: 400,
          delay: 150,
          type: 'spring'
        }
      }">
        <div class="aspect-video relative w-full h-full rounded-lg overflow-hidden">
          <iframe :src="mapUrl" width="100%" height="100%" frameborder="0" class="absolute inset-0"></iframe>
        </div>
      </div>

      <!-- Контактная информация -->
      <div class="lg:w-1/3 flex flex-col justify-center" v-motion :initial="{ opacity: 0, x: 40, rotateY: 10 }"
        :visible="{
          opacity: 1,
          x: 0,
          rotateY: 0,
          transition: {
            duration: 400,
            delay: 200,
            type: 'spring'
          }
        }">
        <h3 class="text-xl font-semibold mb-4 text-gray-800" v-motion :initial="{ opacity: 0, y: 15 }" :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: 250
          }
        }">
          {{ contactTitle }}
        </h3>
        <div class="space-y-2">
          <div v-for="(contact, index) in contactItems" :key="index" class="flex items-start" v-motion
            :initial="{ opacity: 0, x: -20 }" :visible="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 300,
                delay: 300 + (index * 80)
              }
            }">
            <div v-motion :initial="{ scale: 0, rotate: 90 }" :visible="{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 300,
                delay: 320 + (index * 80)
              }
            }">
              <UIcon :name="contact.icon" class="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
            </div>
            <div>
              <p class="text-gray-700 text-[14px]">{{ contact.text }}</p>
            </div>
          </div>

          <div class="pt-2" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: 450
            }
          }">
            <h4 class="font-medium text-gray-800 mb-2" v-motion :initial="{ opacity: 0, x: -15 }" :visible="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 300,
                delay: 500
              }
            }">
              {{ workHoursTitle }}:
            </h4>
            <p v-for="(hours, index) in workHours" :key="index" class="text-gray-700" v-motion
              :initial="{ opacity: 0, y: 10 }" :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 550 + (index * 50)
                }
              }">
              {{ hours }}
            </p>
          </div>
        </div>

        <div v-motion :initial="{ opacity: 0, scale: 0.9, y: 20 }" :visible="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 350,
            delay: 600,
            type: 'spring'
          }
        }">
          <UButton :to="buttonUrl" color="primary" variant="solid"
            class="mt-6 transform transition-all duration-300 hover:scale-105">
            <UIcon :name="buttonIcon" class="mr-2" />
            {{ buttonText }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ContactItem {
  icon: string;
  text: string;
}

defineProps({
  title: {
    type: String,
    default: 'Наш офис'
  },
  mapUrl: {
    type: String,
    default: "https://yandex.ru/map-widget/v1/?um=constructor%3Aa9dfd8910e68f1a1ac954a3d91ecb929237c2c54ab62fc61e6dea0804d1a70da&amp;source=constructor"
  },
  contactTitle: {
    type: String,
    default: 'Контактная информация'
  },
  contactItems: {
    type: Array as () => ContactItem[],
    required: true
  },
  workHoursTitle: {
    type: String,
    default: 'Режим работы'
  },
  workHours: {
    type: Array as () => string[],
    default: () => ['Пн-Пт: 9:00 - 17:00', 'Сб-Вс: выходной']
  },
  buttonText: {
    type: String,
    default: 'Оставить заявку'
  },
  buttonUrl: {
    type: String,
    default: '/request'
  },
  buttonIcon: {
    type: String,
    default: 'i-heroicons-document-text'
  }
});
</script>

<style scoped>
/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>