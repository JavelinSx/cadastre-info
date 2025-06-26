// composables/useParallax.ts
import { onMounted, onUnmounted, readonly, ref, type Ref } from "vue";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
  mobileDisabled?: boolean;
  mobileBreakpoint?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const el: Ref<HTMLElement | null> = ref(null);
  const isActive = ref(false);

  // Значения по умолчанию
  const defaultOptions: Required<ParallaxOptions> = {
    speed: 0.7,
    direction: "down",
    mobileDisabled: true,
    mobileBreakpoint: 767,
  };

  // Объединяем опции
  const config = { ...defaultOptions, ...options };

  // Обработчик скролла с throttling для производительности
  let ticking = false;
  const handleScroll = () => {
    if (!el.value || !isActive.value) return;

    if (!ticking) {
      requestAnimationFrame(() => {
        const element = el.value;
        if (!element) {
          ticking = false;
          return;
        }

        const section = element.closest("section");
        if (!section) {
          ticking = false;
          return;
        }

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
        if (config.direction === "up") {
          translateY = -translateY;
        }

        element.style.transform = `translateY(${translateY}px)`;
        ticking = false;
      });
      ticking = true;
    }
  };

  // Функция для очистки параллакса
  const cleanup = () => {
    if (import.meta.client && isActive.value) {
      // Убираем { passive: true } для совместимости с TypeScript
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      // Сбрасываем трансформацию
      if (el.value) {
        el.value.style.transform = "";
      }

      isActive.value = false;
    }
  };

  // Инициализация
  onMounted(() => {
    if (import.meta.client) {
      const isMobileDevice = window.innerWidth <= config.mobileBreakpoint;

      // ИСПРАВЛЕННАЯ ЛОГИКА: Если мобильное устройство и параллакс отключен для мобильных - НЕ активируем
      if (isMobileDevice && config.mobileDisabled) {
        console.log("Parallax disabled on mobile device");
        return;
      }

      console.log("Parallax enabled for desktop/tablet");
      isActive.value = true;

      // Добавляем обработчики событий (убираем passive для совместимости)
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      // Начальные настройки с задержкой
      setTimeout(handleScroll, 100);
    }
  });

  // Очистка при размонтировании
  onUnmounted(() => {
    cleanup();
  });

  return {
    el,
    isActive: readonly(isActive),
    cleanup, // Экспортируем для ручной очистки при необходимости
  };
}
