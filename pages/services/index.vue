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

            <!-- Сетка услуг -->
            <ServicesGrid :services="servicesBaseList" />

            <!-- Блок "Почему выбирают нас" -->
            <ServicesFeatures :features="featuresList" />

            <!-- Блок с призывом к действию -->
            <ServiceCTA title="Нужна помощь с оформлением документов?"
                description="Получите бесплатную консультацию по любому вопросу, связанному с кадастровыми работами и оформлением недвижимости"
                :primaryButton="{
                    text: 'Оставить заявку',
                    link: '/request'
                }" :secondaryButton="{
                    text: 'Контакты',
                    link: '/contacts'
                }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { servicesBaseList, featuresList } from '~/utils/data/services';
import { ServiceCTA } from '~/components/services';
import ServicesFeatures from '~/components/services/ServicesFeatures.vue';
import ServicesGrid from '~/components/services/ServicesGrid.vue';

definePageMeta({
    title: 'Услуги - Кадастровые работы и оформление недвижимости',
    description: 'Полный спектр кадастровых работ и услуг по оформлению недвижимости. Межевание, технические планы, оформление прав собственности и другие услуги.'
});
</script>