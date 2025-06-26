<template>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
    <div v-for="(service, index) in services" :key="service.id" class="service-card" v-motion :initial="{
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateY: index % 2 === 0 ? -10 : 10
    }" :visible="{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0,
              transition: {
                duration: 400,
                delay: index * 100,
                type: 'spring',
                stiffness: 70
              }
            }">
      <div
        class="bg-white/90 backdrop-blur-sm rounded-lg border border-white/30 p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white/95">

        <!-- Заголовок с иконкой -->
        <div class="flex mb-4" v-motion :initial="{ opacity: 0, x: -30 }" :visible="{
          opacity: 1,
          x: 0,
          transition: {
            duration: 300,
            delay: index * 100 + 200
          }
        }">
          <div
            class="rounded-full bg-primary-100/90 p-3 w-12 h-12 flex items-center justify-center mr-4 backdrop-blur-sm border border-primary-200/50"
            v-motion :initial="{ scale: 0, rotate: 180 }" :visible="{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 350,
                delay: index * 100 + 250,
                type: 'spring',
                stiffness: 120
              }
            }">
            <UIcon :name="service.icon" class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800" v-motion :initial="{ opacity: 0, y: 15 }" :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: index * 100 + 300
            }
          }">
            {{ service.title }}
          </h3>
        </div>

        <!-- Описание -->
        <p class="text-gray-600 mb-6 flex-grow" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: index * 100 + 350
          }
        }">
          {{ service.description }}
        </p>

        <!-- Ссылка -->
        <div class="mt-auto" v-motion :initial="{ opacity: 0, x: -20, scale: 0.9 }" :visible="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 300,
            delay: index * 100 + 400,
            type: 'spring'
          }
        }">
          <NuxtLink :to="service.link"
            class="inline-flex items-center text-primary-600 hover:text-primary-800 group font-medium">
            <span class="mr-1 transition-all duration-300 group-hover:mr-2">Подробнее</span>
            <UIcon name="i-heroicons-arrow-right"
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

defineProps({
  services: {
    type: Array as () => Service[],
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
.service-card:hover .bg-primary-100\/90 {
  background-color: rgb(239 246 255 / 0.95);
  transform: scale(1.05);
}

/* Адаптивная сетка */
@media (max-width: 767px) {

  /* Мобильные: 1 колонка */
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: 768px) and (max-width: 1366px) {

  /* Планшеты и маленькие десктопы: 2 колонки */
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1920px) {

  /* Большие экраны: 4 колонки */
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* Оптимизация для мобильных */
@media (max-width: 767px) {
  .service-card {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>