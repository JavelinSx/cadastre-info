<template>
  <div class="py-16 bg-gray-50 text-gray-800">
    <div class="container-custom">
      <!-- Заголовок страницы -->
      <InfoHeader :title="data.title" :description="data.description" :introText="data.introText" />

      <!-- Основное содержимое -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Основная колонка с законами -->
        <div class="md:col-span-2">
          <!-- Категории законов -->
          <div v-for="(category, categoryIndex) in data.lawCategories" :key="categoryIndex"
            class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 + categoryIndex * 100 } }">

            <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ category.title }}</h2>

            <div class="space-y-8">
              <div v-for="(law, lawIndex) in category.laws" :key="lawIndex"
                class="border-b border-gray-100 pb-6 last:border-b-0"
                :class="{ 'bg-primary-50 p-4 rounded-lg border border-primary-100': law.isMain }">
                <div class="flex items-start mb-2">
                  <h3 class="text-lg font-semibold text-gray-800">
                    {{ law.name }}
                    <span v-if="law.isUpdate"
                      class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Новое
                    </span>
                  </h3>
                </div>
                <p class="text-primary-700 font-medium mb-2">{{ law.title }}</p>
                <p class="text-gray-600 mb-3">{{ law.description }}</p>
                <NuxtLink :to="law.link" target="_blank" rel="noopener noreferrer"
                  class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                  Подробнее о законе
                  <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Часто задаваемые вопросы о законодательстве -->
          <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
            <h2 class="text-2xl font-semibold mb-6 text-gray-800">Часто задаваемые вопросы о законодательстве</h2>

            <div class="space-y-6">
              <div v-for="(faqItem, faqIndex) in data.faq" :key="faqIndex"
                class="border-b border-gray-100 pb-6 last:border-b-0">
                <h3 class="text-lg font-medium mb-3 text-gray-800">{{ faqItem.question }}</h3>
                <p class="text-gray-600">{{ faqItem.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Боковая панель -->
        <div class="w-full" v-motion :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
          <InfoSidebar title="Разделы информации" :links="sidebarLinks">
            <!-- Полезные ресурсы -->
            <div v-for="(resourceCategory, resourceIndex) in data.usefulResources" :key="resourceIndex"
              class="bg-white rounded-lg shadow-md p-6 mb-8 border border-green-500 md:border-none">
              <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ resourceCategory.title }}</h3>
              <ul class="space-y-3">
                <li v-for="(link, linkIndex) in resourceCategory.links" :key="linkIndex">
                  <a :href="link.url" target="_blank" rel="noopener noreferrer"
                    class="text-gray-700 hover:text-primary-600 flex items-start group">
                    <UIcon :name="link.icon" class="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <span class="group-hover:underline decoration-dotted">{{ link.text }}</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Помощь с вопросами законодательства -->
            <div class="bg-primary-50 rounded-lg shadow-md p-6 border border-primary-100">
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Нужна помощь с вопросами законодательства?</h3>
              <p class="text-gray-600 mb-4">
                Наши специалисты помогут разобраться в сложных юридических вопросах и подготовить необходимые документы
              </p>
              <UButton to="/request" color="primary" variant="solid" block
                class="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <UIcon name="i-heroicons-document-text" class="mr-2" />
                Получить консультацию
              </UButton>
            </div>
          </InfoSidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lawsData } from '~/utils/data/information';
import { informationData } from '~/utils/data/information';
import InfoHeader from '~/components/information/InfoHeader.vue';
import InfoSidebar from '~/components/information/InfoSidebar.vue';

const data = ref(lawsData);
const sidebarLinks = ref(informationData.sidebarLinks);

definePageMeta({
  title: 'Законодательство в сфере кадастра и недвижимости',
  description: 'Актуальная информация о законодательстве в сфере кадастра и недвижимости, федеральных законах и подзаконных актах.'
});
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
</style>