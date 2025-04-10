<template>
    <div class="py-16 bg-gray-50 text-gray-800">
        <div class="container-custom">
            <!-- Заголовок страницы -->
            <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
                <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ serviceData.title }}</h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    {{ serviceData.description }}
                </p>
            </div>

            <div class="flex flex-wrap -mx-4">
                <!-- Основная информация -->
                <div class="w-full md:w-2/3 px-4">
                    <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
                        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }">
                        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ serviceData.mainInfo.title }}</h2>

                        <div v-for="(paragraph, index) in serviceData.mainInfo.paragraphs" :key="index"
                            class="text-gray-600 mb-4">
                            <p>{{ paragraph }}</p>
                        </div>

                        <div v-if="serviceData.mainInfo.image" class="mt-6 mb-6">
                            <img :src="serviceData.mainInfo.image.src" :alt="serviceData.mainInfo.image.alt"
                                class="rounded-lg w-full h-64 object-cover shadow-md" />
                        </div>

                        <template v-for="(section, sectionIndex) in serviceData.mainInfo.sections" :key="sectionIndex">
                            <h3 class="text-xl font-semibold mb-3 text-gray-800 mt-8">{{ section.title }}</h3>

                            <ul v-if="section.type === 'list'" class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                                    {{ typeof item === 'string' ? item : `${item.title} - ${item.description}` }}
                                </li>
                            </ul>

                            <ol v-if="section.type === 'numbered'"
                                class="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                                    <span v-if="typeof item === 'object' && item.title" class="font-medium">{{
                                        item.title }}</span>
                                    <span v-if="typeof item === 'object' && item.title && item.description"> — </span>
                                    <span v-if="typeof item === 'object' && item.description">{{ item.description
                                        }}</span>
                                    <span v-if="typeof item !== 'object'">{{ item }}</span>
                                </li>
                            </ol>
                        </template>
                    </div>

                    <!-- Дополнительная информация и FAQ -->
                    <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 30 }"
                        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
                        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ serviceData.faq.title }}</h2>

                        <div class="space-y-6">
                            <div v-for="(question, qIndex) in serviceData.faq.questions" :key="qIndex">
                                <h4 class="text-lg font-medium mb-2 text-gray-800">{{ question.question }}</h4>
                                <p class="text-gray-600">
                                    {{ question.answer }}
                                </p>
                                <ul v-if="question.list" class="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                                    <li v-for="(item, itemIndex) in question.list" :key="itemIndex">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Боковая панель -->
                <div class="w-full md:w-1/3 px-4 relative" v-motion :initial="{ opacity: 0, x: 30 }"
                    :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
                    <ServiceSidebar :serviceTypes="serviceData.sidebar.types" :results="serviceData.sidebar.results" />
                </div>
            </div>

            <!-- Блок с призывом к действию -->
            <div class="mt-12 bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100" v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ serviceData.cta.title }}</h2>
                    <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                        {{ serviceData.cta.description }}
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <UButton :to="serviceData.cta.buttons.primary.link" color="primary" variant="solid" size="xl"
                            class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <UIcon name="i-heroicons-document-text" class="mr-2" />
                            {{ serviceData.cta.buttons.primary.text }}
                        </UButton>
                        <UButton :to="serviceData.cta.buttons.secondary.link" color="gray" variant="outline" size="xl"
                            class="transform transition-all duration-300 hover:scale-105">
                            <UIcon name="i-heroicons-phone" class="mr-2" />
                            {{ serviceData.cta.buttons.secondary.text }}
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ServiceSidebar from '~/components/services/ServiceSidebar.vue';
import { technicalPlanHouseData } from '~/utils/data/services/technical-plans/house';

definePageMeta({
    title: 'Технический план дома - Услуги кадастрового инженера',
    description: 'Профессиональная подготовка технического плана жилого дома для постановки на кадастровый учет и регистрации права собственности'
});

// Используем данные напрямую
const serviceData = ref(technicalPlanHouseData);
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