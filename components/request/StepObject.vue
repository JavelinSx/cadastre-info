<template>
    <UContainer class="w-full md:w-2/3">
        <h3 class="text-xl font-semibold mb-4 animate-fadeIn text-gray-800">Информация об объекте</h3>
        <div class="space-y-4">
            <!-- Тип объекта с использованием StyledSelect -->
            <div class="animate-fadeIn" style="animation-delay: 100ms">
                <StyledSelect id="objectType" v-model="store.formData.objectType" :options="objectTypesData"
                    :error="store.errors.objectType" label="Тип объекта" placeholder="Выберите тип объекта"
                    valueKey="value" labelKey="text" />
            </div>

            <!-- Населенный пункт с использованием StyledSelect -->
            <div class="animate-fadeIn" style="animation-delay: 200ms">
                <StyledSelect id="city" v-model="store.formData.city" :options="store.cityList" label="Населенный пункт"
                    placeholder="Выберите населенный пункт" />
            </div>

            <!-- Адрес объекта -->
            <div class="animate-fadeIn" style="animation-delay: 300ms">
                <label for="address" class="block text-sm font-medium mb-1 text-gray-700">Адрес объекта</label>
                <UInput id="address" v-model="store.formData.address" placeholder="Введите адрес объекта" class="w-full"
                    :ui="{
                        wrapper: 'relative',
                        base: 'bg-white w-full border rounded-md text-gray-800'
                    }" variant="outline" />
                <p v-if="store.errors.address" class="mt-1 text-sm text-red-600">{{ store.errors.address }}</p>
            </div>

            <!-- Дополнительная информация -->
            <div class="animate-fadeIn" style="animation-delay: 400ms">
                <label for="additionalInfo" class="block text-sm font-medium mb-1 text-gray-700">Дополнительная
                    информация</label>
                <UTextarea id="additionalInfo" v-model="store.formData.additionalInfo"
                    placeholder="Опишите детали вашего запроса" :rows="4" class="w-full rounded-md" :ui="{
                        wrapper: 'relative',
                        base: 'w-full bg-white text-gray-800',
                        placeholder: 'placeholder-slate-500'
                    }" variant="outline" />
            </div>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import { useRequestStore } from '~/stores/requestStore';
import { objectTypesData } from '~/utils/data';
import { onMounted } from 'vue';
import StyledSelect from '../ui/StyledSelect.vue';

const store = useRequestStore();

onMounted(() => {
    console.log('StepObject component mounted');

    // Установим пустое значение для city, чтобы placeholder работал
    if (!store.formData.city) {
        store.formData.city = '';
    }

    // Установим пустое значение для objectType, чтобы placeholder работал
    if (!store.formData.objectType) {
        store.formData.objectType = '';
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
</style>