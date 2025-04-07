<template>
    <div class="py-12 bg-gray-50">
        <div class="container-custom">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold mb-4 text-gray-800">Оставить заявку</h1>
                    <p class="text-xl text-gray-600">
                        Заполните форму ниже, и мы свяжемся с вами для консультации и оказания услуг
                    </p>
                </div>

                <div class="bg-white rounded-lg shadow-md p-6">
                    <RequestFormStepper />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RequestFormStepper from '~/components/request/RequestFormStepper.vue';

definePageMeta({
    title: 'Оставить заявку',
    description: 'Заполните форму для получения консультации по кадастровым услугам'
});
</script>