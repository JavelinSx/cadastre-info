<template>
  <div class="w-full">
    <!-- Быстрые ссылки -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8 border border-green-500 md:border-none sticky top-24">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ title }}</h3>
      <ul class="space-y-3">
        <li v-for="(link, linkIndex) in links" :key="linkIndex"
          class="flex items-center p-3 rounded-md transition-all duration-300 hover:">
          <NuxtLink :to="link.url" class="text-gray-700 hover:text-primary-600 text-base flex items-center w-full">
            <UIcon :name="link.icon" class="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
            <span>{{ link.text }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <slot></slot>

    <!-- Получить консультацию -->
    <div v-if="contactCta" class="bg-primary-50 rounded-lg shadow-md p-6 border border-primary-100">
      <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ contactCta.title }}</h3>
      <p class="text-gray-600 mb-4">
        {{ contactCta.description }}
      </p>
      <UButton :to="contactCta.buttonLink" color="primary" variant="solid" block
        class="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
        <UIcon name="i-heroicons-document-text" class="mr-2" />
        {{ contactCta.buttonText }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SidebarLink, ContactCta } from '~/utils/types/information-types';

defineProps({
  title: {
    type: String,
    required: true
  },
  links: {
    type: Array as () => SidebarLink[],
    required: true
  },
  contactCta: {
    type: Object as () => ContactCta | null,
    default: null
  }
});
</script>