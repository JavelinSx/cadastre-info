<template>
  <div class="py-16 text-gray-800">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Hero секция -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 class="text-4xl font-bold mb-4 text-gray-900">Межевание земельных участков в Плесецке</h1>
        <p class="text-xl text-gray-600 mb-6">
          Профессиональное межевание участков в Плесецком районе Архангельской области.
          Опыт работы более 15 лет. Полное юридическое сопровождение.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-6">
          <div class="flex items-center">
            <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-green-600 mr-3" />
            <div>
              <div class="font-semibold">Работаем с 2009 года</div>
              <div class="text-sm text-gray-500">Более 15 лет опыта</div>
            </div>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-document-check" class="w-8 h-8 text-green-600 mr-3" />
            <div>
              <div class="font-semibold">Гарантия качества</div>
              <div class="text-sm text-gray-500">Регистрация в ЕГРН</div>
            </div>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-currency-ruble" class="w-8 h-8 text-green-600 mr-3" />
            <div>
              <div class="font-semibold">От 15 000 ₽</div>
              <div class="text-sm text-gray-500">Прозрачное ценообразование</div>
            </div>
          </div>
        </div>

        <div class="flex gap-4">
          <UButton to="/request" color="primary" size="lg">Заказать межевание</UButton>
          <UButton to="/contacts" variant="outline" size="lg">Позвонить нам</UButton>
        </div>
      </div>

      <!-- Что такое межевание -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Что такое межевание участка?</h2>
          <p class="text-gray-600 mb-4">
            Межевание — это комплекс кадастровых работ по установлению, восстановлению и закреплению границ
            земельного участка на местности с определением их координат.
          </p>
          <p class="text-gray-600 mb-4">
            После межевания вы получаете межевой план — документ, который необходим для регистрации права
            собственности, продажи, дарения или раздела земельного участка.
          </p>
          <h3 class="font-semibold mb-2">Когда необходимо межевание:</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>При покупке или продаже участка</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>При оформлении права собственности</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>При споре с соседями о границах</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>При разделе или объединении участков</span>
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Этапы межевания</h2>
          <div class="space-y-4">
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span class="font-bold text-green-700">1</span>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Заявка и консультация</h3>
                <p class="text-sm text-gray-600">Обсуждение деталей, сроков и стоимости</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span class="font-bold text-green-700">2</span>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Подготовка документов</h3>
                <p class="text-sm text-gray-600">Сбор правоустанавливающих документов</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span class="font-bold text-green-700">3</span>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Выезд на участок</h3>
                <p class="text-sm text-gray-600">Геодезические измерения, установка межевых знаков</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span class="font-bold text-green-700">4</span>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Согласование границ</h3>
                <p class="text-sm text-gray-600">С соседями и заинтересованными лицами</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span class="font-bold text-green-700">5</span>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Подготовка межевого плана</h3>
                <p class="text-sm text-gray-600">Оформление технической документации</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span class="font-bold text-green-700">6</span>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Регистрация в Росреестре</h3>
                <p class="text-sm text-gray-600">Постановка на кадастровый учет</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Цены -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6">Стоимость межевания в Плесецке</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="font-semibold text-lg mb-2">Участок до 15 соток</h3>
            <div class="text-3xl font-bold text-green-600 mb-4">15 000 ₽</div>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Выезд на участок</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Геодезические измерения</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Межевой план</span>
              </li>
            </ul>
          </div>
          <div class="border-2 border-green-500 rounded-lg p-6 relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              Популярный
            </div>
            <h3 class="font-semibold text-lg mb-2">Участок 15-50 соток</h3>
            <div class="text-3xl font-bold text-green-600 mb-4">20 000 ₽</div>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Все из базового пакета</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Согласование с соседями</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Подача в Росреестр</span>
              </li>
            </ul>
          </div>
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="font-semibold text-lg mb-2">Участок от 50 соток</h3>
            <div class="text-3xl font-bold text-green-600 mb-4">от 25 000 ₽</div>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Все из расширенного</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Сложные границы</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                <span>Юридическое сопровождение</span>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">* Точная стоимость рассчитывается индивидуально после осмотра участка</p>
      </div>

      <!-- Почему мы -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6">Почему выбирают нас для межевания в Плесецке</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start">
            <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-semibold mb-2">Аттестованный кадастровый инженер</h3>
              <p class="text-gray-600 text-sm">Член СРО, квалификационный аттестат, допуск ко всем видам кадастровых работ</p>
            </div>
          </div>
          <div class="flex items-start">
            <UIcon name="i-heroicons-clock" class="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-semibold mb-2">Быстрые сроки</h3>
              <p class="text-gray-600 text-sm">Межевание участка за 7-14 рабочих дней. Выезд на участок в течение 2 дней</p>
            </div>
          </div>
          <div class="flex items-start">
            <UIcon name="i-heroicons-map" class="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-semibold mb-2">Знаем местность</h3>
              <p class="text-gray-600 text-sm">Работаем в Плесецком районе более 15 лет, знаем все особенности региона</p>
            </div>
          </div>
          <div class="flex items-start">
            <UIcon name="i-heroicons-document-text" class="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-semibold mb-2">Полное сопровождение</h3>
              <p class="text-gray-600 text-sm">Помогаем с документами, подаем в Росреестр, отслеживаем регистрацию</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Нужно межевание участка в Плесецке?</h2>
        <p class="text-lg text-gray-700 mb-6">Оставьте заявку, и мы свяжемся с вами в течение часа</p>
        <UButton to="/request" color="primary" size="xl">Заказать межевание</UButton>
        <p class="text-sm text-gray-600 mt-4">Или позвоните нам: <a href="tel:+79095522052" class="font-semibold text-green-600">+7 (909) 552-20-52</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Межевание земельного участка в Плесецке | Кадастровый инженер ПлесКад',
  description: 'Межевание участков в Плесецком районе. Опыт 15+ лет. Цены от 15000₽. Выезд в течение 2 дней. Полное юридическое сопровождение. Аттестованный кадастровый инженер.',
  ogTitle: 'Межевание земельного участка в Плесецке - от 15000₽',
  ogDescription: 'Профессиональное межевание участков в Плесецком районе. Быстро, качественно, с гарантией. Звоните!',
  ogUrl: 'https://pleskad.ru/mezhevanie-plesetsk'
})

const { addSchema, createServiceSchema, createLocalBusinessSchema, createBreadcrumbSchema } = useSchemaOrg()

addSchema([
  createServiceSchema({
    name: 'Межевание земельного участка в Плесецке',
    description: 'Профессиональное межевание земельных участков в Плесецком районе Архангельской области. Установление границ, оформление межевого плана, регистрация в ЕГРН.',
    price: 15000,
    url: 'https://pleskad.ru/mezhevanie-plesetsk'
  }),
  createLocalBusinessSchema(),
  createBreadcrumbSchema([
    { name: 'Главная', url: 'https://pleskad.ru' },
    { name: 'Межевание в Плесецке', url: 'https://pleskad.ru/mezhevanie-plesetsk' }
  ])
])
</script>
