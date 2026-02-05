<template>
  <div class="py-16  text-gray-800">
    <div class="container-custom">
      <!-- Используем компонент заголовка -->
      <ServiceHeader :title="serviceData.title" :description="serviceData.description" />

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Основная информация -->
        <div class="md:col-span-2">
          <!-- Используем компонент основной информации -->
          <ServiceMainInfo :title="serviceData.mainInfo.title" :paragraphs="serviceData.mainInfo.paragraphs"
            :image="serviceData.mainInfo.image" :sections="serviceData.mainInfo.sections" />

          <!-- Используем компонент FAQ -->
          <ServiceFAQ :title="serviceData.faq.title" :questions="serviceData.faq.questions" />
        </div>

        <!-- Боковая панель -->
        <div class="w-full relative" v-motion :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
          <ServiceSidebar :serviceTypes="serviceData.sidebar.types" :results="serviceData.sidebar.results"
            :advantages="serviceData.sidebar.advantages" :documents="serviceData.sidebar.documents" />
        </div>
      </div>

      <!-- Используем компонент CTA -->
      <ServiceCTA :title="serviceData.cta.title" :description="serviceData.cta.description"
        :primaryButton="serviceData.cta.buttons.primary" :secondaryButton="serviceData.cta.buttons.secondary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ServiceSidebar, ServiceHeader, ServiceMainInfo, ServiceFAQ, ServiceCTA } from '~/components/services';
import { landDivisionData } from '~/utils/data/services/land-survey/land-division';

definePageMeta({
  title: 'Раздел земельных участков - Кадастровые услуги',
  description: 'Профессиональные услуги по разделу земельных участков с соблюдением всех юридических требований и оформлением необходимой документации'
});

// Используем данные из файла
const serviceData = ref(landDivisionData);

// SEO meta-теги
useSeoMeta({
  title: 'Раздел земельного участка в Плесецке | Деление участка',
  description: 'Раздел земельного участка в Плесецком районе. Оформление межевого плана, согласование с владельцами, регистрация в ЕГРН. От 18000₽.',
  ogTitle: 'Раздел земельного участка в Плесецке',
  ogDescription: 'Профессиональное деление земельных участков. Межевой план, согласование, регистрация.',
  ogUrl: 'https://pleskad.ru/services/land-survey/land-division'
})

// Schema.org разметка
const { addSchema, createServiceSchema, createBreadcrumbSchema, createFAQSchema } = useSchemaOrg()

const faqItems = serviceData.value.faq.questions.map(q => ({
  question: q.question,
  answer: q.answer
}))

addSchema([
  createServiceSchema({
    name: 'Раздел земельного участка',
    description: 'Деление земельного участка на несколько самостоятельных участков с оформлением межевого плана и регистрацией в ЕГРН',
    price: 18000,
    url: 'https://pleskad.ru/services/land-survey/land-division'
  }),
  createBreadcrumbSchema([
    { name: 'Главная', url: 'https://pleskad.ru' },
    { name: 'Услуги', url: 'https://pleskad.ru/services' },
    { name: 'Кадастровые работы', url: 'https://pleskad.ru/services/land-survey' },
    { name: 'Раздел участка', url: 'https://pleskad.ru/services/land-survey/land-division' }
  ]),
  createFAQSchema(faqItems)
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