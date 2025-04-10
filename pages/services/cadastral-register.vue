<template>
  <div class="py-16 bg-gray-50 text-gray-800">
    <div class="container-custom">
      <!-- Заголовок страницы -->
      <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ serviceData.title }}</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ serviceData.description }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Основная информация -->
        <div class="md:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ serviceData.mainInfo.title }}</h2>

            <div v-for="(paragraph, index) in serviceData.mainInfo.paragraphs" :key="index" class="text-gray-600 mb-4">
              <p>{{ paragraph }}</p>
            </div>

            <div v-if="serviceData.mainInfo.image" class="mt-6 mb-6">
              <img :src="serviceData.mainInfo.image.src" :alt="serviceData.mainInfo.image.alt"
                class="rounded-lg w-full h-64 object-cover shadow-md" />
            </div>

            <template v-for="(section, sectionIndex) in serviceData.mainInfo.sections" :key="sectionIndex">
              <h3 class="text-xl font-semibold mb-3 text-gray-800 mt-8">{{ section.title }}</h3>

              <ul v-if="section.type === 'list'" class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
              </ul>

              <ol v-if="section.type === 'numbered'" class="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                  <span v-if="typeof item === 'object' && item.title" class="font-medium">{{ item.title }}</span>
                  <span v-if="typeof item === 'object' && item.title && item.description"> — </span>
                  <span v-if="typeof item === 'object' && item.description">{{ item.description }}</span>
                  <span v-if="typeof item !== 'object'">{{ item }}</span>
                </li>
              </ol>
            </template>
          </div>

          <!-- Дополнительная информация и FAQ -->
          <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ serviceData.faq.title }}</h2>

            <div class="space-y-6">
              <div v-for="(question, qIndex) in serviceData.faq.questions" :key="qIndex">
                <h4 class="text-lg font-medium mb-2 text-gray-800">{{ question.question }}</h4>
                <p class="text-gray-600">
                  {{ question.answer }}
                </p>
                <ul v-if="question.list" class="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li v-for="(item, itemIndex) in question.list" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Боковая панель -->
        <div class="md:col-span-1">
          <div class="md:sticky top-24" style="position: -webkit-sticky;">
            <!-- Форма заявки -->
            <div class="bg-white rounded-lg md:shadow-md p-6 mb-8 border border-green-500 md:border-none">
              <h3 class="text-xl font-semibold mb-4 text-gray-800">Заказать услугу</h3>
              <p class="text-gray-600 mb-4">
                Оставьте заявку, и наш специалист свяжется с вами для консультации и расчета стоимости
              </p>

              <UButton to="/request" color="primary" variant="solid" block
                class="transform transition-all duration-300 hover:scale-105 hover:shadow-md mb-4">
                <UIcon name="i-heroicons-document-text" class="mr-2" />
                Оставить заявку
              </UButton>

              <p class="text-sm text-gray-500 text-center">
                Или позвоните нам по телефону
              </p>
              <p class="text-lg font-medium text-center text-primary-600">
                +7 (123) 456-78-90
              </p>
            </div>

            <!-- Виды услуг -->
            <div class="bg-white rounded-lg md:shadow-md p-6 mb-8 border border-green-500 md:border-none">
              <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ serviceData.sidebar.types.title }}</h3>

              <ul class="space-y-3">
                <li v-for="(type, typeIndex) in serviceData.sidebar.types.items" :key="typeIndex"
                  class="flex items-center p-3 rounded-md transition-all duration-300 hover:bg-gray-50">
                  <UIcon :name="type.icon" class="w-5 h-5 text-primary-600 mr-2" />
                  <span>{{ type.text }}</span>
                </li>
              </ul>
            </div>

            <!-- Результаты работы -->
            <div class="bg-white rounded-lg md:shadow-md p-6 border border-green-500 md:border-none">
              <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ serviceData.sidebar.results.title }}</h3>

              <ul class="space-y-3 text-gray-600">
                <li v-for="(item, itemIndex) in serviceData.sidebar.results.items" :key="itemIndex"
                  class="flex items-start p-2">
                  <UIcon name="i-heroicons-document-text" class="w-5 h-5 text-primary-600 mr-2 mt-1" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Блок с призывом к действию -->
      <div class="mt-12 bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100" v-motion
        :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ serviceData.cta.title }}</h2>
          <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            {{ serviceData.cta.description }}
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <UButton :to="serviceData.cta.buttons.primary.link" color="primary" variant="solid" size="xl"
              class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <UIcon name="i-heroicons-document-text" class="mr-2" />
              {{ serviceData.cta.buttons.primary.text }}
            </UButton>
            <UButton :to="serviceData.cta.buttons.secondary.link" color="gray" variant="outline" size="xl"
              class="transform transition-all duration-300 hover:scale-105">
              <UIcon name="i-heroicons-phone" class="mr-2" />
              {{ serviceData.cta.buttons.secondary.text }}
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Постановка на кадастровый учет - Услуги кадастрового инженера',
  description: 'Полное сопровождение процедуры постановки объектов недвижимости на государственный кадастровый учет. Оформление всех необходимых документов.'
});

