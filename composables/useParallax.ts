// composables/useParallax.ts
import type { DirectiveBinding, ObjectDirective } from 'vue';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  mobileDisabled?: boolean;
}

export function useParallax() {
  const vParallax: ObjectDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding<ParallaxOptions>) {
      const options = binding.value || {};
      const speed = options.speed || 0.5;
      const direction = options.direction || 'down';
      const mobileDisabled = options.mobileDisabled || false;

      // Проверяем, мобильное ли устройство
      const isMobileDevice = window.innerWidth < 768;

      // Если это мобильное устройство и параллакс отключен для мобильных, не добавляем обработчик
      if (isMobileDevice && mobileDisabled) return;

      // Функция обработки скролла
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const rect = el.closest('section')?.getBoundingClientRect();

        if (!rect) return;

        const offsetTop = rect.top;
        const sectionHeight = rect.height;

        // Вычисляем смещение
        let translateY = 0;

        if (offsetTop <= 0) {
          // Секция уже прокручена
          translateY = Math.abs(offsetTop) * speed;
        }

        // Ограничиваем максимальное смещение
        const maxTranslate = sectionHeight * 0.4;
        translateY = Math.min(translateY, maxTranslate);

        // Применяем направление
        if (direction === 'up') {
          translateY = -translateY;
        }

        el.style.transform = `translateY(${translateY}px)`;
      };

      // Инициализация
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      // Сохраняем обработчики для удаления
      el._parallaxScrollHandler = handleScroll;
    },

    unmounted(el: HTMLElement) {
      // Удаляем обработчики при размонтировании компонента
      if (el._parallaxScrollHandler) {
        window.removeEventListener('scroll', el._parallaxScrollHandler);
        window.removeEventListener('resize', el._parallaxScrollHandler);
      }
    },
  };

  return { vParallax };
}
