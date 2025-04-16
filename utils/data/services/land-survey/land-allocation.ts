import type { ServiceData } from '~/utils/types/service-types';

export const landAllocationData: ServiceData = {
  title: 'Выдел земельной доли',
  description:
    'Профессиональные услуги по выделу земельной доли из земель сельскохозяйственного назначения с оформлением всей необходимой документации',
  mainInfo: {
    title: 'Что такое выдел земельной доли?',
    paragraphs: [
      'Выдел земельной доли — это процедура образования земельного участка из земель сельскохозяйственного назначения, находящихся в долевой собственности, в счет принадлежащей гражданину или юридическому лицу земельной доли.',
      'В результате выдела земельной доли образуется самостоятельный земельный участок, который принадлежит собственнику на праве индивидуальной собственности. Это позволяет полноценно распоряжаться своей частью земли: продавать, сдавать в аренду, использовать для личных нужд и т.д.',
      'Процедура выдела земельной доли регулируется Федеральным законом "Об обороте земель сельскохозяйственного назначения" и требует соблюдения специальной процедуры согласования с другими участниками долевой собственности.',
    ],
    image: {
      src: '/images/services/landPlot/allocation.jpg',
      alt: 'Выдел земельной доли',
    },
    sections: [
      {
        title: 'Случаи, когда необходим выдел земельной доли:',
        type: 'list',
        items: [
          'При желании собственника земельной доли использовать свою часть земли для самостоятельного ведения сельскохозяйственной деятельности',
          'Для продажи или передачи в аренду конкретного земельного участка (а не абстрактной доли)',
          'Для передачи земельного участка в наследство или дарения',
          'При необходимости обеспечить земельный участок кредитом или залогом',
          'Для более эффективного использования земельной доли',
          'При разделе имущества супругов, включающего земельную долю',
        ],
      },
      {
        title: 'Способы выдела земельной доли:',
        type: 'list',
        items: [
          'На основании решения общего собрания участников долевой собственности (если утвержден проект межевания земельного участка)',
          'В индивидуальном порядке на основании выделения земельного участка в соответствии с проектом межевания',
          'В судебном порядке (в случае если не удалось достичь согласия с другими участниками долевой собственности)',
        ],
      },
      {
        title: 'Этапы выдела земельной доли:',
        type: 'numbered',
        items: [
          {
            title: 'Подготовка документов',
            description: 'сбор правоустанавливающих документов на земельную долю и других необходимых документов.',
          },
          {
            title: 'Подготовка проекта межевания',
            description: 'определение местоположения и границ земельного участка, выделяемого в счет земельной доли.',
          },
          {
            title: 'Извещение участников долевой собственности',
            description: 'публикация в средствах массовой информации о намерении выделить земельный участок.',
          },
          {
            title: 'Рассмотрение возражений',
            description: 'при наличии обоснованных возражений — их урегулирование или обращение в суд.',
          },
          {
            title: 'Проведение кадастровых работ',
            description:
              'выезд кадастрового инженера на местность, определение границ выделяемого участка, подготовка межевого плана.',
          },
          {
            title: 'Постановка земельного участка на кадастровый учет',
            description: 'подача документов в Росреестр для внесения сведений о новом земельном участке в ЕГРН.',
          },
          {
            title: 'Регистрация права собственности',
            description: 'на выделенный земельный участок в Росреестре.',
          },
        ],
      },
      {
        title: 'Требования к выделяемым земельным участкам:',
        type: 'list',
        items: [
          'Образуемый земельный участок должен соответствовать по площади размеру принадлежащей доли (с учетом качества земли)',
          'Местоположение образуемого участка должно соответствовать требованиям к рациональной организации территории и компактному размещению',
          'Участок должен иметь доступ к дорогам и иным объектам инфраструктуры',
          'Выделяемый участок должен сохранять целевое назначение исходного земельного участка',
          'Необходимо учитывать особенности сельскохозяйственного производства и сложившуюся экономическую ситуацию',
        ],
      },
    ],
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    questions: [
      {
        question: 'Сколько времени занимает процедура выдела земельной доли?',
        answer:
          'Общий срок процедуры выдела земельной доли может составлять от 3 до 6 месяцев. Этот срок включает в себя: подготовку проекта межевания (2-4 недели), публикацию извещения о выделе и ожидание возражений (минимум 30 дней), проведение кадастровых работ (2-4 недели), постановку на кадастровый учет и регистрацию права собственности (до 10 рабочих дней). В случае возникновения споров или необходимости судебного разбирательства сроки могут значительно увеличиться.',
      },
      {
        question: 'Какие документы необходимы для выдела земельной доли?',
        answer: 'Для выдела земельной доли потребуются следующие документы:',
        list: [
          'Паспорт собственника земельной доли',
          'Свидетельство о праве на земельную долю или выписка из ЕГРН',
          'Свидетельство о государственной регистрации права на земельную долю',
          'Проект межевания земельного участка',
          'Документ, подтверждающий извещение участников долевой собственности через публикацию в СМИ',
          'Справка об отсутствии возражений других участников долевой собственности (если применимо)',
          'Протокол общего собрания участников долевой собственности (при наличии)',
          'Межевой план выделяемого земельного участка',
          'Доверенность (если от имени собственника действует представитель)',
        ],
      },
      {
        question: 'Можно ли выделить земельную долю в любом месте?',
        answer:
          'Нет, местоположение выделяемого земельного участка ограничено территорией исходного земельного участка, находящегося в долевой собственности. При этом выбор конкретного места для выдела должен соответствовать требованиям рационального использования земель и компактного размещения. Приоритет имеет решение общего собрания участников долевой собственности, если таковое было проведено, или утвержденный проект межевания. В случае необоснованных возражений со стороны других участников долевой собственности местоположение может быть определено в судебном порядке.',
      },
      {
        question: 'Что делать, если есть возражения других участников долевой собственности?',
        answer:
          'Если в течение 30 дней после публикации извещения о выделе земельной доли поступили обоснованные возражения от других участников долевой собственности, необходимо:',
        list: [
          'Провести переговоры для достижения компромисса и согласования нового местоположения участка',
          'Организовать общее собрание участников долевой собственности для решения вопроса',
          'Обратиться к независимым экспертам для оценки обоснованности возражений',
          'В случае невозможности разрешения спора мирным путем — обратиться в суд с иском об определении местоположения выделяемого земельного участка',
        ],
      },
      {
        question: 'Сколько стоит выдел земельной доли?',
        answer: 'Стоимость выдела земельной доли складывается из нескольких составляющих:',
        list: [
          'Подготовка проекта межевания земельного участка (от 15 000 до 30 000 рублей)',
          'Публикация извещения в средствах массовой информации (от 2 000 до 5 000 рублей)',
          'Кадастровые работы по подготовке межевого плана (от 10 000 до 25 000 рублей в зависимости от площади и сложности работ)',
          'Государственная пошлина за регистрацию права собственности (2 000 рублей для физических лиц)',
          'Дополнительные расходы на получение необходимых документов и согласований (варьируются в зависимости от конкретной ситуации)',
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
        'Проект межевания земельного участка',
        'Документы, подтверждающие извещение участников долевой собственности',
        'Межевой план выделяемого земельного участка',
        'Постановка на кадастровый учет образованного земельного участка',
        'Регистрация права собственности на выделенный участок',
        'Выписка из ЕГРН на образованный земельный участок',
      ],
    },
    advantages: {
      title: 'Наши преимущества',
      items: [
        'Специализация на выделе земельных долей сельскохозяйственного назначения',
        'Опыт работы в сложных случаях и спорных ситуациях',
        'Знание региональных особенностей и требований',
        'Полное юридическое сопровождение процедуры',
        'Помощь в подготовке всех необходимых документов',
        'Представительство интересов в органах государственной власти',
      ],
    },
    documents: {
      title: 'Необходимые документы',
      items: [
        'Паспорт собственника земельной доли',
        'Свидетельство о праве на земельную долю или выписка из ЕГРН',
        'Документы на исходный земельный участок (при наличии)',
        'Выписка из протокола общего собрания (при наличии)',
        'Доверенность (если от имени собственника действует представитель)',
        'Согласие супруга/супруги (для совместной собственности)',
      ],
    },
  },
  cta: {
    title: 'Нужно выделить земельную долю?',
    description: 'Обратитесь к нашим специалистам для профессиональной помощи в выделе земельной доли',
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
