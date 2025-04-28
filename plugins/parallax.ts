// plugins/parallax.ts
import { useParallax } from '~/composables/useParallax';

export default defineNuxtPlugin((nuxtApp) => {
  const { vParallax } = useParallax();
  nuxtApp.vueApp.directive('parallax', vParallax);
});
