<template>
    <div>
        <h3 class="text-xl font-semibold mb-4 animate-fadeIn text-gray-800">Выберите услугу</h3>
        <div class="space-y-4">
            <div v-for="(service, index) in itemsForStepperServiceI" :key="service.id"
                class="border rounded-md p-4 cursor-pointer transition-all duration-300 animate-fadeIn" :class="{
                    'border-primary-600 bg-primary-50 transform hover:scale-[1.01]': store.formData.service === service.id,
                    'border-gray-200 hover:border-primary-400 hover:shadow-sm': store.formData.service !== service.id
                }" @click="store.setService(service.id)" :style="`animation-delay: ${100 + index * 75}ms`">
                <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                        <div class="w-5 h-5 rounded-full border relative flex items-center justify-center transition-all duration-300"
                            :class="{
                                'border-primary-600': store.formData.service === service.id,
                                'border-gray-300': store.formData.service !== service.id
                            }">
                            <div v-if="store.formData.service === service.id"
                                class="w-3 h-3 rounded-full bg-primary-600 animate-scale-in"></div>
                        </div>
                    </div>
                    <div class="ml-3">
                        <h4 class="font-medium text-gray-700">{{ service.label }}</h4>
                    </div>
                </div>
            </div>

            <div class="text-red-500 text-sm mt-2" v-if="store.errors.service">
                {{ store.errors.service }}
            </div>

            <!-- Выбор типа услуги, если услуга выбрана -->
            <transition name="slide-down">
                <div v-if="store.formData.service && serviceTypes.length > 0" class="mt-6">
                    <h4 class="text-lg font-semibold mb-3 text-gray-800">Выберите тип услуги</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div v-for="(type, typeIndex) in serviceTypes" :key="type.id"
                            class="border rounded-md p-3 cursor-pointer transition-all duration-300 animate-fadeIn"
                            :class="{
                                'border-primary-600 bg-primary-50 transform hover:scale-[1.01]': store.formData.serviceType === type.id,
                                'border-gray-200 hover:border-primary-400 hover:shadow-sm': store.formData.serviceType !== type.id
                            }" @click="store.setServiceType(type.id)"
                            :style="`animation-delay: ${300 + typeIndex * 75}ms`">
                            <div class="flex items-center">
                                <div class="w-4 h-4 rounded-full border relative flex items-center justify-center mr-2 transition-all duration-300"
                                    :class="{
                                        'border-primary-600': store.formData.serviceType === type.id,
                                        'border-gray-300': store.formData.serviceType !== type.id
                                    }">
                                    <div v-if="store.formData.serviceType === type.id"
                                        class="w-2 h-2 rounded-full bg-primary-600 animate-scale-in"></div>
                                </div>
                                <span class="text-gray-700">{{ type.label }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';
import { computed } from 'vue';
import { itemsForStepperServiceI, itemsServiceI } from '~/utils/data';

const store = useRequestStore();

// Получаем типы услуг в зависимости от выбранной услуги
const serviceTypes = computed(() => {
    if (!store.formData.service) return [];

    // Индексы массива начинаются с 0, а ID сервисов с 1
    const serviceIndex = store.formData.service - 1;

    if (serviceIndex >= 0 && serviceIndex < itemsServiceI.length) {
        return itemsServiceI[serviceIndex];
    }

    return [];
});
</script>

<style scoped>
.animate-fadeIn {
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes scale-in {
    0% {
        transform: scale(0);
    }

    70% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.animate-scale-in {
    animation: scale-in 0.3s forwards;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: opacity 0.3s, transform 0.3s;
    transform-origin: top;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: scaleY(0);
}
</style>