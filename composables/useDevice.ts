// composables/useDevice.ts - исправленная версия
import { computed, onMounted, onUnmounted, ref } from "vue";

export function useDevice(mobileBreakpoint = 768) {
  const isMobile = ref(false);
  let resizeHandler: (() => void) | null = null;

  const checkDevice = () => {
    if (import.meta.client) {
      isMobile.value = window.innerWidth < mobileBreakpoint;
    }
  };

  if (import.meta.client) {
    onMounted(() => {
      checkDevice();

      // Создаем обработчик с throttling для производительности
      let timeoutId: NodeJS.Timeout | null = null;
      resizeHandler = () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(checkDevice, 100);
      };

      window.addEventListener("resize", resizeHandler, { passive: true });
    });

    onUnmounted(() => {
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
        resizeHandler = null;
      }
    });
  }

  // Используем computed для isDesktop
  const isDesktop = computed(() => !isMobile.value);

  return {
    isMobile: readonly(isMobile),
    isDesktop: readonly(isDesktop),
  };
}
