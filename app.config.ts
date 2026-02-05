export default defineAppConfig({
  motion: {
    // Глобальные настройки для всех анимаций
    directives: {
      // Предустановка по умолчанию
      default: {
        initial: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
          },
        },
      },
    },
  },
});
