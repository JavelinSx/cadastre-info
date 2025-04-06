<template>
    <section class="py-16 bg-white text-gray-600">
        <div class="container-custom">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Наши услуги</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Мы предоставляем полный спектр услуг в сфере кадастровой деятельности и оформления недвижимости
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(service, index) in services" :key="service.id" class="service-card"
                    :style="`--index: ${index + 1}`">
                    <div
                        class="card h-full flex flex-col bg-white rounded-lg border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-200">
                        <div class="flex items-center mb-4">
                            <div
                                class="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-primary-200">
                                <UIcon :name="service.icon" class="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800">{{ service.title }}</h3>
                        </div>

                        <p class="text-gray-600 mb-4 flex-grow">{{ service.description }}</p>

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
    </section>
</template>

<script setup lang="ts">
const services = [
    {
        id: 1,
        icon: 'i-heroicons-map',
        title: 'Межевание земельных участков',
        description: 'Точное определение границ участка с закреплением на местности и юридическое оформление документации.',
        link: '/services/land-survey'
    },
    {
        id: 2,
        icon: 'i-heroicons-home-modern',
        title: 'Технические планы',
        description: 'Подготовка технических планов зданий, сооружений, помещений, объектов незавершенного строительства.',
        link: '/services/technical-plans'
    },
    {
        id: 3,
        icon: 'i-heroicons-document-check',
        title: 'Постановка на кадастровый учет',
        description: 'Полное сопровождение процедуры постановки объектов недвижимости на государственный кадастровый учет.',
        link: '/services/cadastral-register'
    },
    {
        id: 4,
        icon: 'i-heroicons-document-text',
        title: 'Оформление прав собственности',
        description: 'Помощь в регистрации прав собственности на объекты недвижимости в Росреестре.',
        link: '/services/property-rights'
    },
    {
        id: 5,
        icon: 'i-heroicons-pencil-square',
        title: 'Исправление кадастровых ошибок',
        description: 'Выявление и исправление ошибок в сведениях государственного кадастра недвижимости.',
        link: '/services/error-correction'
    },
    {
        id: 6,
        icon: 'i-heroicons-document-magnifying-glass',
        title: 'Кадастровые выписки и справки',
        description: 'Получение актуальных сведений из Единого государственного реестра недвижимости (ЕГРН).',
        link: '/services/cadastral-excerpts'
    }
];
</script>

<style scoped>
.service-card {
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
    animation-delay: calc(var(--index, 0) * 100ms);
}

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
</style>