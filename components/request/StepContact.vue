<template>
    <div>
        <h3 class="text-xl font-semibold mb-4 animate-fadeIn">Контактная информация</h3>
        <div class="space-y-4">
            <div class="animate-fadeIn" style="animation-delay: 100ms">
                <UFormGroup label="ФИО" name="fullName" :error="store.errors.fullName">
                    <UInput :model-value="store.formData.fullName" @update:model-value="store.setFullName($event)"
                        placeholder="Введите ваше ФИО"
                        class="transition-all duration-300 hover:border-primary-400 focus:ring-primary-500" />
                </UFormGroup>
            </div>

            <div class="animate-fadeIn" style="animation-delay: 200ms">
                <UFormGroup label="Телефон" name="phone" :error="store.errors.phone">
                    <UInput :model-value="store.formData.phone" @update:model-value="store.setPhone($event)"
                        placeholder="+7 (___) ___-__-__"
                        class="transition-all duration-300 hover:border-primary-400 focus:ring-primary-500" />
                </UFormGroup>
            </div>

            <div class="animate-fadeIn" style="animation-delay: 300ms">
                <UFormGroup label="Email" name="email" :error="store.errors.email">
                    <UInput :model-value="store.formData.email" @update:model-value="store.setEmail($event)"
                        placeholder="your.email@example.com" type="email"
                        class="transition-all duration-300 hover:border-primary-400 focus:ring-primary-500" />
                </UFormGroup>
            </div>

            <div class="animate-fadeIn" style="animation-delay: 400ms">
                <UFormGroup label="Предпочтительный способ связи" name="contactMethod"
                    :error="store.errors.contactMethod">
                    <URadioGroup :model-value="store.formData.contactMethod"
                        @update:model-value="store.setContactMethod($event)" :options="contactMethods"
                        class="flex flex-col gap-2">
                        <template #option="{ option, checked }">
                            <div class="flex items-center transition-all duration-200"
                                :class="{ 'text-primary-600': checked }">
                                <div class="h-4 w-4 rounded-full border mr-2 flex items-center justify-center"
                                    :class="{ 'border-primary-600': checked, 'border-gray-300': !checked }">
                                    <div v-if="checked" class="h-2 w-2 rounded-full bg-primary-600 animate-scale-in">
                                    </div>
                                </div>
                                {{ option.label }}
                            </div>
                        </template>
                    </URadioGroup>
                </UFormGroup>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';

const store = useRequestStore();

// Способы связи
const contactMethods = [
    { label: 'Телефон', value: 'phone' },
    { label: 'Email', value: 'email' },
    { label: 'Telegram', value: 'telegram' }
];
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

@keyframes scale-in {
    0% {
        transform: scale(0);
    }

    70% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.animate-scale-in {
    animation: scale-in 0.3s forwards;
}
</style>