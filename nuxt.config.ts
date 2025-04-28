// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-nocheck
export default defineNuxtConfig({
  devtools: { enabled: false },
  // Переключаем на клиентский рендеринг (SPA режим)
  ssr: false,
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
  },

  runtimeConfig: {
    // Приватные ключи доступны только на сервере
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,

    // Публичные ключи, доступные также на клиенте
    public: {
      siteUrl: process.env.SITE_URL || 'https://cadastre-info.ru',
    },
  },

  app: {
    pageTransition: {
      name: 'fade', // Имя класса для CSS transition
      mode: 'out-in', // Режим перехода ('out-in', 'in-out', default: simultaneous)
      duration: 300, // Продолжительность перехода (по умолчанию)
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Кадастровые услуги - информационный портал',
      meta: [
        {
          name: 'description',
          content:
            'Информационный портал о кадастровой деятельности. Полезная правовая и юридическая информация о кадастровых услугах.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    // Базовый путь установлен в корень для Vercel
    baseURL: '/',
  },

  // Для Vercel не нужен специальный пресет, используем default
  nitro: {
    preset: 'vercel',
  },

  // Не требуются специальные правила маршрутов для Vercel
  routeRules: {
    // При необходимости можно добавить правила кэширования
  },

  // Оптимизация для лучшей производительности
  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: '2025-04-06',
});
