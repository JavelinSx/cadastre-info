<template>
  <div>
    <!-- Кнопка открытия поиска -->
    <SearchButton :text="buttonText" :hide-text="hideButtonText" @click="openSearch" />

    <!-- Модальное окно поиска с Teleport -->
    <Teleport to="body">
      <div v-if="isOpen"
        class="fixed inset-0 z-50 backdrop-blur bg-white/30 flex items-start justify-center pt-20 sm:pt-32"
        @click="handleClickOutside" @keydown.esc="closeSearch">
        <div class="bg-white w-full max-w-2xl max-h-[70vh] rounded-lg shadow-xl overflow-hidden flex flex-col"
          ref="dialogRef" @click.stop>

          <!-- Поисковая строка -->
          <SearchBar v-model="searchTermValue" :placeholder="placeholder" :is-loading="isLoading" @clear="clearSearch"
            @escape="closeSearch" @search="handleSearch" @navigate-next="navigateNext" @navigate-prev="navigatePrev" />

          <!-- Результаты поиска или история -->
          <div class="flex-grow overflow-auto">
            <SearchResultsList v-if="hasQuery" :results="groupedResults" :is-loading="isLoading"
              :search-query="searchTermValue" :active-category="activeCategory" :active-item-index="activeItemIndex"
              @select="handleSelectItem" @hover="handleHoverItem" />
            <SearchHistoryList v-else :history="history" :popular-searches="popularSearches" @use-term="useSearchTerm"
              @clear-history="clearHistory" />
          </div>

          <!-- Вспомогательная клавиатурная навигация -->
          <div v-if="showKeyboardHints && hasResults" class="text-xs text-gray-400 py-2 px-4 border-t">
            <div class="flex justify-center gap-4">
              <span class="flex items-center">
                <kbd class="px-1 py-0.5 bg-gray-100 border rounded mr-1">↑</kbd>
                <kbd class="px-1 py-0.5 bg-gray-100 border rounded mr-1">↓</kbd>
                для навигации
              </span>
              <span class="flex items-center">
                <kbd class="px-1 py-0.5 bg-gray-100 border rounded mr-1">Enter</kbd>
                для выбора
              </span>
              <span class="flex items-center">
                <kbd class="px-1 py-0.5 bg-gray-100 border rounded mr-1">Esc</kbd>
                для закрытия
              </span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useSearch } from '~/composables/useSearch'
import type { SearchResultItemType } from '~/utils/types/search'

import SearchButton from './SearchButton.vue'
import SearchBar from './SearchBar.vue'
import SearchResultsList from './SearchResultsList.vue'
import SearchHistoryList from './SearchHistoryList.vue'

// Пропсы
const props = defineProps({
  buttonText: {
    type: String,
    default: 'Поиск'
  },
  buttonIcon: {
    type: String,
    default: 'i-heroicons-magnifying-glass'
  },
  hideButtonText: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'Поиск по сайту...'
  },
  popularSearches: {
    type: Array as () => string[],
    default: () => []
  },
  showKeyboardHints: {
    type: Boolean,
    default: true
  }
})

// Эмиты
const emit = defineEmits(['search', 'select'])

// Композабл поиска
const {
  isOpen,
  searchTerm,
  isLoading,
  groupedResults,
  hasResults,
  activeCategory,
  activeItemIndex,
  history,
  openSearch,
  closeSearch,
  clearSearch,
  search,
  selectResult,
  useSearchTerm,
  clearHistory,
  navigateNext,
  navigatePrev,
  getActiveItem
} = useSearch()

const router = useRouter()
const dialogRef = ref<HTMLElement | null>(null)

// Создаем локальную реактивную переменную для двусторонней привязки v-model
const searchTermValue = computed({
  get: () => searchTerm.value,
  set: (value: string) => {
    searchTerm.value = value
    search(value)
  }
})

// Вычисляемые свойства
const hasQuery = computed(() => searchTerm.value && searchTerm.value.trim() !== '')

// Обработчики событий
const handleClickOutside = (event: MouseEvent) => {
  if (dialogRef.value && !dialogRef.value.contains(event.target as Node)) {
    closeSearch()
  }
}

const handleSearch = () => {
  const activeItem = getActiveItem()
  if (activeItem) {
    handleSelectItem(activeItem)
  }
}

const handleSelectItem = (item: SearchResultItemType) => {
  const selectedItem = selectResult(item)
  router.push(selectedItem.url)
  emit('select', { term: searchTerm.value, item: selectedItem })
}

const handleHoverItem = ({ categoryIndex, itemIndex }: { categoryIndex: number, itemIndex: number }) => {
  activeCategory.value = categoryIndex
  activeItemIndex.value = itemIndex
}

// Управление событиями клавиатуры
onMounted(() => {
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      closeSearch()
    }
  }

  document.addEventListener('keydown', handleEscKey)

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscKey)
  })
})
</script>