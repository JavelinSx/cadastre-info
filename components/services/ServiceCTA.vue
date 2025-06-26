<template>
  <div class="mt-12 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/30" v-motion
    :initial="{ opacity: 0, y: 50, scale: 0.95 }" :visible="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 400,
        type: 'spring',
        stiffness: 70
      }
    }">
    <div class="text-center">
      <!-- Заголовок -->
      <h2 class="text-2xl font-bold mb-4 text-gray-800" v-motion :initial="{ opacity: 0, y: 20, rotateX: -10 }"
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

      <!-- Описание -->
      <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto" v-motion :initial="{ opacity: 0, y: 15 }" :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 300,
          delay: 150
        }
      }">
        {{ description }}
      </p>

      <!-- Кнопки -->
      <div class="flex flex-col sm:flex-row justify-center gap-4" v-motion :initial="{ opacity: 0, y: 30 }" :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 350,
          delay: 200
        }
      }">
        <!-- Основная кнопка -->
        <div v-motion :initial="{ scale: 0, rotate: -10 }" :visible="{
          scale: 1,
          rotate: 0,
          transition: {
            duration: 300,
            delay: 250,
            type: 'spring',
            stiffness: 100
          }
        }">
          <UButton :to="primaryButton.link" color="primary" variant="solid" size="xl"
            class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-gray-700">
            <UIcon name="i-heroicons-document-text" class="mr-2" />
            {{ primaryButton.text }}
          </UButton>
        </div>

        <!-- Вторичная кнопка - исправленная на зеленую -->
        <div v-motion :initial="{ scale: 0, rotate: 10 }" :visible="{
          scale: 1,
          rotate: 0,
          transition: {
            duration: 300,
            delay: 300,
            type: 'spring',
            stiffness: 100
          }
        }">
          <UButton :to="secondaryButton.link" color="primary" variant="solid" size="xl"
            class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg  text-gray-700">
            <UIcon name="i-heroicons-phone" class="mr-2" />
            {{ secondaryButton.text }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ButtonProps {
  text: string;
  link: string;
}

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  primaryButton: {
    type: Object as () => ButtonProps,
    required: true
  },
  secondaryButton: {
    type: Object as () => ButtonProps,
    required: true
  }
});
</script>

<style scoped>
/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}

/* Дополнительные стили для зеленой кнопки */
.bg-green-600 {
  background-color: rgb(22 163 74);
}

.hover\:bg-green-700:hover {
  background-color: rgb(21 128 61);
}

.border-green-600 {
  border-color: rgb(22 163 74);
}

.hover\:border-green-700:hover {
  border-color: rgb(21 128 61);
}
</style>