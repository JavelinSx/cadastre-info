<template>
  <div class="py-16 text-gray-800">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Hero -->
      <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-lg p-8 md:p-12 mb-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-4xl font-bold mb-4 text-gray-900">Кадастровый инженер в Плесецке</h1>
            <p class="text-xl text-gray-700 mb-6">
              Профессиональные кадастровые услуги в Плесецком районе. Опыт работы более 15 лет.
              Член СРО, квалификационный аттестат.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <UButton to="/request" color="primary" size="lg">Заказать услугу</UButton>
              <UButton href="tel:+79095522052" variant="outline" size="lg">
                <UIcon name="i-heroicons-phone" class="mr-2" />
                +7 (909) 552-20-52
              </UButton>
            </div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="font-semibold text-lg mb-4">Наши преимущества:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span>Работаем в Плесецком районе с 2009 года</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span>Аттестованный кадастровый инженер</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span>Выезд на участок в течение 2 дней</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span>Полное юридическое сопровождение</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Услуги -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 text-center">Кадастровые услуги в Плесецке</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <NuxtLink to="/services/land-survey/land-boundary" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-map" class="w-12 h-12 text-green-600 mb-4" />
            <h3 class="font-semibold text-lg mb-2">Межевание участков</h3>
            <p class="text-gray-600 text-sm mb-3">Установление и уточнение границ земельного участка, межевой план</p>
            <div class="text-green-600 font-semibold">От 15 000 ₽</div>
          </NuxtLink>

          <NuxtLink to="/services/technical-plans/house" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-home" class="w-12 h-12 text-green-600 mb-4" />
            <h3 class="font-semibold text-lg mb-2">Технический план дома</h3>
            <p class="text-gray-600 text-sm mb-3">Подготовка технического плана для регистрации права собственности</p>
            <div class="text-green-600 font-semibold">От 12 000 ₽</div>
          </NuxtLink>

          <NuxtLink to="/services/land-survey/land-division" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-scissors" class="w-12 h-12 text-green-600 mb-4" />
            <h3 class="font-semibold text-lg mb-2">Раздел участка</h3>
            <p class="text-gray-600 text-sm mb-3">Деление земельного участка на несколько самостоятельных участков</p>
            <div class="text-green-600 font-semibold">От 18 000 ₽</div>
          </NuxtLink>

          <NuxtLink to="/services/technical-plans/building" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-building-office-2" class="w-12 h-12 text-green-600 mb-4" />
            <h3 class="font-semibold text-lg mb-2">Технический план здания</h3>
            <p class="text-gray-600 text-sm mb-3">Оформление нежилых зданий и сооружений для кадастрового учета</p>
            <div class="text-green-600 font-semibold">От 15 000 ₽</div>
          </NuxtLink>

          <NuxtLink to="/services/land-survey/land-union" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-arrows-pointing-in" class="w-12 h-12 text-green-600 mb-4" />
            <h3 class="font-semibold text-lg mb-2">Объединение участков</h3>
            <p class="text-gray-600 text-sm mb-3">Слияние нескольких смежных участков в один</p>
            <div class="text-green-600 font-semibold">От 17 000 ₽</div>
          </NuxtLink>

          <NuxtLink to="/services/consultations" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="w-12 h-12 text-green-600 mb-4" />
            <h3 class="font-semibold text-lg mb-2">Консультации</h3>
            <p class="text-gray-600 text-sm mb-3">Профессиональная консультация по кадастровым вопросам</p>
            <div class="text-green-600 font-semibold">Бесплатно</div>
          </NuxtLink>
        </div>
        <div class="text-center mt-6">
          <UButton to="/services" variant="outline" size="lg">Смотреть все услуги</UButton>
        </div>
      </div>

      <!-- О кадастровом инженере -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Что делает кадастровый инженер?</h2>
          <p class="text-gray-600 mb-4">
            Кадастровый инженер — это специалист, имеющий квалификационный аттестат и право выполнять
            кадастровые работы по установлению границ земельных участков и подготовке технической документации.
          </p>
          <h3 class="font-semibold mb-3">Основные задачи:</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Проведение геодезических измерений на местности</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Определение координат границ земельных участков</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Подготовка межевых планов и технических планов</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Согласование границ с соседями</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Подготовка документов для Росреестра</span>
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Когда нужен кадастровый инженер?</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold mb-1">При покупке/продаже участка</h3>
              <p class="text-sm text-gray-600">Для подтверждения границ и площади земельного участка</p>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold mb-1">При строительстве дома</h3>
              <p class="text-sm text-gray-600">Для подготовки технического плана и постановки на кадастровый учет</p>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold mb-1">При спорах с соседями</h3>
              <p class="text-sm text-gray-600">Для установления точных границ и разрешения конфликтов</p>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold mb-1">При разделе наследства</h3>
              <p class="text-sm text-gray-600">Для раздела участка между наследниками</p>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold mb-1">При оформлении права собственности</h3>
              <p class="text-sm text-gray-600">Для регистрации права собственности в ЕГРН</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Территория работы -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6">Работаем по всему Плесецкому району</h2>
        <p class="text-gray-600 mb-4">
          Выполняем кадастровые работы в рабочем посёлке Плесецк и всех населенных пунктах Плесецкого района Архангельской области:
        </p>
        <div class="grid md:grid-cols-4 gap-3 text-sm">
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>п. Плесецк</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>п. Савинский</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>с. Конево</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>д. Ярнема</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>д. Кириково</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>д. Емца</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>с. Оксовское</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-green-600 mr-2" />
            <span>И другие населенные пункты</span>
          </div>
        </div>
        <p class="text-gray-600 mt-4">
          Выезд кадастрового инженера на участок осуществляется в течение 1-2 рабочих дней после заявки.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8 md:p-12 text-center">
        <h2 class="text-3xl font-bold mb-4">Нужны кадастровые услуги в Плесецке?</h2>
        <p class="text-xl mb-6 opacity-90">Звоните или оставляйте заявку — ответим на все вопросы</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/request" color="white" size="xl">Оставить заявку</UButton>
          <UButton href="tel:+79095522052" variant="outline" class="!text-white !border-white" size="xl">
            Позвонить сейчас
          </UButton>
        </div>
        <p class="mt-6 opacity-75">Работаем с понедельника по пятницу с 9:00 до 18:00</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Кадастровый инженер в Плесецке | Опыт 15+ лет | ПлесКад',
  description: 'Профессиональный кадастровый инженер в Плесецком районе. Межевание, технические планы, постановка на учет. Аттестат, член СРО. Выезд за 2 дня. ☎ +7 (909) 552-20-52',
  ogTitle: 'Кадастровый инженер в Плесецке - ПлесКад',
  ogDescription: 'Все виды кадастровых работ в Плесецком районе. Опыт 15+ лет. Аттестованный специалист.',
  ogUrl: 'https://pleskad.ru/kadastrovyi-inzhener-plesetsk'
})

const { addSchema, createLocalBusinessSchema, createOrganizationSchema, createBreadcrumbSchema } = useSchemaOrg()

addSchema([
  createOrganizationSchema(),
  createLocalBusinessSchema(),
  createBreadcrumbSchema([
    { name: 'Главная', url: 'https://pleskad.ru' },
    { name: 'Кадастровый инженер в Плесецке', url: 'https://pleskad.ru/kadastrovyi-inzhener-plesetsk' }
  ])
])
</script>
