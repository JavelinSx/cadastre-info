<template>
    <div class="min-h-screen flex flex-col relative bg-gray-200">
        <!-- Vanta фон как глобальный для всех страниц кроме главной
        <VantaBackground v-if="!isHomePage" /> -->

        <AppHeader />
        <BreadcrumbMain />
        <main class="flex-grow overflow-y-hidden relative z-10 ">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
import BreadcrumbMain from '~/components/breadcrumb/BreadcrumbMain.vue';
// import VantaBackground from '~/components/ui/VantaBG.vue';

// const route = useRoute();

// // Проверяем, является ли текущая страница главной
// const isHomePage = computed(() => {
//     return route.path === '/' || route.path === '';
// });
</script>

<style>
.main-content {
    position: relative;
    z-index: 10;
}
</style>