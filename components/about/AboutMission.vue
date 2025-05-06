<template>
    <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ title }}</h2>
        <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="md:w-1/3">
                <img :src="imageUrl" :alt="imageAlt" class="rounded-lg shadow-md max-w-full h-auto"
                    :onerror="fallbackImage" />
            </div>
            <div class="md:w-2/3">
                <p v-for="(paragraph, index) in paragraphs" :key="index" class="text-gray-600 mb-4">
                    {{ paragraph }}
                </p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'Наша миссия'
    },
    paragraphs: {
        type: Array as () => string[],
        required: true
    },
    imageUrl: {
        type: String,
        default: '/images/about/mission.png'
    },
    imageAlt: {
        type: String,
        default: 'Миссия компании ПлесКад'
    },
    fallbackImage: {
        type: String,
        default: ""
    }
});
</script>