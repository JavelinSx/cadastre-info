<template>
    <div>
        <h3 class="text-xl font-semibold mb-4 animate-fadeIn">Информация об объекте</h3>
        <div class="space-y-4">
            <div class="animate-fadeIn" style="animation-delay: 100ms">
                <UFormGroup label="Тип объекта" name="objectType" :error="store.errors.objectType">
                    <USelectMenu :model-value="store.formData.objectType"
                        @update:model-value="store.setObjectType($event)" :options="objectTypes" option-attribute="text"
                        value-attribute="value" placeholder="Выберите тип объекта"
                        class="transition-all duration-300 hover:border-primary-400 focus:ring-primary-500" />
                </UFormGroup>
            </div>

            <div class="animate-fadeIn" style="animation-delay: 200ms">
                <UFormGroup label="Населенный пункт" name="city">
                    <USelectMenu :model-value="store.formData.city" @update:model-value="store.setCity($event)"
                        :options="store.cityList" placeholder="Выберите населенный пункт"
                        class="transition-all duration-300 hover:border-primary-400 focus:ring-primary-500" />
                </UFormGroup>
            </div>

            <div class="animate-fadeIn" style="animation-delay: 300ms">
                <UFormGroup label="Адрес объекта" name="address" :error="store.errors.address">
                    <UInput :model-value="store.formData.address" @update:model-value="store.setAddress($event)"
                        placeholder="Введите адрес объекта"
                        class="transition-all duration-300 hover:border-primary-400 focus:ring-primary-500" />
                </UFormGroup>
            </div>

            <div class="animate-fadeIn" style="animation-delay: 400ms">
                <UFormGroup label="Дополнительная информация" name="additionalInfo">
                    <UTextarea :model-value="store.formData.additionalInfo"
                        @update:model-value="store.setAdditionalInfo($event)"
                        placeholder="Опишите детали вашего запроса" rows="4"
                        class="transition-all duration-300 hover:border-primary-400 focus:ring-primary-500" />
                </UFormGroup>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';

const store = useRequestStore();

// Типы объектов
const objectTypes = [
    { text: 'Земельный участок', value: 'land' },
    { text: 'Жилой дом', value: 'house' },
    { text: 'Квартира', value: 'apartment' },
    { text: 'Коммерческая недвижимость', value: 'commercial' },
    { text: 'Гараж', value: 'garage' },
    { text: 'Другое', value: 'other' }
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
</style>