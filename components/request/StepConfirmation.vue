<template>
    <div>
        <h3 class="text-xl font-semibold mb-4 animate-fadeIn">Подтверждение заявки</h3>

        <div class="bg-gray-50 p-4 rounded-md mb-6 animate-scaleUp shadow-sm">
            <div class="space-y-4">
                <div class="animate-fadeIn" style="animation-delay: 100ms">
                    <h4 class="font-medium mb-3">Выбранная услуга</h4>
                    <p class="text-primary-800 font-medium">{{ store.getServiceInfo().label }}</p>
                </div>

                <div v-if="store.formData.serviceType" class="animate-fadeIn" style="animation-delay: 200ms">
                    <h4 class="font-medium mt-4 mb-3">Тип услуги</h4>
                    <p class="text-primary-800 font-medium">{{ store.getServiceTypeInfo().label }}</p>
                </div>

                <div class="animate-fadeIn" style="animation-delay: 300ms">
                    <h4 class="font-medium mt-4 mb-3">Информация об объекте</h4>
                    <div class="space-y-2 bg-white p-3 rounded-md shadow-sm">
                        <p>
                            <span class="font-medium">Тип объекта:</span> {{
                                getObjectTypeText(store.formData.objectType) }}
                        </p>
                        <p v-if="store.formData.city">
                            <span class="font-medium">Населенный пункт:</span> {{ store.formData.city }}
                        </p>
                        <p>
                            <span class="font-medium">Адрес:</span> {{ store.formData.address }}
                        </p>
                        <p v-if="store.formData.additionalInfo"
                            class="transition-all duration-300 hover:bg-gray-50 p-1 rounded">
                            <span class="font-medium">Дополнительная информация:</span><br>
                            {{ store.formData.additionalInfo }}
                        </p>
                    </div>
                </div>

                <div class="animate-fadeIn" style="animation-delay: 400ms">
                    <h4 class="font-medium mt-4 mb-3">Контактная информация</h4>
                    <div class="space-y-2 bg-white p-3 rounded-md shadow-sm">
                        <p>
                            <span class="font-medium">ФИО:</span> {{ store.formData.fullName }}
                        </p>
                        <p>
                            <span class="font-medium">Телефон:</span> {{ store.formData.phone }}
                        </p>
                        <p>
                            <span class="font-medium">Email:</span> {{ store.formData.email }}
                        </p>
                        <p>
                            <span class="font-medium">Предпочтительный способ связи:</span> {{
                                getContactMethodText(store.formData.contactMethod) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <UFormGroup class="animate-fadeIn" style="animation-delay: 500ms">
            <div class="flex items-start gap-2">
                <UCheckbox :model-value="store.formData.agreement" @update:model-value="store.setAgreement($event)"
                    name="agreement" class="transition-transform duration-300 hover:scale-110" />
                <div>
                    <span>Я согласен на обработку персональных данных в соответствии с </span>
                    <NuxtLink to="/privacy-policy"
                        class="text-primary-600 hover:text-primary-800 underline decoration-dotted transition-colors duration-300">
                        политикой
                        конфиденциальности</NuxtLink>
                </div>
            </div>
            <p class="text-red-500 text-sm mt-1" v-if="store.errors.agreement">
                {{ store.errors.agreement }}
            </p>
        </UFormGroup>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';

const store = useRequestStore();

// Функции для получения текстовых значений
const getObjectTypeText = (value: string) => {
    const objectTypes = [
        { text: 'Земельный участок', value: 'land' },
        { text: 'Жилой дом', value: 'house' },
        { text: 'Квартира', value: 'apartment' },
        { text: 'Коммерческая недвижимость', value: 'commercial' },
        { text: 'Гараж', value: 'garage' },
        { text: 'Другое', value: 'other' }
    ];
    const objectType = objectTypes.find(t => t.value === value);
    return objectType ? objectType.text : '';
};

const getContactMethodText = (value: string) => {
    const contactMethods = [
        { label: 'Телефон', value: 'phone' },
        { label: 'Email', value: 'email' },
        { label: 'Telegram', value: 'telegram' }
    ];
    const method = contactMethods.find(m => m.value === value);
    return method ? method.label : '';
};
</script>

<style scoped>
.animate-fadeIn {
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
}

.animate-scaleUp {
    opacity: 0;
    animation: scaleUp 0.5s ease-out forwards;
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

@keyframes scaleUp {
    from {
        transform: scale(0.95);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>