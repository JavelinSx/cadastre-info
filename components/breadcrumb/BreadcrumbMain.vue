<template>
    <nav v-if="shouldShow" aria-label="Хлебные крошки" class="py-3 px-4" :class="wrapperClass">
        <div :class="containerClass">
            <ol class="flex flex-wrap items-center space-x-1 text-sm text-gray-600" :class="listClass">
                <BreadcrumbItemMain v-for="(crumb, index) in breadcrumbs" :key="index" :item="crumb"
                    :is-first="index === 0" :show-icon="showIcons" :home-icon-only="homeIconOnly" :divider="divider"
                    :item-class="itemClass" :link-class="linkClass" :last-item-class="lastItemClass"
                    :icon-class="iconClass" :divider-class="dividerClass" />
            </ol>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { BreadcrumbItem, BreadcrumbsOptions } from '~/utils/types/breadcrumbs'
import {
    generateBreadcrumbs,
    shouldShowBreadcrumbs,
    defaultExcludedRoutes,
    defaultRouteNameMap
} from '~/utils/breadcrumb-utils'

import BreadcrumbItemMain from './BreadcrumbItemMain.vue'

const props = defineProps({
    /**
     * Показывать ли иконки в крошках
     */
    showIcons: {
        type: Boolean,
        default: true
    },

    /**
     * Отображать только иконку для главной страницы
     */
    homeIconOnly: {
        type: Boolean,
        default: false
    },

    /**
     * Текст для главной страницы
     */
    homeText: {
        type: String,
        default: 'Главная'
    },

    /**
     * Разделитель между крошками 
     * (может быть строкой или названием иконки, например 'i-heroicons-chevron-right')
     */
    divider: {
        type: String,
        default: 'i-heroicons-chevron-right'
    },

    /**
     * Показывать ли на главной странице
     */
    showOnHomePage: {
        type: Boolean,
        default: false
    },

    /**
     * Маршруты, на которых не отображать хлебные крошки
     */
    excludedRoutes: {
        type: Array as () => string[],
        default: () => defaultExcludedRoutes
    },

    /**
     * Пользовательское сопоставление маршрутов с названиями
     */
    routeNameMap: {
        type: Object as () => Record<string, string>,
        default: () => ({})
    },

    /**
     * Фиксированный массив хлебных крошек (для ручного определения)
     */
    items: {
        type: Array as () => BreadcrumbItem[],
        default: () => []
    },

    /**
     * Классы для обертки
     */
    wrapperClass: {
        type: String,
        default: 'bg-gray-50'
    },

    /**
     * Классы для контейнера
     */
    containerClass: {
        type: String,
        default: 'container-custom'
    },

    /**
     * Классы для списка
     */
    listClass: {
        type: String,
        default: ''
    },

    /**
     * Классы для элемента
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

const route = useRoute()
const breadcrumbs = ref<BreadcrumbItem[]>([])

// Объединяем пользовательские сопоставления с дефолтными
const mergedRouteNameMap = computed(() => {
    return {
        ...defaultRouteNameMap,
        ...props.routeNameMap
    }
})

// Нужно ли показывать хлебные крошки на текущем маршруте
const shouldShow = computed(() => {
    // Если передан фиксированный массив элементов, всегда показываем
    if (props.items && props.items.length > 0) {
        return true
    }

    return shouldShowBreadcrumbs(
        route.path,
        props.showOnHomePage,
        props.excludedRoutes
    )
})

// Генерируем хлебные крошки при изменении маршрута
watch(() => route.path, updateBreadcrumbs, { immediate: true })

// Функция обновления хлебных крошек
function updateBreadcrumbs() {
    // Если передан фиксированный массив элементов, используем его
    if (props.items && props.items.length > 0) {
        breadcrumbs.value = props.items
        return
    }

    // Иначе генерируем хлебные крошки на основе текущего маршрута
    breadcrumbs.value = generateBreadcrumbs(
        route.path,
        props.homeText,
        mergedRouteNameMap.value
    )
}

onMounted(() => {
    updateBreadcrumbs()
})
</script>