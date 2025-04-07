<template>
    <div class="text-gray-800">
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

        <div class="animate-fadeIn" style="animation-delay: 500ms">
            <div class="flex items-start gap-2">
                <label class="flex items-start cursor-pointer">
                    <input type="checkbox" :checked="store.formData.agreement"
                        @change="store.setAgreement($event.target.checked)"
                        class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-transform duration-300 hover:scale-110 mt-1" />
                    <span class="ml-2">
                        Я согласен на обработку персональных данных в соответствии с
                        <NuxtLink to="/privacy-policy"
                            class="text-primary-600 hover:text-primary-800 underline decoration-dotted transition-colors duration-300">
                            политикой конфиденциальности
                        </NuxtLink>
                    </span>
                </label>
            </div>
            <p class="text-red-500 text-sm mt-1" v-if="store.errors.agreement">
                {{ store.errors.agreement }}
            </p>
        </div>
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

/* Стилизация чекбокса */
input[type="checkbox"]:checked {
    background-color: #10b981;
    border-color: #10b981;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

input[type="checkbox"]:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px #d1fae5;
    /* primary-100 */
}
</style>