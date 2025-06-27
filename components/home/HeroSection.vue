<template>
  <section class="py-16 overflow-hidden relative min-h-[500px] text-white flex justify-center" ref="heroSection">
    <!-- Hero content container -->
    <VantaBG />
    <div class="container-custom relative z-10 max-w-[1366px]">

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Левая часть - текстовый контент -->
        <div v-motion :initial="{ opacity: 0, y: 80, scale: 0.95 }" :visible-once="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1000,
            type: 'spring',
            stiffness: 60
          }
        }">

          <!-- Заголовок -->
          <h1 class="text-4xl md:text-5xl font-bold mb-4" v-motion :initial="{ opacity: 0, y: 30, rotateX: -15 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 800,
                delay: 200,
                type: 'spring'
              }
            }">
            Кадастровые работы Плесецкий район
          </h1>

          <!-- Описание -->
          <p class="text-xl mb-8" v-motion :initial="{ opacity: 0, x: -50 }" :visible-once="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 600,
              delay: 400
            }
          }">
            Предоставляем правовую
            информацию о кадастровой, геодезической деятельности и помогаем с оформлением
            всех необходимых документов. Возможен выезд по Архангельской области и другие районы по договору.
          </p>

          <!-- Кнопки -->
          <div class="flex flex-col sm:flex-row gap-4" v-motion :initial="{ opacity: 0, y: 40 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              delay: 600
            }
          }">
            <div v-motion :initial="{ scale: 0, rotate: -10 }" :visible-once="{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 400,
                delay: 800,
                type: 'spring',
                stiffness: 120
              }
            }">
              <UButton to="/request" variant="solid" color="primary"
                class="text-white transform transition-all duration-300 hover:scale-105 backdrop-blur-sm" size="xl">
                Оставить заявку
              </UButton>
            </div>

            <div v-motion :initial="{ scale: 0, rotate: 10 }" :visible-once="{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 400,
                delay: 1000,
                type: 'spring',
                stiffness: 120
              }
            }">
              <UButton to="/services" variant="outline" color="primary"
                class="text-white backdrop-blur-sm bg-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                size="xl">
                Узнать больше
              </UButton>
            </div>
          </div>
        </div>

        <!-- Правая часть - карта -->
        <div class="hidden md:block relative" v-motion :initial="{ opacity: 0, x: 100, rotateY: 45 }" :visible-once="{
          opacity: 1,
          x: 0,
          rotateY: 0,
          transition: {
            duration: 1200,
            delay: 300,
            type: 'spring',
            stiffness: 50
          }
        }">

          <!-- Фоновое изображение -->
          <NuxtImg src="/images/map-ples.png" class="absolute inset-0 w-full h-full object-cover rounded-lg" v-motion
            :initial="{ scale: 1.2, opacity: 0 }" :visible-once="{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1000,
                delay: 500
              }
            }" />

          <!-- Карта-контейнер -->
          <div class="w-full h-80 bg-white/10 rounded-lg relative overflow-hidden border border-primary-500" v-motion
            :initial="{ scale: 0.8, opacity: 0, rotate: 5 }" :visible-once="{
              scale: 1,
              opacity: 1,
              rotate: 0,
              transition: {
                duration: 800,
                delay: 600,
                type: 'spring'
              }
            }">

            <!-- Сетка карты -->
            <div class="absolute inset-0 grid grid-cols-6 grid-rows-6">
              <div v-for="i in 36" :key="i" class="bg-white/20 transition-all duration-1000 border border-primary-500"
                v-motion :initial="{ opacity: 0, scale: 0 }" :visible-once="{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 300,
                    delay: 800 + (i * 20),
                    type: 'spring'
                  }
                }">
              </div>
            </div>

            <!-- Маркеры на карте -->
            <div class="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping" v-motion
              :initial="{ scale: 0, opacity: 0 }" :visible-once="{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 300,
                  delay: 1500,
                  type: 'spring',
                  stiffness: 200
                }
              }"></div>
            <div class="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping" v-motion
              :initial="{ scale: 0, opacity: 0 }" :visible-once="{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 300,
                  delay: 1700,
                  type: 'spring',
                  stiffness: 200
                }
              }"></div>
            <div class="absolute bottom-1/4 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping" v-motion
              :initial="{ scale: 0, opacity: 0 }" :visible-once="{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 300,
                  delay: 1900,
                  type: 'spring',
                  stiffness: 200
                }
              }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VantaBG from '../ui/VantaBG.vue';

const heroSection = ref(null);
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 4rem;
  }
}

/* Дополнительные стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>