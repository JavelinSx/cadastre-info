<template>
    <li :class="{ 'bg-gray-100': isActive }">
        <NuxtLink :to="item.url"
            class="w-full text-left px-3 py-2 hover:bg-gray-100 rounded transition-colors duration-150 block"
            @click="$emit('select', item)" @mouseenter="$emit('hover')" :class="{ 'shadow-sm': isActive }">
            <h4 class="font-medium text-primary-700">
                <span v-if="!highlightSearch">{{ item.title }}</span>
                <span v-else v-html="highlightedTitle"></span>
            </h4>
            <p class="text-sm text-gray-600 truncate">
                <span v-if="!highlightSearch">{{ item.description }}</span>
                <span v-else v-html="highlightedDescription"></span>
            </p>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SearchResultItem } from '~/utils/types/search'
import { highlightText } from '~/utils/search-utils'

const props = defineProps({
    /**
     * Элемент результата поиска
     */
    item: {
        type: Object as () => SearchResultItem,
        required: true
    },
    /**
     * Поисковый запрос для подсветки
     */
    searchQuery: {
        type: String,
        default: ''
    },
    /**
     * Подсвечивать ли найденный текст
     */
    highlightSearch: {
        type: Boolean,
        default: true
    },
    /**
     * Активен ли элемент (выбран при навигации с клавиатуры)
     */
    isActive: {
        type: Boolean,
        default: false
    }
})

defineEmits(['select', 'hover'])

// Подсвеченный заголовок
const highlightedTitle = computed(() => {
    if (!props.searchQuery || !props.highlightSearch) {
        return props.item.title
    }
    return highlightText(props.item.title, props.searchQuery)
})

// Подсвеченное описание
const highlightedDescription = computed(() => {
    if (!props.searchQuery || !props.highlightSearch) {
        return props.item.description
    }
    return highlightText(props.item.description, props.searchQuery)
})
</script>

<style scoped>
/* Переопределяем стили для подсветки в не-scoped разделе */
:deep(mark) {
    background-color: rgba(245, 158, 11, 0.2);
    color: inherit;
    border-radius: 0.125rem;
    padding: 0 0.125rem;
}
</style>