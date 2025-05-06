<template>
    <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: 30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ title }}</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <div v-for="feature in features" :key="feature.id" class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                    <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600" />
                    </div>
                </div>
                <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-800 mb-1">{{ feature.title }}</h3>
                    <p class="text-gray-600">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

defineProps({
    title: {
        type: String,
        default: 'Почему выбирают нас'
    },
    features: {
        type: Array as () => Feature[],
        required: true
    }
});
</script>