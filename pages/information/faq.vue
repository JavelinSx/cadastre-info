<template>
  <div class="py-16  text-gray-800">
    <div class="container-custom">
      <!-- Заголовок страницы -->
      <InfoHeader :title="data.title" :description="data.description" :introText="data.introText" />

      <!-- Основное содержимое -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Основная колонка с вопросами -->
        <div class="md:col-span-2">
          <!-- Категории вопросов -->
          <div v-for="(category, categoryIndex) in data.categories" :key="categoryIndex"
            class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 + categoryIndex * 100 } }">

            <div class="flex items-center mb-6">
              <UIcon :name="category.icon" class="w-8 h-8 text-primary-600 mr-3" />
              <h2 class="text-2xl font-semibold text-gray-800">{{ category.title }}</h2>
            </div>

            <div class="space-y-6">
              <div v-for="(item, itemIndex) in category.questions" :key="itemIndex"
                class="border-b border-gray-100 pb-6 last:border-b-0">
                <h3 class="text-lg font-medium mb-3 text-gray-800">{{ item.question }}</h3>
                <p class="text-gray-600">{{ item.answer }}</p>
              </div>
            </div>
          </div>

          <!-- Поиск вопросов -->
          <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
            <h2 class="text-xl font-semibold mb-4 text-gray-800">{{ data.searchText }}</h2>
            <div class="relative mb-6">
              <input type="text" placeholder="Введите ваш вопрос..."
                class="w-full py-3 px-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              <UIcon name="i-heroicons-magnifying-glass" class="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            </div>
            <UButton to="/request" color="primary" variant="solid" block>
              Задать свой вопрос
            </UButton>
          </div>
        </div>

        <!-- Боковая панель -->
        <div class="w-full" v-motion :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
          <InfoSidebar title="Разделы информации" :links="sidebarLinks" :contactCta="data.contactCta">
            <!-- Популярные вопросы -->
            <div class="bg-white rounded-lg shadow-md p-6 mb-8 border border-green-500 md:border-none">
              <h3 class="text-xl font-semibold mb-4 text-gray-800">Популярные вопросы</h3>
              <ul class="space-y-4">
                <li v-for="(question, qIndex) in data.popularQuestions" :key="qIndex"
                  class="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                  <a href="#" class="text-gray-700 hover:text-primary-600 flex items-start group">
                    <UIcon name="i-heroicons-question-mark-circle"
                      class="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <span class="group-hover:underline decoration-dotted">{{ question }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </InfoSidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faqData } from '~/utils/data/information';
import { informationData } from '~/utils/data/information';
import InfoHeader from '~/components/information/InfoHeader.vue';
import InfoSidebar from '~/components/information/InfoSidebar.vue';

const data = ref(faqData);
const sidebarLinks = ref(informationData.sidebarLinks);

definePageMeta({
  title: 'Часто задаваемые вопросы о кадастровых услугах',
  description: 'Ответы на популярные вопросы о кадастровом учете и оформлении недвижимости.'
});

// SEO meta-теги
useSeoMeta({
  title: 'Часто задаваемые вопросы о кадастровых услугах | ПлесКад',
  description: 'Ответы на популярные вопросы о кадастровом учете, межевании, технических планах и оформлении недвижимости в Плесецком районе.',
  ogTitle: 'FAQ - Часто задаваемые вопросы о кадастровых услугах',
  ogDescription: 'Полезная информация о кадастровых работах. Ответы на популярные вопросы от профессионального кадастрового инженера.',
  ogUrl: 'https://pleskad.ru/information/faq'
})

// Schema.org разметка для FAQ
const { addSchema, createFAQSchema, createBreadcrumbSchema } = useSchemaOrg()

// Собираем все вопросы из всех категорий
const allFAQs = data.value.categories.flatMap(category =>
  category.questions.map(q => ({
    question: q.question,
    answer: q.answer
  }))
)

addSchema([
  createFAQSchema(allFAQs),
  createBreadcrumbSchema([
    { name: 'Главная', url: 'https://pleskad.ru' },
    { name: 'Информация', url: 'https://pleskad.ru/information' },
    { name: 'Часто задаваемые вопросы', url: 'https://pleskad.ru/information/faq' }
  ])
])
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