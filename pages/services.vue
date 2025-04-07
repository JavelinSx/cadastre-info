<template>
  <div class="py-12 pl-4 pr-4 bg-gray-50 min-h-screen text-gray-800">
    <div class="container-custom">
      <!-- Заголовок страницы с анимацией -->
      <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">Наши услуги</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Предоставляем полный спектр услуг в сфере кадастровой деятельности и оформления недвижимости
        </p>
      </div>

      <!-- Категории услуг -->
      <div class="mb-12">
        <p class="w-full text-center p-4 font-bold">Фильтр по услугам</p>
        <div class="flex justify-center flex-wrap gap-3 mb-8" v-motion :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 600, delay: 300 } }">
          <UButton v-for="(category, index) in categories" :key="category.id"
            :variant="activeCategory === category.id ? 'solid' : 'outline'"
            :color="activeCategory === category.id ? 'primary' : 'gray'" @click="setActiveCategory(category.id)"
            class="transition-all duration-300 hover:shadow-md" :style="`animation-delay: ${index * 100}ms`">
            <UIcon :name="category.icon" class="mr-2 w-5 h-5" />
            {{ category.name }}
          </UButton>
        </div>
      </div>

      <!-- Основной контент услуг с карточками -->
      <div>
        <transition-group name="services-fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in filteredServices" :key="service.id"
            class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary-200"
            v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 + service.id * 100 } }">

            <!-- Изображение услуги -->
            <div class="h-48 overflow-hidden bg-gray-100 relative">
              <div class="w-full h-full bg-primary-50 flex items-center justify-center">
                <UIcon :name="service.icon" class="w-16 h-16 text-primary-300" />
              </div>
              <!-- Наложение при наведении -->
              <div
                class="absolute inset-0 bg-primary-500 bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:bg-opacity-20 hover:opacity-100">
                <UButton to="request" color="white" variant="solid"
                  class="shadow-lg transform scale-90 hover:scale-100 transition-transform duration-300">
                  Заказать услугу
                </UButton>
              </div>
            </div>

            <!-- Информация об услуге -->
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>

              <!-- Преимущества услуги -->
              <div class="space-y-2 mb-6">
                <div v-for="(feature, idx) in service.features" :key="idx" class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </div>
              </div>

              <!-- Стоимость услуги -->
              <div class="flex justify-between items-center mt-4">
                <div>
                  <div class="text-gray-500 text-sm">Стоимость от:</div>
                  <div class="text-primary-600 font-bold text-xl">{{ service.price }} ₽</div>
                </div>
                <div>
                  <NuxtLink :to="service.link"
                    class="inline-flex items-center text-primary-600 hover:text-primary-800 group">
                    <span class="mr-1 transition-all duration-300 group-hover:mr-2">Подробнее</span>
                    <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>

      <!-- Секция преимуществ работы с нами -->
      <div class="mt-16 bg-white rounded-lg shadow-sm p-8 border border-gray-100" v-motion
        :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Преимущества работы с нами</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(advantage, index) in advantages" :key="index" class="text-center">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <UIcon :name="advantage.icon" class="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ advantage.title }}</h3>
            <p class="text-gray-600 text-sm">{{ advantage.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA блок -->
      <div class="mt-12 bg-primary-600 rounded-lg shadow-md p-8 text-white text-center" v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 700 } }">
        <h2 class="text-2xl font-bold mb-3">Готовы начать?</h2>
        <p class="text-lg mb-6 max-w-2xl mx-auto">Оставьте заявку прямо сейчас и получите бесплатную консультацию по
          всем интересующим вопросам</p>
        <UButton to="/request" size="xl" color="white"
          class="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Оформить заявку
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right" />
          </template>
        </UButton>
      </div>

      <!-- Часто задаваемые вопросы -->
      <div class="mt-16" v-motion :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 600, delay: 800 } }">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Часто задаваемые вопросы</h2>

        <div class="max-w-3xl mx-auto">
          <UAccordion :items="faqItems" :ui="{
            wrapper: 'space-y-4',
            item: {
              base: 'bg-white rounded-lg border border-gray-200 overflow-hidden',
              content: 'p-4 bg-gray-50',
              trigger: {
                base: 'w-full flex text-left items-center justify-between p-4 text-gray-700 font-medium',
                active: 'text-primary-600',
                inactive: 'hover:text-gray-900 hover:bg-gray-50'
              }
            }
          }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  title: 'Услуги - КадастроИнфо',
  description: 'Полный спектр кадастровых услуг для физических и юридических лиц'
});

// Категории услуг
const categories = [
  { id: 'all', name: 'Все услуги', icon: 'i-heroicons-squares-2x2' },
  { id: 'land', name: 'Земельные участки', icon: 'i-heroicons-map' },
  { id: 'buildings', name: 'Здания и сооружения', icon: 'i-heroicons-home-modern' },
  { id: 'rights', name: 'Оформление прав', icon: 'i-heroicons-document-text' },
  { id: 'corrections', name: 'Исправление ошибок', icon: 'i-heroicons-pencil-square' }
];

const activeCategory = ref('all');

const setActiveCategory = (categoryId: string) => {
  activeCategory.value = categoryId;
};

