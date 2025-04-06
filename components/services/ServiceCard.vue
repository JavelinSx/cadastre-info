<template>
    <section class="py-16 bg-white text-gray-600">
        <div class="container-custom">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Наши услуги</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Мы предоставляем полный спектр услуг в сфере кадастровой деятельности и оформления недвижимости
                </p>
            </div>

            <div class="grid-services">
                <template v-for="(service, index) in services" :key="service.id">
                    <div class="service-card">
                        <div
                            class="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-200 border border-transparent rounded-lg p-4 h-full flex flex-col bg-white">
                            <div class="flex items-center">
                                <div
                                    class="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                    <UIcon :name="service.icon" class="w-6 h-6 text-primary-600" />
                                </div>
                                <h3 class="text-xl font-semibold mb-3 ml-3 text-gray-600">{{ service.title }}</h3>
                            </div>

                            <p class="text-gray-600 mb-4 flex-grow">{{ service.description }}</p>

                            <NuxtLink :to="service.link"
                                class="inline-flex items-center text-primary-600 hover:text-primary-800 group">
                                <span class="mr-1 transition-all duration-300 group-hover:mr-2">Подробнее</span>
                                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
// Импортируем массив услуг напрямую
export default {
    data() {
        return {
            services: [
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
            ]
        }
    }
}
</script>

<style scoped>
/* Явные CSS правила для гарантированного отображения сетки */
.grid-services {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
}

/* Медиа-запросы с чёткими breakpoints */
@media (min-width: 640px) {
    .grid-services {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid-services {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Упрощенная анимация появления карточек */
.service-card {
    animation: fadeIn 0.5s ease-out forwards;
    animation-delay: calc(var(--index, 0) * 100ms);
}

.service-card:nth-child(1) {
    --index: 1;
}

.service-card:nth-child(2) {
    --index: 2;
}

.service-card:nth-child(3) {
    --index: 3;
}

.service-card:nth-child(4) {
    --index: 4;
}

.service-card:nth-child(5) {
    --index: 5;
}

.service-card:nth-child(6) {
    --index: 6;
}

@keyframes fadeIn {
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