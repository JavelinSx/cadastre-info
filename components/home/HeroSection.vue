<template>
    <section class="py-16 overflow-hidden relative min-h-[500px] text-white flex justify-center" ref="heroSection">
        <!-- Hero content container -->
        <VantaBG />
        <div class="container-custom relative z-10 max-w-[1366px]">

            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div v-motion :initial="{ opacity: 0, y: 50 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Кадастровая информация и услуги</h1>
                    <p class="text-xl mb-8">
                        Предоставляем полную правовую информацию о кадастровой деятельности и помогаем с оформлением
                        всех необходимых документов.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
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
                    <!-- Визуальный элемент -->
                    <NuxtImg src="/images/map-ples.png"
                        class="absolute inset-0 w-full h-full object-cover rounded-lg" />
                    <div class="w-full h-80 bg-white/10 rounded-lg relative overflow-hidden border border-primary-500">
                        <!-- Стилизованная кадастровая карта с анимацией -->

                        <div class="absolute inset-0 grid grid-cols-6 grid-rows-6">
                            <div v-for="i in 36" :key="i"
                                class="bg-white/20 transition-all duration-1000 border border-primary-500"
                                :class="{ 'animate-pulse': i % 7 === 0 }" :style="`animation-delay: ${i * 100}ms`">
                            </div>
                        </div>

                        <!-- Маркеры на карте -->
                        <div class="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        <div class="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"
                            style="animation-delay: 1s"></div>
                        <div class="absolute bottom-1/4 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping"
                            style="animation-delay: 1.5s"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VantaBG from '../ui/VantaBG.vue';

const heroSection = ref(null);

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