import type { ServiceData } from '~/utils/types/service-types';

export const landFormationData: ServiceData = {
  title: 'Формирование земельного участка',
  description:
    'Профессиональные услуги по образованию новых земельных участков из земель государственной или муниципальной собственности с последующей постановкой на кадастровый учет',
  mainInfo: {
    title: 'Что такое формирование земельного участка?',
    paragraphs: [
      'Формирование земельного участка — это комплекс кадастровых и землеустроительных работ по образованию нового земельного участка из земель, находящихся в государственной или муниципальной собственности, а также подготовка необходимых документов для его постановки на кадастровый учет.',
      'Данная процедура является обязательной для последующего предоставления земельного участка в собственность, аренду, безвозмездное пользование или для иных целей. Формирование земельного участка включает определение его местоположения, границ, площади, категории земель и вида разрешенного использования.',
      'Процедура формирования земельного участка регулируется Земельным кодексом РФ, Федеральным законом "О кадастровой деятельности" и другими нормативными правовыми актами.',
    ],
    image: {
      src: '/images/services/landPlot/formation.jpg',
      alt: 'Формирование земельного участка',
    },
    sections: [
      {
        title: 'Основания для формирования земельного участка:',
        type: 'list',
        items: [
          'Решение органа государственной власти или органа местного самоуправления',
          'Заявление заинтересованного лица о предварительном согласовании предоставления земельного участка',
          'Решение о развитии застроенной территории',
          'Решение о комплексном освоении территории',
          'Утверждение схемы расположения земельного участка на кадастровом плане территории',
          'Утвержденный проект межевания территории',
        ],
      },
      {
        title: 'Способы формирования земельного участка:',
        type: 'list',
        items: [
          'На основе схемы расположения земельного участка на кадастровом плане территории (если отсутствует проект межевания)',
          'На основании проекта межевания территории (в соответствии с документацией по планировке территории)',
          'На основании проектной документации лесных участков (для земель лесного фонда)',
          'В рамках комплексных кадастровых работ',
        ],
      },
      {
        title: 'Этапы формирования земельного участка:',
        type: 'numbered',
        items: [
          {
            title: 'Предварительная подготовка',
            description:
              'анализ текущего статуса территории, получение сведений из ЕГРН, определение возможности формирования участка.',
          },
          {
            title: 'Разработка схемы расположения земельного участка',
            description: 'на кадастровом плане территории (если отсутствует проект межевания).',
          },
          {
            title: 'Согласование и утверждение схемы',
            description: 'с уполномоченным органом государственной власти или органом местного самоуправления.',
          },
          {
            title: 'Проведение кадастровых работ',
            description:
              'выезд кадастрового инженера на местность, определение границ формируемого участка, подготовка межевого плана.',
          },
          {
            title: 'Постановка на кадастровый учет',
            description: 'подача документов в Росреестр для внесения сведений о новом земельном участке в ЕГРН.',
          },
          {
            title: 'Получение выписки из ЕГРН',
            description: 'на сформированный земельный участок для дальнейшего оформления прав.',
          },
        ],
      },
      {
        title: 'Требования к формируемым земельным участкам:',
        type: 'list',
        items: [
          'Соответствие градостроительным регламентам и правилам землепользования и застройки',
          'Соблюдение предельных максимальных и минимальных размеров земельных участков',
          'Обеспечение доступа (прохода, проезда) к формируемому земельному участку',
          'Отсутствие наложений границ формируемого участка на границы других участков',
          'Соответствие целевому назначению и категории земель',
          'Учет зон с особыми условиями использования территорий',
        ],
      },
    ],
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    questions: [
      {
        question: 'Сколько времени занимает процедура формирования земельного участка?',
        answer:
          'Общий срок формирования земельного участка может составлять от 2 до 6 месяцев. Этот срок включает в себя: разработку и утверждение схемы расположения земельного участка (1-3 месяца), подготовку межевого плана (2-4 недели), постановку на кадастровый учет (5-7 рабочих дней). Сроки могут значительно варьироваться в зависимости от региона, загруженности уполномоченных органов, наличия ранее разработанной документации и сложности конкретного случая.',
      },
      {
        question: 'Кто может инициировать формирование земельного участка?',
        answer: 'Инициаторами формирования земельного участка могут выступать:',
        list: [
          'Органы государственной власти и местного самоуправления',
          'Граждане и юридические лица, заинтересованные в предоставлении земельного участка',
          'Правообладатели смежных земельных участков',
          'Кадастровые инженеры по поручению заинтересованных лиц',
          'Органы, осуществляющие комплексные кадастровые работы',
        ],
      },
      {
        question: 'Какие документы необходимы для формирования земельного участка?',
        answer: 'Для формирования земельного участка потребуются следующие документы:',
        list: [
          'Паспорт заявителя (заинтересованного лица)',
          'Заявление о предварительном согласовании предоставления земельного участка (в случае образования участка для последующего предоставления)',
          'Документы, подтверждающие право на получение земельного участка без проведения торгов (при наличии такого права)',
          'Схема расположения земельного участка на кадастровом плане территории (подготавливается кадастровым инженером, если отсутствует проект межевания)',
          'Документы, подтверждающие полномочия представителя (при необходимости)',
          'Согласие на обработку персональных данных',
        ],
      },
      {
        question: 'Можно ли сформировать земельный участок в любом месте?',
        answer:
          'Нет, формирование земельного участка возможно только на землях, которые не обременены правами других лиц, и с учетом множества ограничений. Формирование должно соответствовать градостроительным регламентам, правилам землепользования и застройки, а также учитывать зоны с особыми условиями использования территорий (охранные, санитарно-защитные зоны и т.д.). Кроме того, необходимо учитывать целевое назначение земель и их принадлежность к определенной категории. Рекомендуется предварительно проконсультироваться со специалистами, чтобы оценить возможность формирования участка в конкретном месте.',
      },
      {
        question: 'Сколько стоит формирование земельного участка?',
        answer: 'Стоимость формирования земельного участка складывается из нескольких составляющих:',
        list: [
          'Разработка схемы расположения земельного участка на кадастровом плане территории (от 5 000 до 15 000 рублей)',
          'Проведение кадастровых работ и подготовка межевого плана (от 8 000 до 25 000 рублей в зависимости от площади и сложности работ)',
          'Государственная пошлина за постановку на кадастровый учет (не взимается)',
          'Дополнительные расходы на получение необходимых согласований и документов (варьируются в зависимости от конкретной ситуации)',
        ],
      },
    ],
  },
  sidebar: {
    types: {
      title: 'Виды кадастровых работ',
      items: [
        {
          icon: 'i-heroicons-map',
          text: 'Уточнение',
          link: '/services/land-survey/land-boundary',
        },
        {
          icon: 'i-heroicons-arrows-right-left',
          text: 'Перераспределение',
          link: '/services/land-survey/land-redistribution',
        },
        {
          icon: 'i-heroicons-scissors',
          text: 'Раздел',
          link: '/services/land-survey/land-division',
        },
        { icon: 'i-heroicons-plus', text: 'Объединение', link: '/services/land-survey/land-union' },
        {
          icon: 'i-heroicons-document-plus',
          text: 'Формирование',
          link: '/services/land-survey/land-formation',
        },
        {
          icon: 'i-heroicons-squares-plus',
          text: 'Выдел земельной доли',
          link: '/services/land-survey/land-allocation',
        },
      ],
    },
    results: {
      title: 'Результаты работы',
      items: [
        'Схема расположения земельного участка на кадастровом плане территории',
        'Межевой план образуемого земельного участка',
        'Постановка на кадастровый учет нового земельного участка',
        'Выписка из ЕГРН на сформированный земельный участок',
        'Консультация по дальнейшему оформлению прав на участок',
      ],
    },
    advantages: {
      title: 'Наши преимущества',
      items: [
        'Большой опыт формирования земельных участков различного назначения',
        'Знание региональных особенностей земельного законодательства',
        'Индивидуальный подход к каждому объекту',
        'Использование современного геодезического оборудования',
        'Полное сопровождение на всех этапах процедуры',
        'Согласование схемы расположения земельного участка с уполномоченными органами',
      ],
    },
    documents: {
      title: 'Необходимые документы',
      items: [
        'Паспорт заявителя',
        'Заявление о предварительном согласовании предоставления земельного участка (при необходимости)',
        'Документы, подтверждающие право на получение земельного участка без проведения торгов (при наличии)',
        'Документы, характеризующие цель использования земельного участка',
        'Доверенность (если действует представитель)',
        'Проект межевания территории (при наличии)',
      ],
    },
  },
  cta: {
    title: 'Нужно сформировать земельный участок?',
    description:
      'Свяжитесь с нами для получения профессиональной консультации и помощи в оформлении всех необходимых документов',
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
