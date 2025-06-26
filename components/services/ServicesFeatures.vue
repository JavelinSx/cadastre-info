<template>
  <div class="mt-20">
    <!-- Заголовок секции -->
    <h2 class="text-3xl font-bold mb-8 text-center text-white" v-motion :initial="{ opacity: 0, y: -30, scale: 0.95 }"
      :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400,
          type: 'spring',
          stiffness: 80
        }
      }">
      {{ title }}
    </h2>

    <!-- Сетка преимуществ -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(feature, index) in features" :key="feature.id" class="feature-card" v-motion :initial="{
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: 15
      }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
          duration: 400,
          delay: index * 120,
          type: 'spring',
          stiffness: 60
        }
      }">
        <div
          class="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/30 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white/95">

          <!-- Иконка -->
          <div class="flex items-center mb-4">
            <div
              class="rounded-full bg-primary-100/90 backdrop-blur-sm p-3 w-12 h-12 flex items-center justify-center mb-4 mr-4 border border-primary-200/50"
              v-motion :initial="{ scale: 0, rotate: 180, opacity: 0 }" :visible="{
                scale: 1,
                rotate: 0,
                opacity: 1,
                transition: {
                  duration: 350,
                  delay: index * 120 + 200,
                  type: 'spring',
                  stiffness: 150
                }
              }">
              <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600" />
            </div>
            <!-- Заголовок -->
            <h3 class="text-xl font-semibold mb-2 text-gray-800" v-motion :initial="{ opacity: 0, x: -20 }" :visible="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 300,
                delay: index * 120 + 250
              }
            }">
              {{ feature.title }}
            </h3>
          </div>



          <!-- Описание -->
          <p class="text-gray-600" v-motion :initial="{ opacity: 0, y: 15 }" :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: index * 120 + 300
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

/* Дополнительные hover эффекты */
.feature-card:hover .bg-primary-100\/90 {
  background-color: rgb(239 246 255 / 0.95);
  transform: scale(1.1) rotate(5deg);
}

/* Оптимизация для мобильных */
@media (max-width: 767px) {
  .feature-card {
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>