// Динамические данные для страницы
const serviceData = {
  title: 'Постановка на кадастровый учет',
  description: 'Полное сопровождение процедуры постановки объектов недвижимости на государственный кадастровый учет',
  mainInfo: {
    title: 'Что такое постановка на кадастровый учет?',
    paragraphs: [
      'Постановка на кадастровый учет — это процедура внесения сведений об объекте недвижимости в Единый государственный реестр недвижимости (ЕГРН). После постановки на кадастровый учет объекту присваивается уникальный кадастровый номер, который сохраняется за ним на протяжении всего периода существования.',
      'Кадастровый учет является обязательным условием для регистрации права собственности и совершения любых сделок с недвижимостью. Без постановки на кадастровый учет вы не сможете продать, подарить, завещать или заложить вашу недвижимость.'
    ],
    image: {
      src: '/images/services/cadastral-register.jpg',
      alt: 'Постановка на кадастровый учет'
    },
    sections: [
      {
        title: 'Объекты, подлежащие кадастровому учету:',
        type: 'list',
        items: [
          'Земельные участки',
          'Здания (жилые и нежилые)',
          'Помещения (квартиры, комнаты)',
          'Машино-места',
          'Сооружения',
          'Объекты незавершенного строительства',
          'Единые недвижимые комплексы'
        ]
      },
      {
        title: 'Этапы постановки на кадастровый учет:',
        type: 'numbered',
        items: [
          {
            title: 'Подготовка необходимых документов',
            description: 'правоустанавливающие документы, заявление о постановке на кадастровый учет, межевой или технический план.'
          },
          {
            title: 'Подача документов в Росреестр',
            description: 'через МФЦ, напрямую в территориальное отделение Росреестра или через электронные сервисы.'
          },
          {
            title: 'Рассмотрение заявления',
            description: 'проверка документов сотрудниками Росреестра (срок — до 5-7 рабочих дней).'
          },
          {
            title: 'Внесение сведений в ЕГРН',
            description: 'присвоение кадастрового номера и внесение характеристик объекта в базу данных.'
          },
          {
            title: 'Получение выписки из ЕГРН',
            description: 'документ, подтверждающий постановку объекта на кадастровый учет.'
          }
        ]
      }
    ]
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    questions: [
      {
        question: 'Сколько стоит постановка на кадастровый учет?',
        answer: 'Государственная пошлина за постановку на кадастровый учет не взимается. Однако необходимо учитывать затраты на подготовку документов, таких как межевой или технический план. Стоимость этих работ зависит от типа объекта, его площади, сложности работ и других факторов. Для получения точной информации о стоимости, пожалуйста, оставьте заявку на нашем сайте или свяжитесь с нами по телефону.'
      },
      {
        question: 'Какие документы нужны для постановки на кадастровый учет?',
        answer: 'Для постановки на кадастровый учет требуются следующие документы:',
        list: [
          'Заявление о постановке на кадастровый учет',
          'Документ, удостоверяющий личность заявителя',
          'Межевой план (для земельных участков)',
          'Технический план (для зданий, сооружений, помещений)',
          'Правоустанавливающие документы на объект недвижимости',
          'Доверенность (если документы подает представитель)'
        ]
      },
      {
        question: 'Какие сроки постановки на кадастровый учет?',
        answer: 'Согласно действующему законодательству, сроки постановки на кадастровый учет составляют 5 рабочих дней при подаче документов в Росреестр и 7 рабочих дней при подаче через МФЦ. В случае одновременной подачи заявления на кадастровый учет и регистрацию прав срок увеличивается до 10 рабочих дней при подаче в Росреестр и до 12 рабочих дней при подаче через МФЦ.'
      },
      {
        question: 'Могут ли отказать в постановке на кадастровый учет?',
        answer: 'Да, в постановке на кадастровый учет может быть отказано по ряду причин:',
        list: [
          'Неполный комплект документов',
          'Наличие ошибок в межевом или техническом плане',
          'Наложение границ земельного участка на соседние участки',
          'Несоответствие характеристик объекта требованиям законодательства',
          'Отсутствие прав у заявителя на подачу документов'
        ]
      },
      {
        question: 'Нужно ли присутствие собственника при постановке на кадастровый учет?',
        answer: 'Личное присутствие собственника не обязательно. Вы можете оформить нотариальную доверенность на представителя, который подаст документы за вас. Также возможна подача документов в электронном виде через портал Росреестра.'
      }
    ]
  },
  sidebar: {
    types: {
      title: 'Виды услуг по кадастровому учету',
      items: [
        { icon: 'i-heroicons-map', text: 'Постановка на учет земельных участков' },
        { icon: 'i-heroicons-home-modern', text: 'Постановка на учет зданий и сооружений' },
        { icon: 'i-heroicons-building-office', text: 'Постановка на учет помещений' },
        { icon: 'i-heroicons-cube', text: 'Постановка на учет объектов незавершенного строительства' },
        { icon: 'i-heroicons-document-duplicate', text: 'Внесение изменений в сведения ЕГРН' }
      ]
    },
    results: {
      title: 'Результаты работы',
      items: [
        'Присвоение кадастрового номера объекту',
        'Внесение сведений об объекте в ЕГРН',
        'Выписка из ЕГРН с обновленными сведениями',
        'Полное сопровождение процедуры'
      ]
    }
  },
  cta: {
    title: 'Готовы поставить ваш объект на кадастровый учет?',
    description: 'Свяжитесь с нами для получения консультации и расчета стоимости работ',
    buttons: {
      primary: {
        text: 'Оставить заявку',
        link: '/request'
      },
      secondary: {
        text: 'Контакты',
        link: '/contacts'
      }
    }
  }
};
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 4rem;
  }
}
</style>