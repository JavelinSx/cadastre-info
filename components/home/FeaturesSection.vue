<template>
    <section class="py-16 text-gray-50 relative overflow-hidden min-h-[600px]">
        <!-- Фоновое изображение с параллакс-эффектом -->
        <div class="absolute inset-0 parallax-wrapper">
            <div ref="parallaxRef" class="parallax-container absolute inset-0 z-10">
                <img alt="Кадастровая карта"
                    :src="isMobile ? '/images/cadastral-map-bg-mobile.png' : '/images/cadastral-map-bg.png'"
                    class="w-full h-full object-cover opacity-30"
                    :class="{ 'object-center': !isMobile, 'object-left': isMobile }" />
            </div>
        </div>

        <!-- Полупрозрачный оверлей для лучшей читабельности -->
        <div class="absolute inset-0  bg-opacity-70"></div>

        <div class="container-custom relative z-10">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4 text-gray-800">Почему выбирают нас</h2>
                <p class="text-xl text-gray-800 max-w-3xl mx-auto">
                    Профессиональные теоретические знания в области кадастровой деятельности, территориального
                    планирования, строительства и архитектуры, подкрепленные отточенной логикой и приумноженные на
                    огромный опыт работы в данных сферах деятельности.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(feature, index) in features" :key="feature.id" class="feature-item"
                    :style="`--delay: ${100 + index * 75}ms`">
                    <div class="feature-card h-full rounded-xl overflow-hidden border border-gray-200
         bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1" :class="{
            'backdrop-blur-sm bg-gradient-to-br from-white/80 to-white/60 border-white/30': !isMobile,
            'bg-white': isMobile
        }">
                        <!-- Верхняя часть карточки с иконкой и цветным акцентом -->
                        <div class="pt-6 pb-4 px-6 relative">
                            <!-- Цветной акцент сверху карточки -->
                            <div class="absolute top-0 left-0 right-0 h-1 bg-primary-500"></div>

                            <!-- Круг с иконкой -->
                            <div class="flex justify-center mb-4">
                                <div class="w-16 h-16 rounded-full bg-primary-100 p-4 flex items-center justify-center
                      shadow-md transform transition-transform duration-300 group-hover:scale-110">
                                    <UIcon :name="feature.icon" class="w-8 h-8 text-primary-600" />
                                </div>
                            </div>

                            <!-- Заголовок -->
                            <h3 class="text-xl font-semibold text-gray-800 text-center">{{ feature.title }}</h3>
                        </div>

                        <!-- Разделитель -->
                        <div class="w-3/4 h-px bg-gray-200 mx-auto"></div>

                        <!-- Описание -->
                        <div class="p-6">
                            <p class="text-gray-700 text-center leading-relaxed">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useDevice } from '~/composables/useDevice';
import { useParallax } from '~/composables/useParallax';

// Определяем тип устройства
const { isMobile } = useDevice();

// Используем параллакс только для десктопных устройств
const parallaxOptions = {
    speed: 1.0,
    direction: 'down',
    mobileDisabled: true
};

const { el: parallaxRef } = useParallax(parallaxOptions);

// Преимущества
const features = [
    {
        id: 1,
        icon: 'i-heroicons-academic-cap',
        title: 'Экспертность',
        description: 'Наши специалисты имеют высшее образование в сфере строительства, маркшейдерии (горная геодезия) кадастровой деятельности, судебной экспертизы, экономики.'
    },
    {
        id: 2,
        icon: 'i-heroicons-document-check',
        title: 'Эффективность',
        description: 'Многолетний опыт работы в сфере кадастра и геодезии (более 20 лет)'
    },
    {
        id: 3,
        icon: 'i-heroicons-clock',
        title: 'Оперативность',
        description: 'Быстрое решение ваших вопросов и минимальные сроки оформления документов'
    },
    {
        id: 4,
        icon: 'i-heroicons-user-group',
        title: 'Поддержка',
        description: 'Бесплатные консультации и помощь на каждом этапе выполнения работ до достижения требуемого результата'
    }
];
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

/* Стили для параллакса */
.parallax-wrapper {
    overflow: hidden;
}

.parallax-container {
    will-change: transform;
}

/* Обеспечим достаточную высоту секции */
section {
    min-height: 40vh;
}

/* Стили для карточек */
.feature-card {
    position: relative;
    isolation: isolate;
}

.feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(10px);
    border-radius: inherit;
}

/* Анимация появления */
.feature-item {
    animation: fadeIn 0.6s ease-out forwards;
    animation-delay: var(--delay, 0ms);
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Оптимизация для мобильных устройств */
@media (max-width: 767px) {
    .feature-card {
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
    }

    .feature-item {
        /* Более быстрая анимация на мобильных */
        animation-duration: 0.4s;
        /* Меньшая задержка для быстрой загрузки */
        animation-delay: calc(var(--delay) * 0.5);
    }
}
</style>