// Список услуг
const services = [
  {
    id: 1,
    title: 'Межевание земельных участков',
    description: 'Точное определение границ участка с закреплением на местности и юридическое оформление документации',
    icon: 'i-heroicons-map',
    price: '8 000',
    category: 'land',
    link: '/services/land-survey',
    features: [
      'Полный комплект документов',
      'Выезд на объект',
      'Инженерно-геодезические работы',
      'Оформление в Росреестре'
    ]
  },
  {
    id: 2,
    title: 'Технические планы',
    description: 'Подготовка технических планов зданий, сооружений, помещений, объектов незавершенного строительства',
    icon: 'i-heroicons-home-modern',
    price: '10 000',
    category: 'buildings',
    link: '/services/technical-plans',
    features: [
      'Обмерные работы',
      'Определение характеристик',
      'Подготовка документации',
      'Сопровождение в Росреестре'
    ]
  },
  {
    id: 3,
    title: 'Постановка на кадастровый учет',
    description: 'Полное сопровождение процедуры постановки объектов недвижимости на государственный кадастровый учет',
    icon: 'i-heroicons-document-check',
    price: '5 000',
    category: 'rights',
    link: '/services/cadastral-register',
    features: [
      'Подготовка заявления',
      'Сбор необходимых документов',
      'Сопровождение процедуры',
      'Получение выписки из ЕГРН'
    ]
  },
  {
    id: 4,
    title: 'Оформление прав собственности',
    description: 'Помощь в регистрации прав собственности на объекты недвижимости в Росреестре',
    icon: 'i-heroicons-document-text',
    price: '6 000',
    category: 'rights',
    link: '/services/property-rights',
    features: [
      'Проверка документов',
      'Подготовка договоров',
      'Составление заявлений',
      'Регистрация права в Росреестре'
    ]
  },
  {
    id: 5,
    title: 'Исправление кадастровых ошибок',
    description: 'Выявление и исправление ошибок в сведениях государственного кадастра недвижимости',
    icon: 'i-heroicons-pencil-square',
    price: '7 500',
    category: 'corrections',
    link: '/services/error-correction',
    features: [
      'Правовой анализ ситуации',
      'Подготовка необходимых документов',
      'Внесение изменений в ЕГРН',
      'Получение актуальной выписки'
    ]
  },
  {
    id: 6,
    title: 'Кадастровые выписки и справки',
    description: 'Получение актуальных сведений из Единого государственного реестра недвижимости (ЕГРН)',
    icon: 'i-heroicons-document-magnifying-glass',
    price: '2 500',
    category: 'rights',
    link: '/services/cadastral-excerpts',
    features: [
      'Быстрое получение',
      'Официальные выписки',
      'Электронный формат',
      'Помощь в расшифровке'
    ]
  }
];

// Отфильтрованные услуги по активной категории
const filteredServices = computed(() => {
  if (activeCategory.value === 'all') {
    return services;
  }
  return services.filter(service => service.category === activeCategory.value);
});

// Преимущества работы с нами
const advantages = [
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Экспертность',
    description: 'Наши специалисты имеют многолетний опыт работы и профессиональное образование'
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Оперативность',
    description: 'Выполняем работы в кратчайшие сроки без потери качества'
  },
  {
    icon: 'i-heroicons-currency-dollar',
    title: 'Прозрачная цена',
    description: 'Фиксированные тарифы и никаких скрытых платежей'
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Гарантия качества',
    description: 'Бесплатно исправим ошибки, если они будут допущены'
  }
];

// Часто задаваемые вопросы
const faqItems = [
  {
    label: 'Сколько времени занимает межевание земельного участка?',
    content: 'Стандартный срок выполнения работ по межеванию земельного участка составляет от 10 до 30 дней. Конкретные сроки зависят от сложности объекта, наличия необходимых документов и загруженности Росреестра.'
  },
  {
    label: 'Какие документы нужны для оформления технического плана?',
    content: 'Для оформления технического плана потребуются: правоустанавливающие документы на объект, разрешение на строительство (для новых объектов), проектная документация (при наличии), паспорт заказчика. Полный перечень документов уточняется индивидуально в зависимости от типа объекта.'
  },
  {
    label: 'Можно ли оформить земельный участок в собственность без межевания?',
    content: 'С 1 января 2022 года проведение межевания является обязательным условием для регистрации права собственности на земельный участок. Без установления точных границ участка в ЕГРН невозможно совершать юридически значимые действия с земельным участком.'
  },
  {
    label: 'Что делать, если обнаружена кадастровая ошибка?',
    content: 'При обнаружении кадастровой ошибки необходимо обратиться к кадастровому инженеру для подготовки документов для исправления. Затем подать заявление в Росреестр с приложением подготовленных документов. Срок исправления ошибки составляет от 5 до 15 рабочих дней.'
  },
  {
    label: 'Нужно ли моё присутствие при проведении кадастровых работ?',
    content: 'Ваше присутствие не обязательно, если вы оформите доверенность на нашего специалиста. Однако для согласования границ земельного участка с соседями может потребоваться ваше участие или подписание акта согласования границ.'
  }
];
</script>

<style scoped>
.services-fade-enter-active,
.services-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.services-fade-enter-from,
.services-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>