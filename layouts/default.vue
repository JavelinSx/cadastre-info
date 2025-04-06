<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader class="pl-4 pr-4" />

        <main class="flex-grow">
            <slot />
        </main>

        <AppFooter class="pl-4 pr-4" />
    </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
</script>