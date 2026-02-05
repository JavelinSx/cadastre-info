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
  title: 'Кадастровые работы в Плесецком районе | ПлесКад - Кадастровый инженер',
  description: 'Кадастровые работы в Плесецком районе Архангельской области. Межевание земельных участков, технические планы, постановка на кадастровый учет. Более 15 лет опыта.',
  keywords: 'кадастровый инженер Плесецк, межевание Плесецкий район, технический план Плесецк, кадастровые работы Архангельская область, земельные участки Плесецк',

  // Open Graph
  ogTitle: 'Кадастровые работы в Плесецком районе | ПлесКад',
  ogDescription: 'Кадастровые работы в Плесецком районе. Межевание, технические планы, кадастровый учет. Опыт более 15 лет.',
  ogImage: 'https://pleskad.ru/images/og-homepage.jpg',
  ogUrl: 'https://pleskad.ru',
  ogType: 'website',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Кадастровые работы в Плесецком районе | ПлесКад',
  twitterDescription: 'Кадастровые работы в Плесецком районе. Межевание, технические планы, кадастровый учет.',
  twitterImage: 'https://pleskad.ru/images/og-homepage.jpg'
})

// Schema.org разметка для улучшения SEO
const { addSchema, createOrganizationSchema, createLocalBusinessSchema, createWebSiteSchema } = useSchemaOrg()

addSchema([
  createOrganizationSchema(),
  createLocalBusinessSchema(),
  createWebSiteSchema()
])
</script>