<template>
    <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ title }}</h2>

        <div class="space-y-6">
            <div v-for="(question, qIndex) in questions" :key="qIndex">
                <h4 class="text-lg font-medium mb-2 text-gray-800">{{ question.question }}</h4>
                <p class="text-gray-600">
                    {{ question.answer }}
                </p>
                <ul v-if="question.list" class="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                    <li v-for="(item, itemIndex) in question.list" :key="itemIndex">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ServiceQuestion } from '~/utils/types/service-types';

defineProps({
    title: {
        type: String,
        required: true
    },
    questions: {
        type: Array as () => ServiceQuestion[],
        default: () => []
    }
});
</script>