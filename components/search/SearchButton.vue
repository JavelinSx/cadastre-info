<template>
    <button @click="$emit('click')"
        class="flex items-center gap-2 py-2 px-3 text-gray-700 hover:text-primary-600 rounded-md border border-gray-300 hover:border-primary-400 transition-all duration-200"
        aria-label="Поиск по сайту" :class="buttonClass">
        <UIcon :name="icon" class="w-5 h-5" />
        <span v-if="!hideText" class="hidden md:inline">{{ text }}</span>
    </button>
</template>

<script setup lang="ts">
defineProps({
    /**
     * Текст кнопки
     */
    text: {
        type: String,
        default: 'Поиск'
    },
    /**
     * Иконка для кнопки
     */
    icon: {
        type: String,
        default: 'i-heroicons-magnifying-glass'
    },
    /**
     * Скрыть текст кнопки (отображать только иконку)
     */
    hideText: {
        type: Boolean,
        default: false
    },
    /**
     * Дополнительные классы для кнопки
     */
    buttonClass: {
        type: String,
        default: ''
    }
})

defineEmits(['click'])
</script>