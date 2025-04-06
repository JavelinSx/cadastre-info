<template>
    <div>
        <HeroSection class="pl-4 pr-4" />
        <ServicesSection class="pl-4 pr-4" />
        <FeaturesSection class="pl-4 pr-4" />
        <InfoSection class="pl-4 pr-4" />
        <TestimonialsSection class="pl-4 pr-4" />
        <CtaSection class="pl-4 pr-4" />
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