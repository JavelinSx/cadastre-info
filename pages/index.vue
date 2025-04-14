<template>
    <div>
        <HeroSection class="lg:px-12 px-4" />
        <ServicesSection class="lg:px-12 px-4" />
        <FeaturesSection class="lg:px-12 px-4" />
        <InfoSection class="lg:px-12 px-4" />
        <TestimonialsSection class="lg:px-12 px-4" />
        <CtaSection class="lg:px-12 px-4" />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/home/HeroSection.vue';
import ServicesSection from '~/components/home/ServicesSection.vue';
import FeaturesSection from '~/components/home/FeaturesSection.vue';
import InfoSection from '~/components/home/InfoSection.vue';
import TestimonialsSection from '~/components/home/TestimonialsSection.vue';
import CtaSection from '~/components/home/CtaSection.vue';

definePageMeta({
    title: 'Главная - Информационный портал о кадастровой деятельности',
    description: 'Правовая и юридическая информация о кадастровых услугах, оформлении недвижимости и земельных участков.'
});
</script>