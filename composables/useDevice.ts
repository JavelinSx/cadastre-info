// composables/useDevice.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useDevice(mobileBreakpoint = 768) {
  const isMobile = ref(false);

  // Функция для проверки ширины экрана
  const checkDevice = () => {
    isMobile.value = window.innerWidth < mobileBreakpoint;
  };

  // Выполняем только на клиенте
  if (process.client) {
    // Инициализация при монтировании компонента
    onMounted(() => {
      checkDevice();
      window.addEventListener('resize', checkDevice);
    });

    // Очистка слушателя при уничтожении компонента
    onUnmounted(() => {
      window.removeEventListener('resize', checkDevice);
    });
  } else {
    // Для SSR используем дефолтное значение
    isMobile.value = false;
  }

  return {
    isMobile,
    isDesktop: ref(!isMobile.value),
  };
}
