<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <BreadcrumbMain />
        <main class="flex-grow overflow-y-hidden">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
import BreadcrumbMain from '~/components/breadcrumb/BreadcrumbMain.vue';
</script>