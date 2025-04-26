<template>
    <section class="py-16 bg-white text-gray-600">
        <div class="container-custom">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold mb-4">Актуальная правовая информация</h2>
                    <p class="text-gray-600 mb-6">
                        Мы собрали всю необходимую информацию о кадастровой деятельности, чтобы вы могли разобраться в
                        этой сложной теме. Наши материалы постоянно обновляются в соответствии с изменениями в
                        законодательстве.
                    </p>
                    <ul class="space-y-4">
                        <li v-for="item in infoItems" :key="item.id" class="flex items-start">
                            <UIcon name="i-heroicons-check-circle"
                                class="w-6 h-6 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span>{{ item.text }}</span>
                        </li>
                    </ul>
                    <UButton to="/information" color="primary" variant="solid" class="mt-8">
                        Узнать больше
                    </UButton>
                </div>
                <div class="bg-gray-100 p-8 rounded-lg">
                    <h3 class="text-2xl font-semibold mb-4">Последние обновления законодательства</h3>
                    <div class="space-y-6">
                        <div v-for="(update, index) in lawsData.lawCategories[0].laws" :key="index"
                            class="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                            <p class="text-sm text-gray-500 mb-1">{{ update.name }}</p>
                            <h4 class="text-lg font-medium mb-2">{{ update.title }}</h4>
                            <p class="text-gray-600">{{ update.description }}</p>
                            <NuxtLink :to="update.link"
                                class="inline-flex items-center text-primary-600 hover:text-primary-800 mt-2">
                                Читать полностью
                                <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { lawsData } from '~/utils/data/information';
// Информационные пункты
const infoItems = [
    {
        id: 1,
        text: 'Полная информация о кадастровом учете и регистрации прав'
    },
    {
        id: 2,
        text: 'Подробные инструкции по оформлению документов'
    },
    {
        id: 3,
        text: 'Актуальные требования к межевым и техническим планам'
    },
    {
        id: 4,
        text: 'Разъяснение сложных юридических вопросов простым языком'
    },
    {
        id: 5,
        text: 'Ответы на часто задаваемые вопросы в сфере кадастра'
    }
];

// Последние обновления законодательства
const latestUpdates = [
    {
        id: 1,
        date: '15 марта 2025',
        title: 'Изменения в законе о кадастровой деятельности',
        description: 'Внесены изменения в ФЗ "О кадастровой деятельности", касающиеся требований к кадастровым инженерам и срокам проведения работ.',
        link: '/blog/law-changes-2025'
    },
    {
        id: 2,
        date: '27 февраля 2025',
        title: 'Новый порядок определения кадастровой стоимости',
        description: 'Утвержден новый порядок определения кадастровой стоимости объектов недвижимости, который начнет действовать с 1 июля 2025 года.',
        link: '/blog/cadastral-value-changes'
    },
    {
        id: 3,
        date: '10 января 2025',
        title: 'Упрощение процедуры регистрации недвижимости',
        description: 'С 1 февраля 2025 года вступают в силу изменения, упрощающие процедуру регистрации недвижимости для физических лиц.',
        link: '/blog/registration-simplification'
    }
];
</script>