<template>
    <div class="w-full">
        <label v-if="label" :for="id" class="block text-sm font-medium mb-1 text-gray-700">{{ label }}</label>
        <div class="relative">
            <select :id="id" :value="modelValue"
                class="form-select bg-white text-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                :disabled="disabled" @change="$emit('update:modelValue', $event.target.value)">
                <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
                <option v-for="option in options" :key="getOptionValue(option)" :value="getOptionValue(option)">
                    {{ getOptionLabel(option) }}
                </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
        <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number, Boolean, Object],
        default: ''
    },
    options: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    valueKey: {
        type: String,
        default: 'value'
    },
    labelKey: {
        type: String,
        default: 'text'
    }
});

defineEmits(['update:modelValue']);

// Функция для получения значения опции
const getOptionValue = (option: any) => {
    if (typeof option === 'object' && option !== null) {
        return option[props.valueKey];
    }
    return option;
};

// Функция для получения отображаемого текста опции
const getOptionLabel = (option: any) => {
    if (typeof option === 'object' && option !== null) {
        return option[props.labelKey];
    }
    return option;
};
</script>

<style scoped>
/* Стили для кастомизации селекта */
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

/* Стиль для Firefox */
@-moz-document url-prefix() {
    select {
        background-color: white;
        color: #1f2937;
    }
}
</style>