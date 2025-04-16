<template>
    <div class="mt-12 bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100" v-motion
        :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
        <div class="text-center">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ title }}</h2>
            <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                {{ description }}
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <UButton :to="primaryButton.link" color="primary" variant="solid" size="xl"
                    class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <UIcon name="i-heroicons-document-text" class="mr-2" />
                    {{ primaryButton.text }}
                </UButton>
                <UButton :to="secondaryButton.link" color="gray" variant="outline" size="xl"
                    class="transform transition-all duration-300 hover:scale-105">
                    <UIcon name="i-heroicons-phone" class="mr-2" />
                    {{ secondaryButton.text }}
                </UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ButtonProps {
    text: string;
    link: string;
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