<template>
    <div class="mt-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">{{ title }}</h2>

        <div class="flex flex-wrap -mx-4">
            <div v-for="feature in features" :key="feature.id" class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
                    <div class="flex items-center mb-4">
                        <div class="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                            <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
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