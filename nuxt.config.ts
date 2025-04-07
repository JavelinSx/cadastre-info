// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-nocheck
export default defineNuxtConfig({
  devtools: { enabled: false },
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
    // Исправлено: используем как base, а не baseURL, и добавляем trailing slash
    base: '/cadastre-info/',
  },

  nitro: {
    preset: 'github-pages',
    // Добавление публичного пути для корректной генерации ссылок в сборке
    routeRules: {
      '/**': { prerender: true },
    },
    // При генерации необходимо учитывать базовый путь
    publicAssets: [
      {
        baseURL: 'cadastre-info',
        dir: 'public',
        maxAge: 60 * 60 * 24 * 365, // 1 год
      },
    ],
    prerender: {
      crawlLinks: true,
      routes: [
        '/', // Обязательно указываем главную страницу
        '/services',
        '/information',
        '/blog',
        '/about',
        '/contacts',
        '/request',
        // Добавьте другие маршруты, которые должны быть предварительно отрендерены
      ],
    },
  },

  // Исправлено: добавляем вспомогательный конфиг для GitHub Pages
  experimental: {
    payloadExtraction: false, // Важно для деплоя на GitHub Pages
    inlineSSRStyles: false,
  },

  // Исправлено: явное указание путей для маршрутизации на GitHub Pages
  router: {
    options: {
      strict: false,
    },
  },

  // Важно для правильной генерации ссылок в production сборке
  vite: {
    resolve: {
      alias: {
        // Помогает решить проблемы с путями при сборке
        vue: 'vue/dist/vue.esm-bundler',
      },
    },
  },

  compatibilityDate: '2025-04-06',
});
