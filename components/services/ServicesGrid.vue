<template>
    <div class="flex flex-wrap -mx-4">
        <div v-for="service in services" :key="service.id" class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
                class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-center mb-4">
                    <div class="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mr-4">
                        <UIcon :name="service.icon" class="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800">{{ service.title }}</h3>
                </div>
                <p class="text-gray-600 mb-6 flex-grow">
                    {{ service.description }}
                </p>
                <div class="mt-auto">
                    <NuxtLink :to="service.link"
                        class="inline-flex items-center text-primary-600 hover:text-primary-800 group">
                        <span class="mr-1 transition-all duration-300 group-hover:mr-2">Подробнее</span>
                        <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Service {
    id: number;
    icon: string;
    title: string;
    description: string;
    link: string;
}

defineProps({
    services: {
        type: Array as () => Service[],
        required: true
    }
});
</script>