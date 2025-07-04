import type { ServiceData } from '~/utils/types/service-types';

export const geodesicData: ServiceData = {
  title: 'Геодезические работы',
  description:
    'Профессиональные геодезические работы: топографическая съемка, вынос границ в натуру, координирование объектов и другие виды геодезических изысканий',
  mainInfo: {
    title: 'Что такое геодезические работы?',
    paragraphs: [
      'Геодезические работы — это комплекс измерений, вычислений и графических построений, необходимых для определения пространственного положения объектов, их размеров и конфигурации. Эти работы являются основой для любого строительства, проектирования и кадастрового учета объектов недвижимости.',
      'Геодезические изыскания проводятся как на этапе проектирования объектов, так и во время строительства и эксплуатации. Они обеспечивают точные пространственные данные, необходимые для принятия правильных инженерных решений и соблюдения строительных норм и правил.',
      'Современные геодезические работы выполняются с применением высокоточного оборудования, включая электронные тахеометры, GPS/ГЛОНАСС-приемники, лазерные сканеры и другие измерительные приборы, что обеспечивает максимальную точность и скорость работ.',
    ],
    image: {
      src: '/images/services/geodesic/geodesic-main.jpg',
      alt: 'Геодезические работы',
    },
    sections: [
      {
        title: 'Виды геодезических работ:',
        type: 'list',
        items: [
          'Топографическая съемка — определение ситуации и рельефа местности для создания топографических планов',
          'Вынос границ земельного участка в натуру — перенос на местность проектных границ участка',
          'Исполнительная съемка — фиксирование фактического положения построенных объектов',
          'Определение координат характерных точек объектов недвижимости',
          'Геодезический мониторинг за деформациями зданий и сооружений',
          'Создание геодезической разбивочной основы для строительства',
          'Вертикальная планировка территории',
        ],
      },
      // {
      //   title: 'Для чего необходимы геодезические работы?',
      //   type: 'list',
      //   items: [
      //     'Для проектирования и строительства зданий, сооружений и линейных объектов',
      //     'Для оформления кадастровых документов на земельные участки и объекты капитального строительства',
      //     'Для контроля за строительством и соблюдением проектных решений',
      //     'Для мониторинга состояния существующих объектов и выявления деформаций',
      //     'Для планирования территорий и разработки генеральных планов',
      //     'Для разрешения земельных споров и установления границ участков',
      //     'Для обеспечения безопасности при эксплуатации зданий и сооружений',
      //   ],
      // },
      {
        title: 'Этапы проведения геодезических работ:',
        type: 'numbered',
        items: [
          {
            title: 'Подготовительные работы',
            description:
              'сбор и анализ исходных данных, получение разрешительной документации, рекогносцировка местности',
          },
          {
            title: 'Создание геодезической сети',
            description: 'установка опорных пунктов и определение их координат',
          },
          {
            title: 'Полевые измерения',
            description: 'сбор данных непосредственно на местности с использованием геодезического оборудования',
          },
          {
            title: 'Камеральная обработка результатов',
            description: 'вычисление координат, высот, площадей и других параметров по результатам измерений',
          },
          {
            title: 'Составление отчетной документации',
            description: 'создание топографических планов, схем, чертежей и текстовых описаний',
          },
          {
            title: 'Согласование и утверждение результатов',
            description: 'в соответствующих инстанциях и организациях',
          },
        ],
      },
    ],
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    questions: [
      {
        question: 'Какой точности можно достичь при геодезических измерениях?',
        answer:
          'Современное геодезическое оборудование позволяет проводить измерения с миллиметровой точностью. Например, при использовании электронных тахеометров погрешность линейных измерений составляет 2-5 мм на километр, а при использовании GPS/ГЛОНАСС оборудования в режиме реального времени (RTK) — до 10-20 мм в плане и до 20-40 мм по высоте. Конкретные показатели точности зависят от типа работ, условий местности, используемого оборудования и методов измерений.',
      },
      {
        question: 'Сколько времени занимают геодезические работы?',
        answer:
          'Сроки выполнения геодезических работ зависят от их вида, объема и сложности. Например, топографическая съемка небольшого земельного участка может быть выполнена за 1-2 дня, включая полевые и камеральные работы. Вынос границ участка в натуру обычно занимает от нескольких часов до 1 дня. Геодезические работы для строительства крупных объектов могут проводиться на протяжении всего периода строительства, который может составлять месяцы или даже годы.',
      },
      {
        question: 'Нужно ли присутствие заказчика при проведении геодезических работ?',
        answer:
          'Присутствие заказчика не обязательно при проведении большинства видов геодезических работ, но желательно при выносе границ участка в натуру для согласования и закрепления точек на местности. В других случаях достаточно обеспечить доступ специалистов к объекту и предоставить необходимую документацию. При необходимости мы всегда готовы согласовать удобное для вас время проведения работ.',
      },
      {
        question: 'Как проводится топографическая съемка земельного участка?',
        answer:
          'Топографическая съемка земельного участка включает следующие этапы: 1) рекогносцировка местности и планирование работ; 2) создание съемочного обоснования (установка опорных точек); 3) измерение координат характерных точек рельефа и ситуации с помощью геодезических приборов; 4) обработка полученных данных и создание топографического плана в заданном масштабе с указанием всех объектов местности, горизонталей, высотных отметок и условных обозначений.',
      },
      {
        question: 'Можно ли провести геодезические работы зимой?',
        answer:
          'Да, большинство геодезических работ можно проводить в зимнее время. Современное оборудование позволяет выполнять измерения при температурах до -20°C и даже ниже. Однако, некоторые виды работ могут быть затруднены из-за снежного покрова (например, топографическая съемка рельефа) или промерзания грунта (при установке межевых знаков). В таких случаях сроки выполнения работ могут увеличиться, или может потребоваться проведение дополнительных измерений в более благоприятный сезон.',
      },
    ],
  },
  sidebar: {
    types: {
      title: 'Виды геодезических работ',
      items: [
        {
          icon: 'i-heroicons-map',
          text: 'Топографическая съемка',
          link: '/services/geodesic/geodesic-topography',
        },
        {
          icon: 'i-heroicons-clipboard-document-check',
          text: 'Исполнительная съемка',
          link: '/services/geodesic/geodesic-executive',
        },
        {
          icon: 'i-heroicons-flag',
          text: 'Вынос точек в натуру',
          link: '/services/geodesic/geodesic-boundary',
        },
        {
          icon: 'i-heroicons-cube',
          text: 'Определение объемов',
          link: '/services/geodesic/geodesic-calculation',
        },
        {
          icon: 'i-heroicons-arrow-path',
          text: 'Инженерно-геодезические изыскания',
          link: '/services/geodesic/geodesic-survey',
        },
        {
          icon: 'i-heroicons-square-3-stack-3d',
          text: 'Подготовка разбивочной основы',
          link: '/services/geodesic/geodesic-basis',
        },
      ],
    },
    results: {
      title: 'Результаты работы',
      items: [
        'Топографические планы в масштабах 1:500 - 1:5000',
        'Координаты характерных точек объектов',
        'Технические отчеты о выполненных работах',
        'Исполнительные схемы и чертежи',
        'Разбивочные чертежи',
        'Акты выноса границ в натуру',
      ],
    },
    advantages: {
      title: 'Наши преимущества',
      items: [
        'Современное высокоточное оборудование',
        'Опытные инженеры-геодезисты с профильным образованием',
        'Оперативное выполнение работ любой сложности',
        'Гарантия соответствия всем нормативным требованиям',
        'Официальный договор с фиксированной стоимостью',
        'Сопровождение документации во всех инстанциях',
      ],
    },
    documents: {
      title: 'Необходимые документы',
      items: [
        'Паспорт заказчика',
        'Документы на земельный участок (выписка из ЕГРН, свидетельство о праве собственности)',
        'Ситуационный план участка (при наличии)',
        'Проектная документация (при необходимости)',
        'Технические условия (для инженерных изысканий)',
      ],
    },
  },
  cta: {
    title: 'Нужны геодезические работы?',
    description: 'Свяжитесь с нами для получения профессиональной консультации и расчета стоимости услуг',
    buttons: {
      primary: {
        text: 'Оставить заявку',
        link: '/request',
      },
      secondary: {
        text: 'Контакты',
        link: '/contacts',
      },
    },
  },
};
