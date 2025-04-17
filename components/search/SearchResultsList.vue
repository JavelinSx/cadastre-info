<template>
  <div class="search-results overflow-y-auto">
    <!-- Отображение загрузки -->
    <div v-if="isLoading" class="flex items-center justify-center p-8">
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-primary-500 border-r-2"></div>
    </div>

    <!-- Пустой результат -->
    <div v-else-if="isEmpty" class="text-center p-8">
      <div class="text-gray-400 mb-4">
        <UIcon name="i-heroicons-magnifying-glass" class="w-12 h-12 mx-auto" />
      </div>
      <p class="text-gray-600 font-medium mb-2">Ничего не найдено</p>
      <p class="text-gray-500 text-sm">
        Попробуйте изменить поисковый запрос или проверить орфографию
      </p>
    </div>

    <!-- Результаты поиска -->
    <div v-else>
      <!-- Счетчик результатов -->
      <div v-if="totalResults > 0" class="px-4 py-1 text-xs text-gray-500">
        Найдено: {{ totalResults }} результатов
      </div>

      <!-- Группы результатов по категориям -->
      <div v-for="(items, category, categoryIndex) in results" :key="category">
        <div class="px-4 py-1 text-xs font-medium text-gray-500 flex justify-between">
          <h3>{{ formatCategoryName(category) }}</h3>
          <span>{{ items.length }}</span>
        </div>

        <ul class="mb-4">
          <li v-for="(item, itemIndex) in items" :key="item.url"
            :class="{ 'bg-gray-100': isActiveItem(categoryIndex, itemIndex) }">
            <NuxtLink :to="item.url" class="w-full text-left px-3 py-2 hover:bg-gray-100 rounded block"
              @click="$emit('select', item)" @mouseenter="$emit('hover', { categoryIndex, itemIndex })">
              <h4 class="font-medium text-primary-700" v-html="highlightItemText(item.title)"></h4>
              <p class="text-sm text-gray-600 truncate" v-html="highlightItemText(item.description)"></p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { highlightText } from '~/utils/search-utils'
import type { GroupedResults, SearchResultItemType } from '~/utils/types/search';

const props = defineProps({
  results: {
    type: Object as () => GroupedResults,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  searchQuery: {
    type: String,
    default: ''
  },
  activeCategory: {
    type: Number,
    default: -1
  },
  activeItemIndex: {
    type: Number,
    default: -1
  }
})

const emit = defineEmits(['select', 'hover'])

// Вычисляемые свойства
const isEmpty = computed(() => !props.isLoading && Object.keys(props.results).length === 0)

const totalResults = computed(() => {
  let total = 0
  for (const category in props.results) {
    total += props.results[category].length
  }
  return total
})

// Методы
const formatCategoryName = (category: string) => {
  const categoryMap: Record<string, string> = {
    'services': 'Услуги',
    'pages': 'Страницы',
    'blog': 'Блог',
    'docs': 'Документация',
    'other': 'Прочее',
    'Земельные участки': 'Земельные участки',
    'Технические планы': 'Технические планы',
    'Кадастровый учет': 'Кадастровый учет',
    'Юридические услуги': 'Юридические услуги',
    'Информация': 'Информация'
  }

  return categoryMap[category] || category
}

const isActiveItem = (categoryIndex: number, itemIndex: number) => {
  return props.activeCategory === categoryIndex && props.activeItemIndex === itemIndex
}

// Метод для подсветки текста
const highlightItemText = (text: string) => {
  if (!props.searchQuery || props.searchQuery.trim() === '') {
    return text
  }
  return highlightText(text, props.searchQuery)
}
</script>

<style scoped>
.search-results {
  max-height: 60vh;
}

:deep(mark) {
  background-color: rgba(245, 158, 11, 0.2);
  color: inherit;
  border-radius: 0.125rem;
  padding: 0 0.125rem;
}
</style>