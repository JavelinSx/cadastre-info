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
import { technicalPlanBuildingData } from '~/utils/data/services/technical-plans/building';

definePageMeta({
    title: 'Технический план здания - Услуги кадастрового инженера',
    description: 'Профессиональное оформление технического плана здания для кадастрового учета и регистрации права собственности'
});

// Используем данные из файла
const serviceData = ref(technicalPlanBuildingData);

useSeoMeta({
    title: 'Технический план здания в Плесецке | Оформление нежилых зданий',
    description: 'Технический план здания в Плесецком районе. Обмер, подготовка документов для кадастрового учета. От 15000₽.',
    ogTitle: 'Технический план здания в Плесецке',
    ogUrl: 'https://pleskad.ru/services/technical-plans/building'
})

const { addSchema, createServiceSchema, createBreadcrumbSchema, createFAQSchema } = useSchemaOrg()

addSchema([
    createServiceSchema({
        name: 'Технический план здания',
        description: 'Подготовка технического плана нежилого здания для постановки на кадастровый учет и регистрации права собственности',
        price: 15000,
        url: 'https://pleskad.ru/services/technical-plans/building'
    }),
    createBreadcrumbSchema([
        { name: 'Главная', url: 'https://pleskad.ru' },
        { name: 'Услуги', url: 'https://pleskad.ru/services' },
        { name: 'Технические планы', url: 'https://pleskad.ru/services/technical-plans' },
        { name: 'Технический план здания', url: 'https://pleskad.ru/services/technical-plans/building' }
    ]),
    createFAQSchema(serviceData.value.faq.questions.map(q => ({ question: q.question, answer: q.answer })))
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