<template>
    <section class="py-16 text-gray-600 relative overflow-hidden min-h-[600px]">
        <!-- Фоновое изображение с параллакс-эффектом через vue-parallax-directive -->
        <div class="absolute inset-0 parallax-wrapper">
            <div class="parallax-container absolute inset-0 z-10"
                v-parallax="{ speed: 0.3, direction: 'down', mobileDisabled: true }">
                <img src="/images/cadastral-map-bg.png" alt="Кадастровая карта"
                    class="w-full h-full object-cover opacity-30">
            </div>
        </div>

        <!-- Полупрозрачный оверлей для лучшей читабельности -->
        <div class="absolute inset-0 bg-gray-50 bg-opacity-70"></div>

        <div class="container-custom relative z-10">
            <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
                <h2 class="text-3xl font-bold mb-4 text-gray-800">Почему выбирают нас</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Профессиональные теоретические знания в области кадастровой деятельности, территориального
                    планирования, строительства и архитектуры, подкрепленные отточенной логикой и приумноженные на
                    огромный опыт работы в данных сферах деятельности.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(feature, index) in features" :key="feature.id" :class="`animate-fade-in`"
                    :style="`animation-delay: ${200 + index * 100}ms`">
                    <div class="feature-card h-full rounded-xl overflow-hidden backdrop-blur-sm border border-white/30
                           bg-gradient-to-br from-white/80 to-white/60 shadow-sm
                           transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <!-- Верхняя часть карточки с иконкой и цветным акцентом -->
                        <div class="pt-6 pb-4 px-6 relative">
                            <!-- Цветной акцент сверху карточки -->
                            <div class="absolute top-0 left-0 right-0 h-1 bg-primary-500"></div>

                            <!-- Круг с иконкой -->
                            <div class="flex justify-center mb-4">
                                <div
                                    class="w-16 h-16 rounded-full bg-primary-100 p-4 flex items-center justify-center
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
import { ref, onMounted } from 'vue';
import { useDevice } from '~/composables/useDevice';

// Используем наш созданный ранее composable для определения мобильного устройства
const { isMobile } = useDevice();

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

// Директива для параллакса
const vParallax = {
    mounted(el, binding) {
        const options = binding.value || {};
        const speed = options.speed || 0.5;
        const direction = options.direction || 'down';
        const mobileDisabled = options.mobileDisabled || false;

        // Проверяем, мобильное ли устройство
        const isMobileDevice = window.innerWidth < 768;

        // // Если это мобильное устройство и параллакс отключен для мобильных, не добавляем обработчик
        if (isMobileDevice && mobileDisabled) return;

        // Функция обработки скролла
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const rect = el.closest('section').getBoundingClientRect();
            const offsetTop = rect.top;
            const sectionHeight = rect.height;

            // Вычисляем смещение
            let translateY = 0;

            if (offsetTop <= 0) {
                // Секция уже прокручена
                translateY = Math.abs(offsetTop) * speed;
            }

            // Ограничиваем максимальное смещение
            const maxTranslate = sectionHeight * 0.4;
            translateY = Math.min(translateY, maxTranslate);

            // Применяем направление
            if (direction === 'up') {
                translateY = -translateY;
            }

            el.style.transform = `translateY(${translateY}px)`;
        };

        // Инициализация
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Сохраняем обработчики для удаления
        el._parallaxScrollHandler = handleScroll;
    },

    unmounted(el) {
        // Удаляем обработчики при размонтировании компонента
        if (el._parallaxScrollHandler) {
            window.removeEventListener('scroll', el._parallaxScrollHandler);
            window.removeEventListener('resize', el._parallaxScrollHandler);
        }
    }
};

// Регистрируем директиву
onMounted(() => {
    if (process.client) {
        const app = getCurrentInstance()?.appContext.app;
        if (app) {
            app.directive('parallax', vParallax);
        }
    }
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

/* Стили для параллакса */
.parallax-wrapper {
    overflow: hidden;
}

.parallax-container {
    will-change: transform;
    transform: translateZ(0);
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

/* Дополнительные стили для улучшения карточек на разных устройствах */
@media (max-width: 767px) {
    .feature-card {
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>