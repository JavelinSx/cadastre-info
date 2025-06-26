// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  typescript: {
    strict: true,
  },

  runtimeConfig: {
    // Приватные ключи доступны только на сервере
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,

    // Публичные ключи, доступные также на клиенте
    public: {
      siteUrl: process.env.SITE_URL || "https://pleskad.ru",
    },
  },

  // SEO конфигурация
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "Кадастровые услуги в Плесецком районе | ПлесКад - Кадастровый инженер",
      meta: [
        {
          name: "description",
          content:
            "Профессиональные кадастровые услуги в Плесецком районе Архангельской области. Межевание земельных участков, технические планы, постановка на кадастровый учет. Более 15 лет опыта.",
        },
        {
          name: "keywords",
          content:
            "кадастровый инженер Плесецк, межевание Плесецкий район, технический план Плесецк, кадастровые работы Архангельская область, земельные участки Плесецк",
        },
        { name: "author", content: "ПлесКад" },
        { name: "robots", content: "index, follow" },
        {
          name: "googlebot",
          content:
            "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        { name: "yandex-verification", content: "79e510bcd9f2ac5d" },
        // Open Graph
        {
          property: "og:title",
          content: "Кадастровые услуги в Плесецком районе | ПлесКад",
        },
        {
          property: "og:description",
          content:
            "Профессиональные кадастровые услуги в Плесецком районе. Межевание, технические планы, кадастровый учет. Опыт более 15 лет.",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:site_name", content: "ПлесКад" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Кадастровые услуги в Плесецком районе | ПлесКад",
        },
        {
          name: "twitter:description",
          content:
            "Профессиональные кадастровые услуги в Плесецком районе. Межевание, технические планы, кадастровый учет.",
        },

        // Дополнительные SEO мета-теги
        { name: "geo.region", content: "RU-ARK" },
        { name: "geo.placename", content: "Плесецк, Архангельская область" },
        { name: "ICBM", content: "62.7144, 40.2819" },

        { name: "theme-color", content: "#22c55e" },
        { name: "msapplication-TileColor", content: "#22c55e" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
      ],
      link: [
        // Основная иконка
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // SVG иконка (современные браузеры)
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },

        // PNG иконка для старых браузеров
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },

        // Apple Touch Icon
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },

        // Web App Manifest
        { rel: "manifest", href: "/site.webmanifest" },

        // Canonical URL
        { rel: "canonical", href: "https://pleskad.ru" },
      ],
    },

    // Базовый путь установлен в корень
    baseURL: "/",
  },
  image: {
    provider: "none",
  },
  // Оптимизация производительности
  nitro: {
    preset: "static",
    compressPublicAssets: true,
    minify: true,
  },

  // SPA режим (SSR отключен)
  ssr: false,

  // Экспериментальные функции для оптимизации
  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: "2025-06-14",
});
