<template>
  <section class="py-16 bg-white text-gray-600 flex justify-center">
    <div class="container-custom">
      <!-- Заголовок секции -->
      <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: -40, scale: 0.95 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 600,
          type: 'spring',
          stiffness: 80
        }
      }">
        <h2 class="text-3xl font-bold mb-4" v-motion :initial="{ opacity: 0, rotateX: -20 }" :visible="{
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 400,
            delay: 100,
            type: 'spring'
          }
        }">
          Наши услуги
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 200,
            delay: 200
          }
        }">
          Мы предоставляем полный спектр услуг в сфере кадастровой деятельности по оформлению объектов
          недвижимости (земельных участков, строений)
        </p>
      </div>

      <!-- Сетка услуг -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div v-for="(service, index) in servicesBaseList" :key="service.id" class="service-card" v-motion :initial="{
          opacity: 0,
          y: 20,
          rotateY: index % 2 === 0 ? -15 : 15,
          scale: 0.9
        }" :visible="{
          opacity: 1,
          y: -20,
          rotateY: 0,
          scale: 1,
          transition: {
            duration: 300,
            delay: 100 + (index * 100),
            type: 'spring',
            stiffness: 70
          }
        }">
          <div
            class="card h-full flex flex-col bg-white rounded-lg border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-200">

            <!-- Заголовок карточки с иконкой -->
            <div class="flex items-center mb-4" v-motion :initial="{ opacity: 0, x: -30 }" :visible="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 300,
                delay: 100 + (index * 100)
              }
            }">
              <div
                class="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-primary-200"
                v-motion :initial="{ scale: 0, rotate: 180 }" :visible="{
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 300,
                    delay: 200 + (index * 100),
                    type: 'spring',
                    stiffness: 150
                  }
                }">
                <UIcon :name="service.icon" class="w-6 h-6 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800" v-motion :initial="{ opacity: 0, y: 10 }" :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 200 + (index * 100)
                }
              }">
                {{ service.title }}
              </h3>
            </div>

            <!-- Описание -->
            <p class="text-gray-600 mb-4 flex-grow" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 300,
                delay: 200 + (index * 100)
              }
            }">
              {{ service.description }}
            </p>

            <!-- Ссылка "Подробнее" -->
            <div v-motion :initial="{ opacity: 0, x: -20, scale: 0.9 }" :visible="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 400,
                delay: 200 + (index * 100),
                type: 'spring'
              }
            }">
              <NuxtLink :to="service.link"
                class="inline-flex items-center text-primary-600 hover:text-primary-800 group mt-auto">
                <span class="mr-1 transition-all duration-300 group-hover:mr-2">Подробнее</span>
                <UIcon name="i-heroicons-arrow-right"
                  class="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { servicesBaseList } from '~/utils/data/services';
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

/* Убираем старые CSS анимации, используем только Vue Motion */
.service-card {
  /* Убираем CSS анимацию */
}

/* Добавляем стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>