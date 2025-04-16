<template>
    <div class="flex items-center w-full">
        <UIcon :name="icon" class="text-gray-400 mr-2 w-5 h-5 flex-shrink-0" />

        <input ref="inputRef" type="text" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="flex-1 outline-none text-base md:text-lg text-gray-800 bg-transparent" autocomplete="off"
            :autofocus="autofocus" @keydown.esc="$emit('escape')" @keydown.enter="$emit('search')"
            @keydown.down="$emit('navigationNext')" @keydown.up="$emit('navigationPrev')" />

        <button v-if="modelValue" @click="$emit('clear')"
            class="p-1 rounded-full hover:bg-gray-200 transition-colors duration-150" aria-label="Очистить поиск">
            <UIcon name="i-heroicons-x-mark" class="text-gray-500 w-5 h-5" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
    /**
     * Значение поля ввода (v-model)
     */
    modelValue: {
        type: String,
        required: true
    },
    /**
     * Текст подсказки внутри поля
     */
    placeholder: {
        type: String,
        default: 'Поиск по сайту...'
    },
    /**
     * Иконка для поля ввода
     */
    icon: {
        type: String,
        default: 'i-heroicons-magnifying-glass'
    },
    /**
     * Автоматический фокус на поле при монтировании
     */
    autofocus: {
        type: Boolean,
        default: true
    }
})

const inputRef = ref<HTMLInputElement | null>(null)

defineEmits([
    'update:modelValue',
    'clear',
    'escape',
    'search',
    'navigationNext',
    'navigationPrev'
])

// Делаем фокус на поле ввода при монтировании
onMounted(() => {
    if (props.autofocus && inputRef.value) {
        // Используем setTimeout для уверенности, что поле отрендерилось
        setTimeout(() => {
            inputRef.value?.focus()
        }, 50)
    }
})

// Фокус на поле при изменении значения autofocus
watch(() => props.autofocus, (newValue) => {
    if (newValue && inputRef.value) {
        setTimeout(() => {
            inputRef.value?.focus()
        }, 50)
    }
})

defineExpose({
    focus: () => {
        inputRef.value?.focus()
    }
})
</script>