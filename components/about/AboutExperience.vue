<template>
    <div class="bg-white rounded-lg shadow-md p-8 mt-8" v-motion :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ title }}</h2>
        <div class="space-y-4">
            <p class="text-gray-600">
                {{ description }}
            </p>

            <div class="grid md:grid-cols-3 gap-4 mt-6">
                <div v-for="(stat, index) in stats" :key="index" class=" p-4 rounded-lg text-center">
                    <div class="text-3xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
                    <div class="text-gray-700">{{ stat.label }}</div>
                </div>
            </div>

            <p class="text-gray-600 mt-4">
                {{ additionalInfo }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface StatItem {
    value: string;
    label: string;
}

defineProps({
    title: {
        type: String,
        default: 'Наш опыт'
    },
    description: {
        type: String,
        required: true
    },
    stats: {
        type: Array as () => StatItem[],
        required: true
    },
    additionalInfo: {
        type: String,
        required: true
    }
});
</script>