<template>
    <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">{{ title }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(member, index) in team" :key="index"
                class=" p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <div class="mb-4 flex justify-center">
                    <div class="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center shadow-sm">
                        <UIcon name="i-heroicons-user" class="w-16 h-16 text-primary-600" />
                    </div>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 text-center mb-2">{{ member.name }}</h3>
                <p class="text-primary-600 font-medium text-center mb-4">{{ member.position }}</p>
                <p class="text-gray-600 text-center">
                    {{ member.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface TeamMember {
    name: string;
    position: string;
    description: string;
}

defineProps({
    title: {
        type: String,
        default: 'Наша команда'
    },
    team: {
        type: Array as () => TeamMember[],
        required: true
    }
});
</script>