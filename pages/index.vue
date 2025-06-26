<template>
    <div class="">
        <HeroSection class="lg:px-12 px-4" />
        <ServicesSection class="lg:px-12 px-4" />
        <FeaturesSection class="lg:px-12 px-4" />
        <InfoSection class="lg:px-12 px-4" />

        <CtaSection class="lg:px-12 px-4" />
    </div>
</template>

<script setup lang="ts">
import CtaSection from '~/components/home/CtaSection.vue';
import FeaturesSection from '~/components/home/FeaturesSection.vue';
import HeroSection from '~/components/home/HeroSection.vue';
import InfoSection from '~/components/home/InfoSection.vue';
import ServicesSection from '~/components/home/ServicesSection.vue';

// SEO настройки для главной страницы
useSeoMeta({
  title: 'Кадастровые услуги в Плесецком районе | ПлесКад - Кадастровый инженер',
  description: 'Профессиональные кадастровые услуги в Плесецком районе Архангельской области. Межевание земельных участков, технические планы, постановка на кадастровый учет. Более 15 лет опыта.',
  keywords: 'кадастровый инженер Плесецк, межевание Плесецкий район, технический план Плесецк, кадастровые работы Архангельская область, земельные участки Плесецк',
  
  // Open Graph
  ogTitle: 'Кадастровые услуги в Плесецком районе | ПлесКад',
  ogDescription: 'Профессиональные кадастровые услуги в Плесецком районе. Межевание, технические планы, кадастровый учет. Опыт более 15 лет.',
  ogImage: 'https://pleskad.ru/images/og-homepage.jpg',
  ogUrl: 'https://pleskad.ru',
  ogType: 'website',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Кадастровые услуги в Плесецком районе | ПлесКад',
  twitterDescription: 'Профессиональные кадастровые услуги в Плесецком районе. Межевание, технические планы, кадастровый учет.',
  twitterImage: 'https://pleskad.ru/images/og-homepage.jpg'
})
</script>