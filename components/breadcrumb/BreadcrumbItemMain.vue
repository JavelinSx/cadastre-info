<template>
  <li :class="itemClass" class="flex ">
    <!-- Разделитель между элементами (кроме первого) -->
    <div v-if="!isFirst" class="flex items-center mx-1" :class="dividerClass">
      <!-- Иконка разделителя -->
      <UIcon v-if="divider.startsWith('i-')" :name="divider" class="w-5 h-5 text-gray-400" />
      <!-- Текстовый разделитель -->
      <span v-else class="text-gray-400">{{ divider }}</span>
    </div>

    <!-- Последний элемент (без ссылки) -->
    <div v-if="item.isLast" class="flex items-center text-gray-800 font-medium" :class="lastItemClass">
      <!-- Иконка -->
      <UIcon v-if="shouldShowIcon" :name="item.icon || 'i-heroicons-document-text'" class="w-4 h-4 mr-1.5 flex-shrink-0"
        :class="iconClass" />
      <span>{{ item.label }}</span>
    </div>

    <!-- Ссылка для промежуточных элементов -->
    <NuxtLink v-else :to="item.path"
      class="flex items-center text-primary-600 hover:text-primary-800 transition-colors duration-300"
      :class="linkClass">
      <!-- Иконка -->
      <UIcon v-if="shouldShowIcon" :name="item.icon || 'i-heroicons-document-text'" class="w-4 h-4 mr-1.5 flex-shrink-0"
        :class="iconClass" />
      <span>{{ item.label }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BreadcrumbItem } from '~/utils/types/breadcrumbs'

const props = defineProps({
  /**
   * Элемент хлебных крошек
   */
  item: {
    type: Object as () => BreadcrumbItem,
    required: true
  },

  /**
   * Является ли элемент первым в списке
   */
  isFirst: {
    type: Boolean,
    default: false
  },

  /**
   * Показывать ли иконки
   */
  showIcon: {
    type: Boolean,
    default: true
  },

  /**
   * Показывать иконку только для главной страницы
   */
  homeIconOnly: {
    type: Boolean,
    default: false
  },

  /**
   * Разделитель между элементами
   */
  divider: {
    type: String,
    default: 'i-heroicons-chevron-right'
  },

  /**
   * Классы для элемента списка
   */
  itemClass: {
    type: String,
    default: ''
  },

  /**
   * Классы для ссылки
   */
  linkClass: {
    type: String,
    default: ''
  },

  /**
   * Классы для последнего элемента
   */
  lastItemClass: {
    type: String,
    default: ''
  },

  /**
   * Классы для иконки
   */
  iconClass: {
    type: String,
    default: ''
  },

  /**
   * Классы для разделителя
   */
  dividerClass: {
    type: String,
    default: ''
  }
})

// Определяем, нужно ли показывать иконку для текущего элемента
const shouldShowIcon = computed(() => {
  // Если иконки отключены полностью, не показываем
  if (!props.showIcon) return false

  // Если включена опция "только иконка для главной страницы"
  if (props.homeIconOnly) {
    // Показываем только для первого элемента (это должна быть главная страница)
    return props.isFirst
  }

  // Иначе показываем для всех элементов
  return true
})
</script>