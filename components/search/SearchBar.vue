<template>
  <div class="border-b p-4">
    <div class="flex items-center w-full">
      <UIcon :name="icon" class="text-gray-400 mr-2 w-5 h-5 flex-shrink-0" />

      <input ref="inputRef" type="text" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="placeholder"
        class="flex-1 outline-none text-base md:text-lg text-gray-800 bg-transparent" autocomplete="off"
        @keydown.esc="$emit('escape')" @keydown.enter="$emit('search')" @keydown.down="$emit('navigate-next')"
        @keydown.up="$emit('navigate-prev')" />

      <div class="flex items-center gap-2">
        <div v-if="isLoading" class="animate-spin h-5 w-5 text-gray-400">
          <UIcon name="i-heroicons-arrow-path" class="w-5 h-5" />
        </div>

        <button v-else-if="modelValue" @click="$emit('clear')"
          class="p-1 rounded-full hover:bg-gray-200 transition-colors" aria-label="Очистить поиск">
          <UIcon name="i-heroicons-x-mark" class="text-gray-500 w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Поиск по сайту...'
  },
  icon: {
    type: String,
    default: 'i-heroicons-magnifying-glass'
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'update:modelValue',
  'clear',
  'escape',
  'search',
  'navigate-next',
  'navigate-prev'
])

const inputRef = ref<HTMLInputElement | null>(null)

// Установка фокуса при монтировании
onMounted(() => {
  setTimeout(() => {
    inputRef.value?.focus()
  }, 50)
})

// Экспозиция метода для фокуса
defineExpose({
  focus: () => {
    inputRef.value?.focus()
  }
})
</script>