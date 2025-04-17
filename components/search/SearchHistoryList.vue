<template>
  <div class="p-4">
    <!-- Популярные запросы -->
    <div v-if="popularSearches && popularSearches.length > 0" class="mb-6">
      <h3 class="text-sm font-medium text-gray-500 mb-2">Популярные запросы:</h3>
      <div class="flex flex-wrap gap-2">
        <button v-for="term in popularSearches" :key="term"
          class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
          @click="$emit('use-term', term)">
          <UIcon name="i-heroicons-magnifying-glass" class="w-3 h-3 mr-1" />
          {{ term }}
        </button>
      </div>
    </div>

    <!-- История поиска -->
    <div v-if="history && history.length > 0" class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-sm font-medium text-gray-500">История поиска:</h3>
        <button class="text-xs text-gray-500 hover:text-gray-700" @click="$emit('clear-history')">
          Очистить
        </button>
      </div>
      <div class="flex flex-wrap gap-2">
        <button v-for="term in history" :key="term"
          class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
          @click="$emit('use-term', term)">
          <UIcon name="i-heroicons-clock" class="w-3 h-3 mr-1" />
          {{ term }}
        </button>
      </div>
    </div>

    <!-- Если нет истории и популярных запросов -->
    <div v-if="(!history || history.length === 0) && (!popularSearches || popularSearches.length === 0)"
      class="text-center text-gray-500 py-8">
      Начните вводить запрос для поиска
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  history: {
    type: Array as () => string[],
    default: () => []
  },
  popularSearches: {
    type: Array as () => string[],
    default: () => []
  }
})

const emit = defineEmits(['use-term', 'clear-history'])
</script>