<template>
  <div class="py-12 text-white relative overflow-hidden min-h-screen">
    <!-- Анимированный серый градиентный фон -->
    <div class="absolute inset-0">
      <!-- Основной градиентный фон с анимацией -->
      <div class="absolute inset-0 animated-gradient"></div>

      <!-- Декоративные элементы -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xlanimate-float" v-motion
        :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 400,
            delay: 100
          }
        }"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-gray-400/10 rounded-full blur-2xl animate-float-reverse"
        v-motion :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 350,
            delay: 150
          }
        }"></div>
      <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-200/15 rounded-full blur-lg animate-pulse-float" v-motion
        :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 300,
            delay: 200
          }
        }"></div>
      <div class="absolute top-1/4 right-1/4 w-20 h-20 bg-gray-500/8 rounded-full blur-md animate-float" v-motion
        :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 350,
            delay: 250
          }
        }"></div>
    </div>

    <!-- Текстурный оверлей для дополнительной глубины -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>

    <div class="container-custom relative z-10">
      <!-- Заголовок страницы -->
      <div v-motion :initial="{ opacity: 0, y: -50, scale: 0.95 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400,
          type: 'spring',
          stiffness: 80
        }
      }">
        <AboutHeader :title="pageData.header.title" :description="pageData.header.description" />
      </div>

      <!-- О компании -->
      <div v-motion :initial="{ opacity: 0, x: -60, rotateY: -15 }" :visible="{
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
          duration: 400,
          delay: 100,
          type: 'spring'
        }
      }">
        <AboutMission :title="pageData.mission.title" :paragraphs="pageData.mission.paragraphs"
          :imageUrl="pageData.mission.imageUrl" :imageAlt="pageData.mission.imageAlt" />
      </div>

      <!-- Наша команда -->
      <div v-motion :initial="{ opacity: 0, y: 60, scale: 0.95 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400,
          delay: 150,
          type: 'spring',
          stiffness: 70
        }
      }">
        <AboutTeam :title="pageData.team.title" :team="pageData.team.members" />
      </div>

      <!-- Наши преимущества -->
      <div v-motion :initial="{ opacity: 0, x: 60, rotateY: 15 }" :visible="{
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
          duration: 400,
          delay: 200,
          type: 'spring'
        }
      }">
        <AboutAdvantages :title="pageData.advantages.title" :features="pageData.advantages.features" />
      </div>

      <!-- Карта и контакты -->
      <div v-motion :initial="{ opacity: 0, y: 50, scale: 0.9 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400,
          delay: 250,
          type: 'spring'
        }
      }">
        <AboutOffice :title="pageData.office.title" :mapUrl="pageData.office.mapUrl"
          :contactTitle="pageData.office.contactTitle" :contactItems="pageData.office.contactItems"
          :workHoursTitle="pageData.office.workHoursTitle" :workHours="pageData.office.workHours" />
      </div>

      <!-- Наши клиенты и проекты -->
      <div v-motion :initial="{ opacity: 0, x: -50, rotateX: 10 }" :visible="{
        opacity: 1,
        x: 0,
        rotateX: 0,
        transition: {
          duration: 400,
          delay: 300,
          type: 'spring'
        }
      }">
        <AboutExperience :title="pageData.experience.title" :description="pageData.experience.description"
          :stats="pageData.experience.stats" :additionalInfo="pageData.experience.additionalInfo" />
      </div>

      <!-- Призыв к действию -->
      <div v-motion :initial="{ opacity: 0, y: 80, scale: 0.9, rotateX: -10 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
          duration: 400,
          delay: 350,
          type: 'spring',
          stiffness: 60
        }
      }">
        <AboutCta :title="pageData.cta.title" :description="pageData.cta.description"
          :primaryButton="pageData.cta.primaryButton" :secondaryButton="pageData.cta.secondaryButton" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutHeader from '~/components/about/AboutHeader.vue';
import AboutMission from '~/components/about/AboutMission.vue';
import AboutTeam from '~/components/about/AboutTeam.vue';
import AboutAdvantages from '~/components/about/AboutAdvantages.vue';
import AboutOffice from '~/components/about/AboutOffice.vue';
import AboutExperience from '~/components/about/AboutExperience.vue';
import AboutCta from '~/components/about/AboutCta.vue';

definePageMeta({
  title: 'О нас - ПлесКад | Кадастровый инженер в Плесецком районе',
  description: 'Компания ПлесКад предоставляет профессиональные услуги кадастрового инженера в Плесецком районе. Более 12 лет опыта в сфере землеустройства и кадастровых работ.'
});

