<template>
    <div class="flex justify-between mt-8">
        <transition name="fade-slide-right">
            <UButton v-if="store.currentStep > 0" color="gray" variant="outline" @click="store.prevStep()"
                class="transform transition-all duration-300 hover:-translate-x-1">
                <template #leading>
                    <UIcon name="i-heroicons-arrow-left" class="w-5 h-5 mr-1" />
                </template>
                Назад
            </UButton>
            <div v-else></div>
        </transition>

        <transition name="fade-slide-left">
            <UButton v-if="store.currentStep < 3" color="primary" variant="solid" @click="store.nextStep()"
                class="transform transition-all duration-300 hover:translate-x-1 hover:shadow-md">
                Далее
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-1" />
                </template>
            </UButton>

            <UButton v-else color="primary" variant="solid" @click="store.submitForm()" :loading="store.isSubmitting"
                class="transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                <span class="relative z-10">Отправить заявку</span>
                <span
                    class="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </UButton>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';

const store = useRequestStore();
</script>

<style scoped>
.fade-slide-right-enter-active,
.fade-slide-right-leave-active,
.fade-slide-left-enter-active,
.fade-slide-left-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.fade-slide-right-enter-from,
.fade-slide-right-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

.fade-slide-left-enter-from,
.fade-slide-left-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>