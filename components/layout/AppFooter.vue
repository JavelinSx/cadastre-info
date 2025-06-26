<template>
  <footer class="bg-gray-800 text-white py-8 px-8 flex justify-center">
    <div class="container-custom">
      <div v-motion :initial="{ opacity: 0, x: -20 }" :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        class="flex flex-col items-center justify-center mb-8">
        <h3 class="text-2xl font-semibold mb-4">ПлесКад</h3>
        <p class="text-gray-300 text-xl text-center">
          Информационный портал о кадастровой деятельности.
          Правовая и юридическая информация о кадастровых услугах.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">


        <div v-motion :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }">
          <h3 class="text-lg font-semibold mb-4">Услуги</h3>
          <ul class="space-y-2 text-gray-300">
            <li v-for="(link, index) in serviceLinks" :key="link.url" :style="`transition-delay: ${100 + index * 50}ms`"
              class="transform translate-y-4 opacity-0 animate-footer-link">
              <NuxtLink :to="link.url" class="hover:text-primary-300 transition-colors duration-300 flex items-center">
                <UIcon name="i-heroicons-chevron-right"
                  class="w-4 h-4 mr-1 transition-transform duration-300 group-hover:translate-x-1" />
                <span>{{ link.text }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div v-motion :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }">
          <h3 class="text-lg font-semibold mb-4">Информация</h3>
          <ul class="space-y-2 text-gray-300">
            <li v-for="(link, index) in infoLinks" :key="link.url" :style="`transition-delay: ${100 + index * 50}ms`"
              class="transform translate-y-4 opacity-0 animate-footer-link">
              <NuxtLink :to="link.url"
                class="hover:text-primary-300 transition-colors duration-300 flex items-center group">
                <UIcon name="i-heroicons-chevron-right"
                  class="w-4 h-4 mr-1 transition-transform duration-300 group-hover:translate-x-1" />
                <span>{{ link.text }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div v-motion :initial="{ opacity: 0, x: 20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: 600 } }">
          <h3 class="text-lg font-semibold mb-4">Контакты</h3>
          <ul class="space-y-2 text-gray-300">
            <li v-for="(contact, index) in contactItems" :key="index"
              :style="`transition-delay: ${100 + index * 100}ms`"
              class="flex items-center gap-2 transform translate-y-4 opacity-0 animate-footer-item">
              <UIcon :name="contact.icon" class="w-5 h-5 text-primary-400" />
              <span>{{ contact.text }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p class="animate-fadeIn" style="animation-delay: 800ms">&copy; {{ new Date().getFullYear() }}
          ПлесКад. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const serviceLinks = [
  { text: 'Межевание земельных участков', url: '/services/land-survey' },
  { text: 'Технические планы', url: '/services/technical-plans' },
  { text: 'Геодезия', url: '/services/geodesic' },
  { text: 'Консультации', url: '/services/consultations' }
];

const infoLinks = [
  { text: 'Законодательство', url: '/information/laws' },
  { text: 'Часто задаваемые вопросы', url: '/information/faq' },
  { text: 'Наш блог', url: '/blog' },
  { text: 'Документы', url: '/information/docs' }
];

const contactItems = [
  { icon: 'i-heroicons-phone', text: '+7 (911) 873-99-97' },
  { icon: 'i-heroicons-envelope', text: 'zuew23@mail.ru' },
  { icon: 'i-heroicons-map-pin', text: 'рп. Плесецк, ул. Кооперативная, д. 4, 1 этаж' }
];
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-footer-link {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-footer-item {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-fadeIn {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>