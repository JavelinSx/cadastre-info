import type { GlossaryPageData } from '~/utils/types/information-types';

export const glossaryData: GlossaryPageData = {
  title: 'Словарь кадастровых терминов',
  description: 'Пояснения основных терминов и определений в сфере кадастра и недвижимости',
  introText:
    'В этом разделе собраны и разъяснены основные термины, используемые в кадастровой деятельности и при оформлении недвижимости. Знание этих терминов поможет вам лучше ориентироваться в процедурах и документах.',
  alphabet: [
    'А',
    'Б',
    'В',
    'Г',
    'Д',
    'Е',
    'Ж',
    'З',
    'И',
    'К',
    'Л',
    'М',
    'Н',
    'О',
    'П',
    'Р',
    'С',
    'Т',
    'У',
    'Ф',
    'Х',
    'Ц',
    'Ч',
    'Ш',
    'Щ',
    'Э',
    'Ю',
    'Я',
  ],
  terms: [
    {
      term: 'Кадастровый инженер',
      definition:
        'Физическое лицо, являющееся членом саморегулируемой организации кадастровых инженеров и имеющее действующий квалификационный аттестат. Осуществляет кадастровую деятельность, результатом которой является подготовка документов для кадастрового учета объектов недвижимости.',
    },
    {
      term: 'Кадастровый номер',
      definition:
        'Уникальный идентификатор объекта недвижимости, присваиваемый при постановке на государственный кадастровый учет. Состоит из кадастрового округа, кадастрового района, кадастрового квартала и номера объекта недвижимости в кадастровом квартале.',
    },
    {
      term: 'Межевой план',
      definition:
        'Документ, содержащий информацию о земельном участке или участках, необходимую для постановки на государственный кадастровый учет или внесения изменений в сведения ЕГРН. Включает текстовую и графическую части с описанием границ, площади и других характеристик участка.',
    },
    {
      term: 'Технический план',
      definition:
        'Документ, содержащий информацию о здании, сооружении, помещении, объекте незавершенного строительства или другом объекте недвижимости. Подготавливается для постановки объекта на кадастровый учет или внесения изменений в сведения ЕГРН.',
    },
    {
      term: 'ЕГРН',
      definition:
        'Единый государственный реестр недвижимости — федеральный информационный ресурс, содержащий достоверные систематизированные сведения об учтенном недвижимом имуществе, правах на него, сведения о границах и других объектах.',
    },
    {
      term: 'Акт обследования',
      definition:
        'Документ, подтверждающий прекращение существования объекта недвижимости в случае его сноса, разрушения или гибели. Составляется кадастровым инженером для снятия объекта с кадастрового учета.',
    },
    {
      term: 'Росреестр',
      definition:
        'Федеральная служба государственной регистрации, кадастра и картографии — федеральный орган исполнительной власти, осуществляющий функции по государственной регистрации прав на недвижимое имущество и сделок с ним, ведению ЕГРН и государственному кадастровому учету.',
    },
    {
      term: 'Земельный участок',
      definition:
        'Часть земной поверхности, границы которой определены в соответствии с законодательством. Является объектом недвижимого имущества и учитывается в ЕГРН с присвоением кадастрового номера.',
    },
    {
      term: 'Кадастровая стоимость',
      definition:
        'Стоимость объекта недвижимости, устанавливаемая для целей налогообложения и определяемая путем проведения государственной кадастровой оценки. Сведения о кадастровой стоимости содержатся в ЕГРН.',
    },
    {
      term: 'Межевание',
      definition:
        'Комплекс работ по установлению и закреплению границ земельного участка, определению его площади и местоположения, а также подготовке документов для государственного кадастрового учета.',
    },
    {
      term: 'Выписка из ЕГРН',
      definition:
        'Документ, содержащий сведения об объекте недвижимости из Единого государственного реестра недвижимости. Может содержать разные виды информации в зависимости от типа запрашиваемой выписки.',
    },
    {
      term: 'Публичная кадастровая карта',
      definition:
        'Справочно-информационный сервис Росреестра, предоставляющий общедоступные сведения ЕГРН в графическом виде на картографической основе. Позволяет получить информацию о земельных участках, зданиях, границах и других объектах.',
    },
    {
      term: 'Вид разрешенного использования',
      definition:
        'Установленное в соответствии с законодательством разрешение на использование земельного участка определенным способом (для сельскохозяйственного производства, жилищного строительства, торговли и т.д.).',
    },
    {
      term: 'Градостроительный регламент',
      definition:
        'Устанавливаемые в пределах границ соответствующей территориальной зоны виды разрешенного использования земельных участков, равно как всего, что находится над и под поверхностью земельных участков, предельные размеры земельных участков и предельные параметры разрешенного строительства.',
    },
    {
      term: 'Дачная амнистия',
      definition:
        'Упрощенный порядок оформления прав граждан на отдельные объекты недвижимого имущества. Позволяет зарегистрировать права на земельные участки, жилые дома, садовые дома, гаражи и хозяйственные постройки по упрощенной схеме.',
    },
    {
      term: 'Объект капитального строительства',
      definition:
        'Здание, строение, сооружение, объекты, строительство которых не завершено, за исключением некапитальных строений, сооружений и неотделимых улучшений земельного участка.',
    },
    {
      term: 'Реестровая ошибка',
      definition:
        'Ошибка в записях ЕГРН, которая содержится в межевом плане, техническом плане, карте-плане территории или акте обследования, возникшая вследствие ошибки в документах, на основании которых вносились сведения в ЕГРН.',
    },
    {
      term: 'Техническая ошибка',
      definition:
        'Ошибка в записях ЕГРН, допущенная органом регистрации прав при осуществлении государственного кадастрового учета и (или) государственной регистрации прав, которая приводит к несоответствию сведений, содержащихся в ЕГРН, сведениям, содержащимся в документах, на основании которых вносились сведения в ЕГРН.',
    },
    {
      term: 'Условный номер',
      definition:
        'Идентификатор объекта недвижимости, который присваивался до введения кадастрового учета. В настоящее время заменен кадастровым номером.',
    },
    {
      term: 'Чересполосица',
      definition:
        'Расположение земельного участка, при котором он состоит из нескольких обособленных частей, разделенных чужими землями. Чересполосица считается недостатком в расположении земель и подлежит устранению.',
    },
  ],
  relatedLinks: [
    {
      title: 'Полезные ресурсы',
      links: [
        {
          text: 'Официальный сайт Росреестра',
          url: '#rosreestr', // Заглушка для ссылки
          icon: 'i-heroicons-building-office-2',
        },
        {
          text: 'Публичная кадастровая карта',
          url: '#pkk', // Заглушка для ссылки
          icon: 'i-heroicons-map',
        },
        {
          text: 'Справочник кадастрового инженера',
          url: '/information/docs', // Заглушка для ссылки
          icon: 'i-heroicons-book-open',
        },
      ],
    },
  ],
  contactCta: {
    title: 'Остались вопросы по терминологии?',
    description:
      'Наши специалисты готовы ответить на любые вопросы о кадастровой деятельности и помочь с оформлением документов.',
    buttonText: 'Задать вопрос',
    buttonLink: '/request',
  },
};
