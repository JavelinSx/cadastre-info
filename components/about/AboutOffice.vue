<template>
    <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ title }}</h2>
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Карта -->
            <div class="lg:w-2/3 h-[300px]">
                <div class="aspect-video relative w-full h-full rounded-lg overflow-hidden">
                    <iframe :src="mapUrl" width="100%" height="100%" frameborder="0" class="absolute inset-0"></iframe>
                </div>
            </div>

            <!-- Контактная информация -->
            <div class="lg:w-1/3 flex flex-col justify-center">
                <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ contactTitle }}</h3>
                <div class="space-y-4">
                    <div v-for="(contact, index) in contactItems" :key="index" class="flex items-start">
                        <UIcon :name="contact.icon" class="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                            <p class="text-gray-700">{{ contact.text }}</p>
                        </div>
                    </div>

                    <div class="pt-4">
                        <h4 class="font-medium text-gray-800 mb-2">{{ workHoursTitle }}:</h4>
                        <p v-for="(hours, index) in workHours" :key="index" class="text-gray-700">{{ hours }}</p>
                    </div>
                </div>

                <UButton :to="buttonUrl" color="primary" variant="solid"
                    class="mt-6 transform transition-all duration-300 hover:scale-105">
                    <UIcon :name="buttonIcon" class="mr-2" />
                    {{ buttonText }}
                </UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ContactItem {
    icon: string;
    text: string;
}

defineProps({
    title: {
        type: String,
        default: 'Наш офис'
    },
    mapUrl: {
        type: String,
        default: "https://yandex.ru/map-widget/v1/?um=constructor%3Aa9dfd8910e68f1a1ac954a3d91ecb929237c2c54ab62fc61e6dea0804d1a70da&amp;source=constructor"
    },
    contactTitle: {
        type: String,
        default: 'Контактная информация'
    },
    contactItems: {
        type: Array as () => ContactItem[],
        required: true
    },
    workHoursTitle: {
        type: String,
        default: 'Режим работы'
    },
    workHours: {
        type: Array as () => string[],
        default: () => ['Пн-Пт: 9:00 - 17:00', 'Сб-Вс: выходной']
    },
    buttonText: {
        type: String,
        default: 'Оставить заявку'
    },
    buttonUrl: {
        type: String,
        default: '/request'
    },
    buttonIcon: {
        type: String,
        default: 'i-heroicons-document-text'
    }
});
</script>