// composables/useParallax.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useParallax(options = {}) {
  const el = ref(null);
  const isActive = ref(false);

  // Значения по умолчанию
  const defaultOptions = {
    speed: 0.7,
    direction: 'down',
    mobileDisabled: true,
    mobileBreakpoint: 767,
  };

  // Объединяем опции
  const config = { ...defaultOptions, ...options };

  // Обработчик скролла
  const handleScroll = () => {
    if (!el.value || !isActive.value) return;

    const scrollPosition = window.scrollY;
    const element = el.value;
    const section = element.closest('section');

    if (!section) return;

    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top;
    const sectionHeight = rect.height;

    // Расчет смещения
    let translateY = 0;

    if (offsetTop <= 0) {
      translateY = Math.abs(offsetTop) * config.speed;
    }

    // Ограничение максимального смещения
    const maxTranslate = sectionHeight * 0.6;
    translateY = Math.min(translateY, maxTranslate);

    // Направление параллакса
    if (config.direction === 'up') {
      translateY = -translateY;
    }

    element.style.transform = `translateY(${translateY}px)`;
  };

  // Инициализация
  onMounted(() => {
    if (import.meta.client) {
      const isMobileDevice = window.innerWidth < config.mobileBreakpoint;

      // Если мобильное устройство и параллакс отключен для мобильных
      if (!(isMobileDevice && config.mobileDisabled)) {
        isActive.value = true;
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Начальные настройки
        setTimeout(handleScroll, 100);
      }
    }
  });

  // Очистка
  onUnmounted(() => {
    if (import.meta.client && isActive.value) {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    }
  });

  return { el };
}
