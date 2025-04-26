<template>
  <div class="py-16 bg-gray-50 text-gray-800">
    <div class="container-custom">
      <!-- Заголовок страницы -->
      <InfoHeader :title="data.title" :description="data.description" :introText="data.introText" />

      <!-- Основное содержимое -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Основная колонка с документами -->
        <div class="md:col-span-2">
          <!-- Категории документов -->
          <div v-for="(category, categoryIndex) in data.documentCategories" :key="categoryIndex"
            class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 + categoryIndex * 100 } }">

            <div class="flex items-center mb-6">
              <UIcon :name="category.icon" class="w-8 h-8 text-primary-600 mr-3" />
              <h2 class="text-2xl font-semibold text-gray-800">{{ category.title }}</h2>
            </div>

            <div class="space-y-8">
              <div v-for="(document, docIndex) in category.documents" :key="docIndex"
                class="border-b border-gray-100 pb-6 last:border-b-0">
                <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ document.title }}</h3>
                <p class="text-gray-600 mb-4">{{ document.description }}</p>

                <div class="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 class="text-lg font-medium mb-3 text-gray-800">Необходимые документы:</h4>
                  <ul class="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                    <li v-for="(req, reqIndex) in document.requiredDocuments" :key="reqIndex">
                      {{ req }}
                    </li>
                  </ul>

                  <h4 class="text-lg font-medium mb-3 text-gray-800">Процесс подготовки:</h4>
                  <ol class="list-decimal pl-6 space-y-2 text-gray-600">
                    <li v-for="(step, stepIndex) in document.preparationProcess" :key="stepIndex">
                      {{ step }}
                    </li>
                  </ol>
                </div>

                <div class="flex flex-wrap gap-4">
                  <NuxtLink :to="document.sampleLink"
                    class="inline-flex items-center text-primary-600 hover:text-primary-800">
                    <UIcon name="i-heroicons-document-text" class="w-5 h-5 mr-2" />
                    Образец документа
                  </NuxtLink>
                  <NuxtLink :to="document.instructionLink"
                    class="inline-flex items-center text-primary-600 hover:text-primary-800">
                    <UIcon name="i-heroicons-document-check" class="w-5 h-5 mr-2" />
                    Инструкция по заполнению
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Процесс регистрации в Росреестре -->
          <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
            <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ data.registrationProcess.title }}</h2>

            <div class="relative">
              <!-- Линия процесса -->
              <div class="absolute left-4 top-0 bottom-0 w-1 bg-primary-100 hidden md:block"></div>

              <div class="space-y-8">
                <div v-for="(step, stepIndex) in data.registrationProcess.steps" :key="stepIndex"
                  class="relative flex md:pl-12 items-start">
                  <!-- Точка процесса -->
                  <div
                    class="absolute left-0 top-0 hidden md:flex w-8 h-8 rounded-full bg-primary-500 text-white items-center justify-center font-bold z-10">
                    {{ stepIndex + 1 }}
                  </div>

                  <div class="md:ml-4 w-full">
                    <div class="flex items-center md:block">
                      <div
                        class="md:hidden flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold mr-4">
                        {{ stepIndex + 1 }}
                      </div>
                      <h3 class="text-lg font-medium text-gray-800 mb-2">{{ step.title }}</h3>
                    </div>
                    <p class="text-gray-600">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Скачиваемые шаблоны -->
          <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
            <h2 class="text-2xl font-semibold mb-6 text-gray-800">Скачать шаблоны документов</h2>

            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="(template, templateIndex) in data.downloadableTemplates" :key="templateIndex"
                class="border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:border-primary-300">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-gray-100 rounded p-2 mr-4">
                    <UIcon name="i-heroicons-document-text" class="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-medium text-gray-800 mb-1">{{ template.title }}</h3>
                    <p class="text-gray-600 text-sm mb-3">{{ template.description }}</p>
                    <div class="flex items-center justify-between">
                      <div class="text-sm text-gray-500">
                        <span class="inline-block px-2 py-1 bg-gray-100 rounded text-xs mr-2">{{ template.fileFormat
                          }}</span>
                        <span>{{ template.fileSize }}</span>
                      </div>
                      <NuxtLink :to="template.downloadLink"
                        class="inline-flex items-center text-primary-600 hover:text-primary-800">
                        <span class="mr-1">Скачать</span>
                        <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4" />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Боковая панель -->
        <div class="w-full" v-motion :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
          <InfoSidebar title="Разделы информации" :links="sidebarLinks" :contactCta="data.contactCta" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { docsData } from '~/utils/data/information';
import { informationData } from '~/utils/data/information';
import InfoHeader from '~/components/information/InfoHeader.vue';
import InfoSidebar from '~/components/information/InfoSidebar.vue';

const data = ref(docsData);
const sidebarLinks = ref(informationData.sidebarLinks);

definePageMeta({
  title: 'Документы и образцы для кадастровых процедур',
  description: 'Информация о необходимых документах для кадастровых процедур, образцы заполнения форм и инструкции по оформлению.'
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