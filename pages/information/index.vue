<template>
    <div class="py-16  text-gray-800">
        <div class="container-custom">
            <!-- Заголовок страницы -->
            <InfoHeader :title="data.title" :description="data.description" />

            <!-- Основное содержимое -->
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Главная колонка -->
                <div class="md:col-span-2">
                    <!-- Информационные блоки -->
                    <div class="space-y-8">
                        <!-- Блок "Что такое кадастровые работы" -->
                        <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, x: -30 }"
                            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }">
                            <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ data.sections[0].title }}</h2>
                            <p v-for="(paragraph, pIndex) in data.sections[0].paragraphs" :key="pIndex"
                                class="text-gray-600 mb-4">
                                {{ paragraph }}
                            </p>
                        </div>

                        <!-- Блок "Законодательство" -->
                        <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, x: -30 }"
                            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
                            <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ data.sections[1].title }}</h2>
                            <p v-for="(paragraph, pIndex) in data.sections[1].paragraphs" :key="pIndex"
                                class="text-gray-600 mb-4">
                                {{ paragraph }}
                            </p>
                            <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                                <li v-for="(item, itemIndex) in data.sections[1].list" :key="itemIndex">{{ item }}</li>
                            </ul>
                            <NuxtLink :to="data.sections[1].linkUrl"
                                class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                                {{ data.sections[1].linkText }}
                                <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                            </NuxtLink>
                        </div>

                        <!-- Блок "Типы кадастровых документов" -->
                        <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, x: -30 }"
                            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }">
                            <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ data.sections[2].title }}</h2>
                            <p v-for="(paragraph, pIndex) in data.sections[2].paragraphs" :key="pIndex"
                                class="text-gray-600 mb-4">
                                {{ paragraph }}
                            </p>
                            <div class="space-y-4 mb-4">
                                <div v-for="(subsection, subIndex) in data.sections[2].subsections" :key="subIndex"
                                    class="border-l-4 border-primary-500 pl-4">
                                    <h3 class="text-lg font-medium mb-2 text-gray-800">{{ subsection.title }}</h3>
                                    <p class="text-gray-600">
                                        {{ subsection.content }}
                                    </p>
                                </div>
                            </div>
                            <NuxtLink :to="data.sections[2].linkUrl"
                                class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                                {{ data.sections[2].linkText }}
                                <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                            </NuxtLink>
                        </div>

                        <!-- Блок "Процедура кадастрового учета" -->
                        <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, x: -30 }"
                            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 500 } }">
                            <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ data.sections[3].title }}</h2>
                            <p v-for="(paragraph, pIndex) in data.sections[3].paragraphs" :key="pIndex"
                                class="text-gray-600 mb-4">
                                {{ paragraph }}
                            </p>
                            <h3 class="text-xl font-semibold mb-3 text-gray-800 mt-4">{{ data.sections[3].subtitleText
                            }}</h3>
                            <ol class="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                                <li v-for="(item, itemIndex) in data.sections[3].numberedList" :key="itemIndex">
                                    <span class="font-medium">{{ item.title }}</span> —
                                    <span>{{ item.description }}</span>
                                </li>
                            </ol>
                            <p v-for="(paragraph, pIndex) in data.sections[3].paragraphsAfter" :key="pIndex"
                                class="text-gray-600">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Боковая панель -->
                <div class="w-full" v-motion :initial="{ opacity: 0, x: 30 }"
                    :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
                    <InfoSidebar title="Разделы информации" :links="data.sidebarLinks">
                        <!-- Популярные вопросы -->
                        <div class="bg-white rounded-lg shadow-md p-6 mb-8 border border-green-500 md:border-none">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800">Популярные вопросы</h3>
                            <ul class="space-y-4">
                                <li v-for="(question, qIndex) in data.popularQuestions" :key="qIndex"
                                    class="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                                    <NuxtLink to="/information/faq"
                                        class="text-gray-700 hover:text-primary-600 flex items-start group">
                                        <UIcon name="i-heroicons-question-mark-circle"
                                            class="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                                        <span class="group-hover:underline decoration-dotted">{{ question }}</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                            <div class="mt-4">
                                <NuxtLink to="/information/faq"
                                    class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                                    Все вопросы и ответы
                                    <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                                </NuxtLink>
                            </div>
                        </div>
                    </InfoSidebar>
                </div>
            </div>

            <!-- Секция "Полезные материалы" -->
            <div class="mt-12" v-motion :initial="{ opacity: 0, y: 30 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
                <h2 class="text-2xl font-bold mb-6 text-center">Полезные материалы</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="(material, mIndex) in data.usefulMaterials" :key="mIndex"
                        class="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-primary-200">
                        <UIcon :name="material.icon" class="w-10 h-10 text-primary-600 mb-4" />
                        <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ material.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ material.description }}</p>
                        <NuxtLink :to="material.url"
                            class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                            {{ material.linkText }}
                            <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { informationData } from '~/utils/data/information';
import InfoHeader from '~/components/information/InfoHeader.vue';
import InfoSidebar from '~/components/information/InfoSidebar.vue';

const data = ref(informationData);

definePageMeta({
    title: 'Информация о кадастровых услугах',
    description: 'Полезная правовая и юридическая информация в сфере кадастра и недвижимости, законодательство, документы и ответы на вопросы.'
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