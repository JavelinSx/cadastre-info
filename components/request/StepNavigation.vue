<template>
    <div class="flex justify-between mt-8">
        <div>
            <UButton v-if="store.currentStep > 0" variant="outline" @click="handlePrevStep"
                class="transform transition-all duration-300 hover:-translate-x-1">
                <template #leading>
                    <UIcon name="i-heroicons-arrow-left" class="w-5 h-5 mr-1" />
                </template>
                Назад
            </UButton>
            <div v-else class="opacity-0 invisible">
                <!-- Пустой элемент для сохранения структуры -->
            </div>
        </div>

        <div>
            <UButton v-if="store.currentStep < 3" color="primary" variant="solid" @click="handleNextStep"
                class="transform transition-all duration-300 hover:translate-x-1 hover:shadow-md">
                Далее
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-1" />
                </template>
            </UButton>

            <UButton v-else color="primary" variant="outline" @click="handleSubmit" :loading="store.isSubmitting"
                :disabled="!store.formData.agreement"
                class="transform transition-all duration-300 hover:shadow-lg hover:text-gray-100 relative overflow-hidden group"
                :class="{ 'opacity-50 cursor-not-allowed text-gray-500 ring-gray-500': !store.formData.agreement }">
                <span class="relative z-10">Отправить заявку</span>
                <span
                    class="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                    v-if="store.formData.agreement"></span>
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';

const store = useRequestStore();
const emit = defineEmits(['scroll']);

// Обработчик кнопки "Назад"
const handlePrevStep = () => {
    store.prevStep();
};

// Обработчик кнопки "Далее"
const handleNextStep = () => {
    store.nextStep();
};

// Обработчик кнопки "Отправить заявку"
const handleSubmit = () => {
    // Проверяем, дал ли пользователь согласие на обработку персональных данных
    if (!store.formData.agreement) {
        // Устанавливаем ошибку, чтобы привлечь внимание пользователя
        store.errors.agreement = 'Необходимо согласие на обработку персональных данных';
        // Фокусируемся на чекбоксе (или прокручиваем к нему)
        const agreementCheckbox = document.querySelector('input[type="checkbox"]');
        if (agreementCheckbox) {
            agreementCheckbox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => agreementCheckbox.focus(), 500);
        }
        return;
    }

    // Если согласие дано, отправляем форму
    store.submitForm();
};
</script>