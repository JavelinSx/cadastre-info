<template>
  <div class="min-h-screen flex flex-col relative bg-gray-200">

    <AppHeader />
    <BreadcrumbMain />
    <main class="flex-grow overflow-y-hidden relative z-10 ">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import BreadcrumbMain from '~/components/breadcrumb/BreadcrumbMain.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
import AppHeader from '~/components/layout/AppHeader.vue';

</script>

<style>
.main-content {
  position: relative;
  z-index: 10;
}
</style>