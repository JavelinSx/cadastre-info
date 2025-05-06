<template>
  <div class="py-12 bg-gray-50 text-gray-800">
    <div class="container-custom">
      <!-- Заголовок страницы -->
      <AboutHeader :title="pageData.header.title" :description="pageData.header.description" />

      <!-- О компании -->
      <AboutMission :title="pageData.mission.title" :paragraphs="pageData.mission.paragraphs"
        :imageUrl="pageData.mission.imageUrl" :imageAlt="pageData.mission.imageAlt" />

      <!-- Наша команда -->
      <AboutTeam :title="pageData.team.title" :team="pageData.team.members" />

      <!-- Наши преимущества -->
      <AboutAdvantages :title="pageData.advantages.title" :features="pageData.advantages.features" />

      <!-- Карта и контакты -->
      <AboutOffice :title="pageData.office.title" :mapUrl="pageData.office.mapUrl"
        :contactTitle="pageData.office.contactTitle" :contactItems="pageData.office.contactItems"
        :workHoursTitle="pageData.office.workHoursTitle" :workHours="pageData.office.workHours" />

      <!-- Наши клиенты и проекты -->
      <AboutExperience :title="pageData.experience.title" :description="pageData.experience.description"
        :stats="pageData.experience.stats" :additionalInfo="pageData.experience.additionalInfo" />

      <!-- Призыв к действию -->
      <AboutCta :title="pageData.cta.title" :description="pageData.cta.description"
        :primaryButton="pageData.cta.primaryButton" :secondaryButton="pageData.cta.secondaryButton" />
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
        description: 'Квалифицированный специалист с многолетним опытом работы в сфере кадастровой деятельности и землеустройства.'
      },
      {
        name: 'Мезенцев Андрей Алексеевич',
        position: 'Технический специалист',
        description: 'Эксперт по геодезическим работам и техническим аспектам кадастровой деятельности с опытом использования современного оборудования.'
      },
      {
        name: 'Шарова Елена Сергеевна',
        position: 'Специалист по земельно-кадастровым работам',
        description: 'Профессионал в оформлении документации, подготовке межевых и технических планов, взаимодействии с Росреестром.'
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
</style>