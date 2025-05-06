<template>
    <div class="mt-12 bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100 text-center" v-motion
        :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 700 } }">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ title }}</h2>
        <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <UButton :to="primaryButton.link" color="primary" variant="solid" size="xl"
                class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <UIcon :name="primaryButton.icon" class="mr-2" />
                {{ primaryButton.text }}
            </UButton>
            <UButton :to="secondaryButton.link" color="gray" variant="outline" size="xl"
                class="transform transition-all duration-300 hover:scale-105">
                <UIcon :name="secondaryButton.icon" class="mr-2" />
                {{ secondaryButton.text }}
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ButtonProps {
    text: string;
    link: string;
    icon: string;
}

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    primaryButton: {
        type: Object as () => ButtonProps,
        required: true
    },
    secondaryButton: {
        type: Object as () => ButtonProps,
        required: true
    }
});
</script>