<template>
    <div>
        <label v-if="label" :for="id" class="block text-sm font-medium mb-1 text-gray-700">{{ label }}</label>
        <input :id="id" type="tel" :value="modelValue" @input="onInput"
            class="form-input bg-white text-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            :placeholder="placeholder" :disabled="disabled" autocomplete="tel">
        <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: '+7'
    },
    error: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:modelValue']);

const formatPhoneNumber = (value: string): string => {
    // Удаляем все нецифровые символы, кроме плюса в начале
    let digits = value.replace(/[^\d+]/g, '');

    // Если номер начинается с 8, заменяем его на +7
    if (digits.startsWith('8')) {
        digits = '+7' + digits.substring(1);
    }

    // Если номер не начинается с +, добавляем +
    if (!digits.startsWith('+')) {
        digits = '+' + digits;
    }

    // Если номер длиннее 12 символов, обрезаем его до 12
    if (digits.length > 12) {
        digits = digits.substring(0, 12);
    }

    return digits;
};

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const formatted = formatPhoneNumber(target.value);

    // Обновляем значение в поле ввода, если оно изменилось
    if (formatted !== target.value) {
        target.value = formatted;
    }

    // Отправляем событие обновления для v-model
    emit('update:modelValue', formatted);
};
</script>