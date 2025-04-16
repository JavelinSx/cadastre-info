<template>
    <div class="mb-4">
        <div class="flex items-center px-3 py-1">
            <UIcon v-if="categoryIcon" :name="categoryIcon" class="text-gray-500 w-4 h-4 mr-2" />
            <h3 class="text-sm font-semibold text-gray-500">{{ category }}</h3>
            <span v-if="showCount" class="ml-2 text-xs font-medium text-gray-400">
                ({{ items.length }})
            </span>
        </div>

        <ul>
            <SearchResultItem v-for="(item, index) in items" :key="item.url" :item="item" :search-query="searchQuery"
                :highlight-search="highlightSearch" :is-active="activeItemIndex === index"
                @select="$emit('selectItem', item)" @hover="$emit('hoverItem', { categoryIndex, itemIndex: index })" />
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SearchResultItem } from '~/utils/types/search'
import { searchCategories } from '~/utils/data/search-data'

const props = defineProps({
    /**
     * Название категории
     */
    category: {
        type: String,
        required: true
    },
    /**
     * Элементы в категории
     */
    items: {
        type: Array as () => SearchResultItem[],
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
     * Показывать ли количество результатов
     */
    showCount: {
        type: Boolean,
        default: true
    },
    /**
     * Индекс категории для навигации с клавиатуры
     */
    categoryIndex: {
        type: Number,
        required: true
    },
    /**
     * Индекс активного элемента в категории
     */
    activeItemIndex: {
        type: Number,
        default: -1
    }
})

defineEmits(['selectItem', 'hoverItem'])

// Получаем иконку для категории из справочника
const categoryIcon = computed(() => {
    return searchCategories[props.category] || ''
})
</script>