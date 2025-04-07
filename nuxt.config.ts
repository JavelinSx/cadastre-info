// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-nocheck
export default defineNuxtConfig({
  devtools: { enabled: false },
  // Явно указываем режим приложения - SPA (Single Page Application)
  ssr: false,
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
  },

  // Настройки UI будут определены автоматически модулем @nuxt/ui

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
    // Правильный базовый путь
    // В режиме разработки используем пустой baseURL, для продакшена - /cadastre-info/
    baseURL: '/',

    // Важно: задаем директорию для сборки ассетов без префикса baseURL
    buildAssetsDir: '/_nuxt/',
  },

  nitro: {
    preset: 'github-pages',
    // Обновлено: явный путь для ассетов
    output: {
      publicDir: '.output/public',
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/services', '/information', '/blog', '/about', '/contacts', '/request'],
      ignore: [
        // Ignore routes that contain a wildcard
        /__nuxt/,
      ],
    },
  },

  // Важные настройки для сборки на GitHub Pages
  routeRules: {
    '/**': { prerender: true },
  },

  // Отключаем генерацию страниц на сервере
  generate: {
    routes: ['/'],
  },

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
  },

  compatibilityDate: '2025-04-06',
});
