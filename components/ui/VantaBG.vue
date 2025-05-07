<template>
    <div ref="bgElement" class="absolute inset-0 z-0 w-full h-full"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const bgElement = ref(null);
const { isMobile } = useDevice();
let vantaEffect = null;

// Используем функцию, предоставленную плагином
const { $createVantaEffect } = useNuxtApp();

onMounted(() => {
    if (bgElement.value) {
        vantaEffect = $createVantaEffect(bgElement.value, {
            points: isMobile.value ? 10 : 20,
            maxDistance: isMobile.value ? 10 : 20,
            spacing: isMobile.value ? 10 : 20
        });
    }
});

onBeforeUnmount(() => {
    if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        vantaEffect.destroy();
    }
});
</script>

<style scoped>
.vanta-background {
    position: absolute;
    inset: 0;
    z-index: -1;
}
</style>