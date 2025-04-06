<template>
    <div>
        <StepProgress />

        <div class="mt-8">
            <transition name="fade" mode="out-in">
                <!-- Шаг 1: Выбор услуги -->
                <div v-if="store.currentStep === 0" key="step-1" class="animate-scaleUp">
                    <StepService />
                </div>

                <!-- Шаг 2: Информация об объекте -->
                <div v-else-if="store.currentStep === 1" key="step-2" class="animate-scaleUp">
                    <StepObject />
                </div>

                <!-- Шаг 3: Контактная информация -->
                <div v-else-if="store.currentStep === 2" key="step-3" class="animate-scaleUp">
                    <StepContact />
                </div>

                <!-- Шаг 4: Подтверждение заявки -->
                <div v-else-if="store.currentStep === 3" key="step-4" class="animate-scaleUp">
                    <StepConfirmation />
                </div>

                <!-- Шаг 5: Успешная отправка -->
                <div v-else-if="store.currentStep === 4" key="step-5" class="animate-scaleUp">
                    <div class="text-center py-8">
                        <UIcon name="i-heroicons-check-circle"
                            class="w-16 h-16 text-green-500 mx-auto mb-4 animate-success" />
                        <h3 class="text-2xl font-bold mb-2 animate-fadeIn">Заявка успешно отправлена!</h3>
                        <p class="text-lg text-gray-600 mb-6 animate-fadeIn delay-200">
                            Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                        </p>
                        <UButton to="/" color="primary" variant="solid"
                            class="animate-fadeIn delay-300 transition-all duration-300 hover:scale-105">
                            Вернуться на главную
                        </UButton>
                    </div>
                </div>
            </transition>
        </div>

        <!-- Навигация между шагами (кнопки Назад/Далее) -->
        <div v-if="store.currentStep < 4">
            <StepNavigation />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';
import { onMounted } from 'vue';
import { cityListI } from '~/utils/data';
import StepProgress from '~/components/request/StepProgress.vue';
import StepService from '~/components/request/StepService.vue';
import StepObject from '~/components/request/StepObject.vue';
import StepContact from '~/components/request/StepContact.vue';
import StepConfirmation from '~/components/request/StepConfirmation.vue';
import StepNavigation from '~/components/request/StepNavigation.vue';

const store = useRequestStore();

// Инициализация списка городов
onMounted(() => {
    store.setCityList(cityListI);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

@keyframes success {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-success {
    animation: success 0.6s ease-out forwards;
}
</style>