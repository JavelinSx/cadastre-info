<template>
    <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ title }}</h2>

        <div v-for="(paragraph, index) in paragraphs" :key="index" class="text-gray-600 mb-4">
            <p>{{ paragraph }}</p>
        </div>

        <div v-if="image" class="mt-6 mb-6">
            <img :src="image.src" :alt="image.alt" class="rounded-lg w-full h-64 object-cover shadow-md" />
        </div>

        <template v-for="(section, sectionIndex) in sections" :key="sectionIndex">
            <h3 class="text-xl font-semibold mb-3 text-gray-800 mt-8">{{ section.title }}</h3>

            <ul v-if="section.type === 'list'" class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                    {{ typeof item === 'string' ? item : `${item.title} - ${item.description}` }}
                </li>
            </ul>

            <ol v-if="section.type === 'numbered'" class="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                    <span v-if="typeof item === 'object' && item.title" class="font-medium">{{ item.title }}</span>
                    <span v-if="typeof item === 'object' && item.title && item.description"> — </span>
                    <span v-if="typeof item === 'object' && item.description">{{ item.description }}</span>
                    <span v-if="typeof item !== 'object'">{{ item }}</span>
                </li>
            </ol>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { ServiceSection, ServiceImage } from '~/utils/types/service-types';

defineProps({
    title: {
        type: String,
        required: true
    },
    paragraphs: {
        type: Array as () => string[],
        default: () => []
    },
    image: {
        type: Object as () => ServiceImage | null,
        default: null
    },
    sections: {
        type: Array as () => ServiceSection[],
        default: () => []
    }
});
</script>