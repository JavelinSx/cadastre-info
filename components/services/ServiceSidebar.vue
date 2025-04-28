<template>
    <div class="h-full">
        <!-- Форма заявки -->
        <div class="rounded-lg md:shadow-md p-6 mb-8 top-24 z-10 border border-green-500 md:border-none">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 text-center lg:text-left">Заказать услугу</h3>
            <p class="text-gray-600 mb-4 text-center lg:text-left">
                Оставьте заявку, и наш специалист свяжется с вами для консультации и расчета стоимости
            </p>

            <UButton to="/request" color="primary" variant="solid" block
                class="transform transition-all duration-300 hover:scale-105 hover:shadow-md mb-4">
                <UIcon name="i-heroicons-document-text" class="mr-2" />
                Оставить заявку
            </UButton>

            <p class="text-sm text-gray-500 text-center">
                Или позвоните нам по телефону
            </p>
            <p class="text-lg font-medium text-center text-primary-600">
                +7 (911) 873-99-97
            </p>
            <p class="text-lg font-medium text-center text-primary-600">
                +7 (960) 006-68-40
            </p>
        </div>

        <!-- Виды услуг -->
        <div v-if="serviceTypes && serviceTypes.title"
            class="bg-white rounded-lg md:shadow-md p-6 mb-4 border border-green-500 md:border-none">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ serviceTypes.title }}</h3>

            <ul class="space-y-1">
                <li v-for="(type, typeIndex) in serviceTypes.items" :key="typeIndex"
                    class="flex items-center p-3 rounded-md transition-all duration-300 hover:bg-gray-50">

                    <NuxtLink :to="type.link" class="text-gray-700 hover:text-primary-600 text-sm xl:text-base">
                        <UIcon :name="type.icon || 'i-heroicons-check-circle'" class="w-5 h-5 text-primary-600 mr-2" />
                        <span>{{ type.text }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- Преимущества -->
        <div v-if="advantages && advantages.title"
            class="bg-white rounded-lg md:shadow-md p-6 mb-8 border border-green-500 md:border-none">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ advantages.title }}</h3>

            <ul class="space-y-1">
                <li v-for="(advantage, advIndex) in advantages.items" :key="advIndex"
                    class="flex items-start p-2 rounded-md">
                    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span class="text-gray-600">{{ advantage }}</span>
                </li>
            </ul>
        </div>

        <!-- Результаты работы -->
        <div v-if="results && results.title"
            class="bg-white rounded-lg md:shadow-md p-6 mb-8 border border-green-500 md:border-none">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ results.title }}</h3>

            <ul class="space-y-1 text-gray-600">
                <li v-for="(item, itemIndex) in results.items" :key="itemIndex" class="flex items-start p-2">
                    <UIcon name="i-heroicons-document-text" class="w-5 h-5 text-primary-600 mr-2 mt-1" />
                    <span>{{ item }}</span>
                </li>
            </ul>
        </div>

        <!-- Необходимые документы -->
        <div v-if="documents && documents.title"
            class="bg-white rounded-lg md:shadow-md p-6 border border-green-500 md:border-none">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ documents.title }}</h3>

            <ul class="space-y-3 text-gray-600">
                <li v-for="(item, itemIndex) in documents.items" :key="itemIndex" class="flex items-start p-2">
                    <UIcon name="i-heroicons-document-text" class="w-5 h-5 text-primary-600 mr-2 mt-1" />
                    <span>{{ item }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    serviceTypes: {
        type: Object,
        default: () => ({
            title: '',
            items: []
        })
    },
    results: {
        type: Object,
        default: () => ({
            title: '',
            items: []
        })
    },
    advantages: {
        type: Object,
        default: () => null
    },
    documents: {
        type: Object,
        default: () => null
    }
});
</script>

<style scoped>
/* Фикс проблемы с наложением при прокрутке */
.sticky {
    position: sticky;
    z-index: 10;
}

.sticky::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: white;
    border-radius: 0.5rem;
    z-index: -1;
}
</style>