<template>
    <div class="py-16 bg-gray-50 text-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <!-- Заголовок страницы -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold mb-4 text-gray-800">
                    Наши услуги
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Полный комплекс кадастровых работ и услуг по оформлению недвижимости
                    от квалифицированных специалистов
                </p>
            </div>

            <!-- Динамическая сетка услуг -->
            <div class="flex flex-wrap -mx-4">
                <div v-for="service in servicesBaseList" :key="service.id" class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                    <div
                        class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div class="flex items-center mb-4">
                            <div
                                class="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mr-4">
                                <UIcon :name="service.icon" class="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800">{{ service.title }}</h3>
                        </div>
                        <p class="text-gray-600 mb-6 flex-grow">
                            {{ service.description }}
                        </p>
                        <div class="mt-auto">
                            <NuxtLink :to="service.link"
                                class="inline-flex items-center text-primary-600 hover:text-primary-800 group">
                                <span class="mr-1 transition-all duration-300 group-hover:mr-2">Подробнее</span>
                                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Блок "Почему выбирают нас" -->
            <div class="mt-20">
                <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Почему выбирают нас</h2>

                <div class="flex flex-wrap -mx-4">
                    <div v-for="feature in featuresList" :key="feature.id" class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
                            <div class="flex items-center mb-4">
                                <div
                                    class="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                    <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600" />
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
                            <p class="text-gray-600">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Блок с призывом к действию -->
            <div class="mt-20 bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800">Нужна помощь с оформлением документов?</h2>
                    <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                        Получите бесплатную консультацию по любому вопросу, связанному с кадастровыми работами и
                        оформлением
                        недвижимости
                    </p>
                    <UButton to="/request" color="primary" variant="solid" size="xl"
                        class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <UIcon name="i-heroicons-document-text" class="mr-2" />
                        Оставить заявку
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { servicesBaseList, featuresList } from '~/utils/data/services';
definePageMeta({
    title: 'Услуги - Кадастровые работы и оформление недвижимости',
    description: 'Полный спектр кадастровых работ и услуг по оформлению недвижимости. Межевание, технические планы, оформление прав собственности и другие услуги.'
});


</script>