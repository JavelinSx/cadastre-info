<template>
    <UButton @click="$emit('click')" icon="i-heroicons-magnifying-glass" variant="outline" :ui="{
        leadingIcon: 'text-primary-600'
    }" class="flex items-center  transition-all duration-200 text-primary-600" aria-label="Поиск по сайту">
        <span v-if="!hideText" class="hidden md:inline">{{ text }}</span>
    </UButton>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: 'Поиск'
    },
    hideText: {
        type: Boolean,
        default: false
    },
})

defineEmits(['click'])
</script>