// Данные для страницы
const pageData = {
  header: {
    title: 'О компании ПлесКад',
    description: 'Профессиональные кадастровые услуги и землеустроительные работы в Плесецком районе'
  },
  mission: {
    title: 'Наша миссия',
    paragraphs: [
      'Компания ПлесКад предоставляет полный спектр кадастровых и геодезических услуг на территории Плесецкого района и Архангельской области с 2009 года.',
      'Мы специализируемся на комплексном решении вопросов, связанных с оформлением недвижимости, земельных участков и подготовкой всей необходимой документации для регистрации права собственности.',
      'Наша цель — сделать процесс оформления недвижимости максимально простым и понятным для клиентов, обеспечивая высокое качество услуг и соблюдение всех требований законодательства.'
    ],
    imageUrl: '/images/about/mission.png',
    imageAlt: 'Миссия компании ПлесКад'
  },
  team: {
    title: 'Наша команда',
    members: [
      {
        name: 'Зуев Андрей Николаевич',
        position: 'Кадастровый инженер',
        description: 'Квалифицированный специалист с многолетним опытом работы в сфере кадастровой деятельности и землеустройства, геодезии, маркшейдерии.'
      },
      {
        name: 'Мезенцев Андрей Алексеевич',
        position: 'Технический специалист',
        description: 'Технический специалист по геодезическим работам и техническим аспектам кадастровой деятельности с опытом использования современного оборудования.'
      },
      {
        name: 'Шарова Елена Сергеевна',
        position: 'Специалист по земельно-кадастровым работам',
        description: 'Специалист по сбору, подготовке и оформлению необходимой документации.'
      }
    ]
  },
  advantages: {
    title: 'Почему выбирают нас',
    features: [
      {
        id: 1,
        icon: 'i-heroicons-academic-cap',
        title: 'Экспертность',
        description: 'Наши специалисты имеют высшее образование в сфере строительства, маркшейдерии (горная геодезия) кадастровой деятельности, судебной экспертизы, экономики.'
      },
      {
        id: 2,
        icon: 'i-heroicons-document-check',
        title: 'Эффективность',
        description: 'Многолетний опыт работы в сфере кадастра и геодезии (более 20 лет)'
      },
      {
        id: 3,
        icon: 'i-heroicons-clock',
        title: 'Оперативность',
        description: 'Быстрое решение ваших вопросов и минимальные сроки оформления документов'
      },
      {
        id: 4,
        icon: 'i-heroicons-user-group',
        title: 'Поддержка',
        description: 'Бесплатные консультации и помощь на каждом этапе выполнения работ до достижения требуемого результата'
      },
      {
        id: 5,
        icon: 'i-heroicons-briefcase',
        title: 'Комплексный подход',
        description: 'Выполняем полный цикл работ от первичной консультации до получения документов о регистрации права собственности.'
      },
      {
        id: 6,
        icon: 'i-heroicons-shield-check',
        title: 'Гарантия качества',
        description: 'Гарантируем соответствие всех документов требованиям законодательства и успешную регистрацию в Росреестре.'
      }
    ]
  },
  office: {
    title: 'Наш офис',
    mapUrl: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa9dfd8910e68f1a1ac954a3d91ecb929237c2c54ab62fc61e6dea0804d1a70da&amp;source=constructor',
    contactTitle: 'Контактная информация',
    contactItems: [
      { icon: 'i-heroicons-phone', text: '+7 (911) 873-99-97' },
      { icon: 'i-heroicons-envelope', text: 'zuew23@mail.ru' },
      { icon: 'i-heroicons-map-pin', text: 'рп. Плесецк, ул. Кооперативная, д. 4, 1 этаж' }
    ],
    workHoursTitle: 'Режим работы',
    workHours: ['Пн-Пт: 9:00 - 17:00', 'Сб-Вс: выходной']
  },
  experience: {
    title: 'Наш опыт',
    description: 'За годы работы компания ПлесКад успешно реализовала более 1000 проектов различной сложности для частных лиц и организаций Плесецкого района и Архангельской области.',
    stats: [
      { value: '12+', label: 'лет опыта работы' },
      { value: '1000+', label: 'выполненных проектов' },
      { value: '95%', label: 'довольных клиентов' }
    ],
    additionalInfo: 'Мы работаем как с частными заказчиками, так и с организациями, включая муниципальные учреждения, предприятия агропромышленного комплекса, строительные компании и предприятия лесной промышленности.'
  },
  cta: {
    title: 'Готовы начать сотрудничество?',
    description: 'Оставьте заявку или свяжитесь с нами по указанным контактам для получения бесплатной консультации по вашему вопросу.',
    primaryButton: {
      text: 'Оставить заявку',
      link: '/request',
      icon: 'i-heroicons-document-text'
    },
    secondaryButton: {
      text: 'Связаться с нами',
      link: '/contacts',
      icon: 'i-heroicons-phone'
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

/* Плавный бесконечный переход серого градиента */
@keyframes infiniteGradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Класс для анимированного серого градиента */
.animated-gradient {
  background: linear-gradient(-45deg,
      rgb(229 231 235),
      /* gray-200 - светло-серый */
      rgb(156 163 175),
      /* gray-400 - серый */
      rgb(75 85 99),
      /* gray-600 - темно-серый */
      rgb(156 163 175),
      /* gray-400 - серый */
      rgb(229 231 235),
      /* gray-200 - светло-серый */
      rgb(156 163 175)
      /* gray-400 - серый */
    );
  background-size: 400% 400%;
  animation: infiniteGradientShift 10s ease-in-out infinite;
}

/* Анимации для декоративных элементов */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }

  33% {
    transform: translateY(-15px) rotate(5deg) scale(1.1);
  }

  66% {
    transform: translateY(-5px) rotate(-3deg) scale(0.95);
  }
}

@keyframes floatReverse {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }

  33% {
    transform: translateY(10px) rotate(-5deg) scale(0.9);
  }

  66% {
    transform: translateY(-10px) rotate(3deg) scale(1.05);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.15;
  }

  50% {
    transform: scale(1.2) rotate(10deg);
    opacity: 0.08;
  }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-reverse {
  animation: floatReverse 12s ease-in-out infinite;
}

.animate-pulse-float {
  animation: pulse 8s ease-in-out infinite;
}

/* Оптимизация для мобильных */
@media (max-width: 767px) {

  /* Более плавная анимация градиента на мобильных */
  .animated-gradient {
    animation-duration: 14s;
    /* Замедляем на мобильных */
  }

  /* Уменьшаем размер декоративных элементов на мобильных */
  .absolute.w-32 {
    width: 4rem;
    height: 4rem;
  }

  .absolute.w-48 {
    width: 6rem;
    height: 6rem;
  }

  .absolute.w-24 {
    width: 3rem;
    height: 3rem;
  }

  .absolute.w-20 {
    width: 2.5rem;
    height: 2.5rem;
  }
}

/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>