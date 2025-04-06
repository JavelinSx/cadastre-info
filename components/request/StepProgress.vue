<template>
    <div class="mb-8">
        <div class="flex justify-between">
            <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center relative"
                :class="{ 'w-full': index < steps.length - 1 }">

                <!-- Круглый индикатор шага -->
                <div class="w-10 h-10 rounded-full flex items-center justify-center text-center z-10 transition-all duration-500"
                    :class="[
                        store.currentStep > index
                            ? 'bg-primary-600 text-white'
                            : store.currentStep === index
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-200 text-gray-600'
                    ]">
                    <transition name="fade" mode="out-in">
                        <template v-if="store.currentStep > index">
                            <UIcon name="i-heroicons-check" class="w-6 h-6 animate-bounce-once" />
                        </template>
                        <template v-else>
                            {{ index + 1 }}
                        </template>
                    </transition>
                </div>

                <!-- Название шага -->
                <div class="text-sm mt-2 text-center transition-all duration-300"
                    :class="{ 'font-medium text-primary-600': store.currentStep === index }">
                    {{ step.title }}
                </div>

                <!-- Линия между шагами с анимацией прогресса -->
                <div v-if="index < steps.length - 1" class="absolute top-5 left-10 w-full h-0.5 bg-gray-200">
                    <div class="h-full bg-primary-600 transition-all duration-700"
                        :style="{ width: store.currentStep > index ? '100%' : store.currentStep === index ? '50%' : '0%' }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';

const store = useRequestStore();

const steps = [
    { title: 'Услуга' },
    { title: 'Объект' },
    { title: 'Контакты' },
    { title: 'Подтверждение' }
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@keyframes bounce-once {
    0% {
        transform: scale(0);
    }

    60% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.animate-bounce-once {
    animation: bounce-once 0.5s ease-out forwards;
}
</style>