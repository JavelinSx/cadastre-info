<template>
    <UContainer class="w-full md:w-2/3">
        <h3 class="text-xl font-semibold mb-4 animate-fadeIn text-gray-800">Контактная информация</h3>
        <div class="space-y-4">
            <!-- ФИО -->
            <div class="animate-fadeIn" style="animation-delay: 100ms">
                <label for="fullName" class="block text-sm font-medium mb-1 text-gray-700">ФИО</label>
                <UInput id="fullName" v-model="store.formData.fullName" placeholder="Введите ваше ФИО" class="w-full"
                    :ui="{
                        wrapper: 'relative',
                        base: 'bg-white w-full border rounded-md text-gray-800'
                    }" variant="outline" />
                <p v-if="store.errors.fullName" class="mt-1 text-sm text-red-600">{{ store.errors.fullName }}</p>
            </div>

            <!-- Телефон с маской -->
            <div class="animate-fadeIn" style="animation-delay: 200ms">
                <PhoneInput id="phone" v-model="store.formData.phone" label="Телефон" placeholder="+7"
                    :error="store.errors.phone" />
            </div>

            <!-- Email -->
            <div class="animate-fadeIn" style="animation-delay: 300ms">
                <label for="email" class="block text-sm font-medium mb-1 text-gray-700">Email</label>
                <UInput id="email" v-model="store.formData.email" placeholder="your.email@example.com" type="email"
                    class="w-full" :ui="{
                        wrapper: 'relative',
                        base: 'bg-white w-full border rounded-md text-gray-800'
                    }" variant="outline" />
                <p v-if="store.errors.email" class="mt-1 text-sm text-red-600">{{ store.errors.email }}</p>
            </div>

            <!-- Предпочтительный способ связи -->
            <div class="animate-fadeIn" style="animation-delay: 400ms">
                <label class="block text-sm font-medium mb-1 text-gray-700">Предпочтительный способ связи</label>
                <div class="mt-2 space-y-2">
                    <div v-for="method in contactMethods" :key="method.value"
                        class="flex items-center transition-all duration-200"
                        :class="{ 'text-primary-600': store.formData.contactMethod === method.value }">
                        <input type="radio" :id="method.value" :value="method.value"
                            v-model="store.formData.contactMethod"
                            class="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label :for="method.value" class="ml-2 block text-sm text-gray-700">
                            {{ method.label }}
                        </label>
                    </div>
                </div>
                <p v-if="store.errors.contactMethod" class="mt-1 text-sm text-red-600">{{ store.errors.contactMethod }}
                </p>
            </div>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';
import { onMounted } from 'vue';
import PhoneInput from '../ui/PhoneInput.vue';

const store = useRequestStore();

// Способы связи
const contactMethods = [
    { label: 'Телефон', value: 'phone' },
    { label: 'Email', value: 'email' },
    { label: 'Telegram', value: 'telegram' }
];

onMounted(() => {
    console.log('StepContact component mounted');

    // Устанавливаем значение по умолчанию для способа связи, если не выбрано
    if (!store.formData.contactMethod) {
        store.formData.contactMethod = 'phone';
    }

    // Инициализация телефона, если пустой
    if (!store.formData.phone) {
        store.formData.phone = '+7';
    }
});
</script>

<style scoped>
.animate-fadeIn {
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Стили для кастомизации radio-buttons */
input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid #d1d5db;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: grid;
    place-content: center;
}

input[type="radio"]::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.15s;
    background-color: #10b981;
    /* primary-500 */
}

input[type="radio"]:checked {
    border-color: #10b981;
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

input[type="radio"]:focus {
    outline: 2px solid transparent;
    box-shadow: 0 0 0 2px #d1fae5;
    /* primary-100 */
}
</style>