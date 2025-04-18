<template>
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div class="container-custom">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div v-motion :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Кадастровая информация и услуги</h1>
                    <p class="text-xl mb-8">
                        Предоставляем полную правовую информацию о кадастровой деятельности и помогаем с оформлением
                        всех необходимых документов.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 text-white">
                        <UButton to="/request" variant="solid" color="primary"
                            class="text-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            size="xl">
                            Оставить заявку
                        </UButton>
                        <UButton to="/services" variant="outline" color="primary"
                            class="text-white backdrop-blur-sm bg-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                            size="xl">
                            Узнать больше
                        </UButton>
                    </div>
                </div>
                <div class="hidden md:block relative" v-motion :initial="{ opacity: 0, x: 100 }"
                    :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }">
                    <!-- Добавим визуальный элемент кадастровой карты с анимацией -->
                    <div
                        class="w-full h-80 bg-white/10 rounded-lg backdrop-blur-sm relative overflow-hidden border border-white/20">
                        <!-- Стилизованная кадастровая карта с анимацией -->
                        <NuxtImg src="/images/map-ples.png" class="absolute inset-0 w-full h-full object-cover ">
                        </NuxtImg>
                        <div class="absolute inset-0 grid grid-cols-6 grid-rows-6">
                            <div v-for="i in 36" :key="i"
                                class="bg-white/20  transition-all duration-1000 border border-primary-500"
                                :class="{ 'animate-pulse': i % 7 === 0 }" :style="`animation-delay: ${i * 100}ms`">

                            </div>
                        </div>
                        <!-- Маркеры на карте -->
                        <div v-for="(point, index) in coordinates" :key="index" :class="point.color"
                            class="absolute w-3 h-3 rounded-full animate-ping" :style="{
                                top: point.top,
                                left: point.left,
                                animationDelay: '0s' // мгновенная анимация пинга
                            }"></div>
                        <!-- <div class="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        <div class="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"
                            style="animation-delay: 1s"></div>
                        <div class="absolute bottom-1/4 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping"
                            style="animation-delay: 1.5s"></div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface PointCoordinate {
    top: string;
    left: string;
    color: string;
}

// Создаем пустой массив точек
const coordinates = ref<PointCoordinate[]>([]);
let addPointTimer: number | null = null;
let changePointsTimer: number | null = null;

// Генерирует случайную точку
const generateRandomPoint = (): PointCoordinate => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-amber-500', 'bg-cyan-500', 'bg-fuchsia-500'];
    const top = Math.floor(Math.random() * 90) + 5; // от 5% до 95%
    const left = Math.floor(Math.random() * 90) + 5; // от 5% до 95%

    return {
        top: `${top}%`,
        left: `${left}%`,
        color: colors[Math.floor(Math.random() * colors.length)]
    };
};

// Функция для последовательного добавления точек
const addPointsSequentially = (currentIndex = 0, maxPoints = 6) => {
    if (currentIndex < maxPoints) {
        // Добавляем новую точку
        coordinates.value.push(generateRandomPoint());

        // Планируем добавление следующей точки через 500 мс
        addPointTimer = window.setTimeout(() => {
            addPointsSequentially(currentIndex + 1, maxPoints);
        }, 200);
    } else {
        // Когда все точки добавлены, планируем их полную замену через 3 секунды
        changePointsTimer = window.setTimeout(changeAllPoints, 1500);
    }
};

// Функция для одновременной замены всех точек
const changeAllPoints = () => {
    // Сначала очищаем массив точек
    coordinates.value = [];

    // Запускаем последовательное добавление точек
    addPointsSequentially();
};

onMounted(() => {
    // Начинаем добавление точек
    addPointsSequentially();
});

onBeforeUnmount(() => {
    // Очищаем все таймеры при размонтировании компонента
    if (addPointTimer !== null) {
        window.clearTimeout(addPointTimer);
    }
    if (changePointsTimer !== null) {
        window.clearTimeout(changePointsTimer);
    }
});
</script>