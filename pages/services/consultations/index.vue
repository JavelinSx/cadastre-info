<template>
  <div class="py-16  text-gray-800">
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
        <div class="w-full relative" v-motion :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
          <ServiceSidebar :serviceTypes="serviceData.sidebar.types" :results="serviceData.sidebar.results" />
        </div>

        <!-- Блок с призывом к действию -->
        <div class="md:col-span-3 mt-12 bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100" v-motion
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
  </div>
</template>

<script setup lang="ts">
import ServiceSidebar from '~/components/services/ServiceSidebar.vue';
definePageMeta({
  title: 'Кадастровые работы в отношении земельных участков - Услуги кадастрового инженера',
  description: 'Профессиональные кадастровые работы в отношении земельных участков: межевание, уточнение границ, раздел, объединение, перераспределение и другие виды кадастровых услуг.'
});

// Динамические данные для страницы
const serviceData = {
  title: 'Кадастровые работы в отношении земельных участков',
  description: 'Профессиональные услуги по геодезическим измерениям, оформлению границ и подготовке документации для земельных участков',
  mainInfo: {
    title: 'Кадастровые работы в отношении земельных участков',
    paragraphs: [
      'Кадастровые работы в отношении земельного участка — это комплекс геодезических и юридических мероприятий, направленных на определение границ участка, его площади и местоположения, а также подготовку документов для внесения сведений в Единый государственный реестр недвижимости (ЕГРН).',
      'Эти работы необходимы для официального установления и закрепления границ земельного участка, защиты прав собственника и предотвращения споров с соседями. Отсутствие установленных границ может привести к проблемам при продаже, наследовании или использовании участка.'
    ],
    image: {
      src: '/images/services/landPlot/chapter.jpg',
      alt: 'Кадастровые работы в отношении земельных участков'
    },
    sections: [
      {
        title: 'В каких случаях необходимы кадастровые работы?',
        type: 'list',
        items: [
          'При покупке или продаже земельного участка',
          'При разделе, объединении или перераспределении земельных участков',
          'Для уточнения границ участка при наличии споров с соседями',
          'При оформлении наследства',
          'Для получения разрешения на строительство',
          'При отсутствии данных о границах в ЕГРН',
          'При изменении характеристик земельного участка'
        ]
      },
      {
        title: 'Этапы проведения кадастровых работ:',
        type: 'numbered',
        items: [
          {
            title: 'Подготовительные работы',
            description: 'сбор и анализ документов на земельный участок, получение сведений из ЕГРН и архивов.'
          },
          {
            title: 'Полевые работы',
            description: 'выезд кадастрового инженера на местность, геодезическая съемка, определение координат границ участка.'
          },
          {
            title: 'Согласование границ',
            description: 'с собственниками смежных земельных участков (при необходимости).'
          },
          {
            title: 'Подготовка межевого плана',
            description: 'технический документ, содержащий сведения о земельном участке и его границах.'
          },
          {
            title: 'Подача документов в Росреестр',
            description: 'для внесения сведений о границах участка в ЕГРН.'
          },
          {
            title: 'Получение выписки из ЕГРН',
            description: 'с обновленными сведениями о земельном участке.'
          }
        ]
      }
    ]
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    questions: [
      {
        question: 'Сколько времени занимает проведение кадастровых работ?',
        answer: 'Срок проведения кадастровых работ в отношении земельного участка зависит от сложности объекта и составляет в среднем от 14 до 30 дней. При наличии споров с соседями или сложных условиях процесс может занять более длительное время.'
      },
      {
        question: 'Какие документы нужны для проведения кадастровых работ?',
        answer: 'Для проведения кадастровых работ необходимы:',
        list: [
          'Паспорт заказчика',
          'Документы, подтверждающие право собственности на земельный участок',
          'Выписка из ЕГРН (при наличии)',
          'Кадастровый план территории (при необходимости)',
          'Решение суда (если границы устанавливаются по решению суда)',
          'Правоустанавливающие документы на соседние участки (при наличии)'
        ]
      },
      {
        question: 'Обязательно ли присутствие собственника при проведении кадастровых работ?',
        answer: 'Присутствие собственника желательно, но не обязательно. Вы можете оформить доверенность на представление ваших интересов. Однако при согласовании границ с соседями ваше присутствие может упростить процесс решения спорных вопросов.'
      },
      {
        question: 'Что делать, если сосед не согласен с границами участка?',
        answer: 'Если сосед не согласен с установленными границами, вы можете:',
        list: [
          'Попытаться урегулировать спор мирным путем',
          'Провести повторные измерения с участием обеих сторон',
          'Обратиться к независимому эксперту для проведения экспертизы',
          'Решить вопрос в судебном порядке'
        ]
      },
      {
        question: 'Сколько стоят кадастровые работы в отношении земельного участка?',
        answer: 'Стоимость кадастровых работ зависит от площади участка, его конфигурации, расположения и других факторов. Для получения точной информации о стоимости, пожалуйста, оставьте заявку на нашем сайте или свяжитесь с нами по телефону.'
      }
    ]
  },
  sidebar: {
    types: {
      title: 'Виды кадастровых работ',
      items: [
        { icon: 'i-heroicons-map', text: 'Уточнение границ земельного участка', link: '/services/land-survey/land-boundary' },
        { icon: 'i-heroicons-arrows-right-left', text: 'Перераспределение земельного участка', link: '/services/land-survey/land-redistribution' },
        { icon: 'i-heroicons-scissors', text: 'Раздел земельных участков', link: '/services/land-survey/land-division' },
        { icon: 'i-heroicons-plus', text: 'Объединение земельных участков', link: '/services/land-survey/land-union' },
        { icon: 'i-heroicons-document-plus', text: 'Формирование земельного участка', link: '/services/land-survey/land-formation' },
        { icon: 'i-heroicons-squares-plus', text: 'Выдел земельной доли', link: '/services/land-survey/land-allocation' }
      ]
    },
    results: {
      title: 'Результаты работы',
      items: [
        'Межевой план в электронном и печатном виде',
        'Акт согласования границ с соседями',
        'Выписка из ЕГРН с обновленными сведениями',
        'Координаты поворотных точек границ участка',
        'Топографическая съемка участка (при необходимости)'
      ]
    }
  },
  cta: {
    title: 'Готовы заказать кадастровые работы для вашего участка?',
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