// plugins/vanta.client.ts
export default defineNuxtPlugin(async (nuxtApp) => {
  // Загружаем Three.js только один раз на уровне приложения
  if (import.meta.client && !window.THREE) {
    await new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  }

  // Загружаем Vanta.js только один раз на уровне приложения
  if (import.meta.client && !window.VANTA) {
    await new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  }

  // Предоставляем функцию для компонентов
  return {
    provide: {
      createVantaEffect: (element, options = {}) => {
        if (!window.VANTA || !window.THREE) {
          console.error('Vanta or Three.js not loaded');
          return null;
        }

        const defaultOptions = {
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500,
          minWidth: 500,
          scale: 1.0,
          scaleMobile: 0.5,
          color: 0x00c950,
          backgroundColor: 0x1e2939,
          points: 20,
          maxDistance: 20,
          spacing: 20,
        };

        return window.VANTA.NET({
          el: element,
          ...defaultOptions,
          ...options,
        });
      },
    },
  };
});
