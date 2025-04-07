import boundares from '~/assets/images/services/boundaries.jpg';
import landPlot from '~/assets/images/services/landPlot.jpg';
import geo from '~/assets/images/services/geo.jpg';
import techPlan from '~/assets/images/services/techPlan.jpg';
import zouit from '~/assets/images/services/zouit.jpg';

import selected from '~/assets/images/services/landPlot/selected.jpg';
import forming from '~/assets/images/services/landPlot/forming.jpg';
import chapter from '~/assets/images/services/landPlot/chapter.jpg';
import redistribution from '~/assets/images/services/landPlot/redistribution.jpg';
import correction from '~/assets/images/services/landPlot/correction.jpg';

import techPlanHouse from '~/assets/images/services/techPlan/tachplanhouse.jpg';
import act from '~/assets/images/services/techPlan/act.webp';
import garage from '~/assets/images/services/techPlan/garage.jpg';
import techPlanConstruction from '~/assets/images/services/techPlan/techPlanConstruction.jpg';
import techPlanFlat from '~/assets/images/services/techPlan/techplanflat.jpg';
import techPlanPart from '~/assets/images/services/techPlan/techPlanPart.jpg';

import topo from '~/assets/images/services/geo/topo.webp';
import gaz from '~/assets/images/services/geo/gaz.jpg';
import ispol from '~/assets/images/services/geo/ispol.jpg';
import points from '~/assets/images/services/geo/removing points.jpg';

import protectZone from '~/assets/images/services/ZOUIT/protectZone.jpg';
import saveZone from '~/assets/images/services/ZOUIT/saveZone.jpg';

import humanKad1 from '~/assets/images/content/kad-content-1.png';
import humanKad2 from '~/assets/images/content/kad-content-2.png';
import humanKad3 from '~/assets/images/content/kad-content-3.png';
import humanKad4 from '~/assets/images/content/kad-content-4.png';
import humanKad5 from '~/assets/images/content/kad-content-5.png';
import humanKad6 from '~/assets/images/content/kad-content-6.png';
import humanKad7 from '~/assets/images/content/kad-content-7.png';
import humanKad8 from '~/assets/images/content/kad-content-8.png';
import humanKad9 from '~/assets/images/content/kad-content-9.png';

interface ServiceItem {
  id: number;
  img?: string;
  label: string;
}

interface ServiceTypeItem {
  id: number;
  img?: string;
  label: string;
}

export const itemsForStepperServiceI: ServiceItem[] = [
  {
    id: 1,
    img: landPlot,
    label: 'Кадастровые работы в отношении земельного участка',
  },
  {
    id: 2,
    img: techPlan,
    label: 'Кадастровые работы в отношении дома, здания',
  },
  {
    id: 3,
    img: zouit,
    label: 'ЗОУИТ',
  },
  {
    id: 4,
    img: geo,
    label: 'Геодезические работы',
  },
];

const itemsForLandPlot: ServiceTypeItem[] = [
  {
    id: 1,
    img: correction,
    label: 'Уточнение границ земельного участка',
  },
  {
    id: 2,
    img: redistribution,
    label: 'Перераспределение земельного участка',
  },
  {
    id: 3,
    img: chapter,
    label: 'Раздел земельных участков',
  },
  {
    id: 4,
    img: chapter,
    label: 'Объединение земельных участков',
  },
  {
    id: 5,
    img: forming,
    label: 'Формирование земельного участка',
  },
  {
    id: 6,
    img: selected,
    label: 'Выдел земельной доли',
  },
];

const itemsForTechPlan: ServiceTypeItem[] = [
  {
    id: 1,
    img: techPlanHouse,
    label: 'Технический план дома',
  },
  {
    id: 2,
    img: techPlanFlat,
    label: 'Технический план квартиры',
  },
  {
    id: 3,
    img: techPlanPart,
    label: 'Технический план части здания',
  },
  {
    id: 4,
    img: techPlanConstruction,
    label: 'Технический план сооружения',
  },
  {
    id: 5,
    img: garage,
    label: 'Оформление гаража',
  },
  {
    id: 6,
    img: act,
    label: 'Акт обследования',
  },
];

const itemsForGeo: ServiceTypeItem[] = [
  {
    id: 1,
    img: topo,
    label: 'Топографическая съемка',
  },
  {
    id: 2,
    img: ispol,
    label: 'Исполнительная съемка',
  },
  {
    id: 3,
    img: points,
    label: 'Вынос точек в натуру',
  },
  {
    id: 4,
    img: gaz,
    label: 'Бесплатная газификация',
  },
];

const itemsForZOUIT: ServiceTypeItem[] = [
  {
    id: 1,
    img: protectZone,
    label: 'Санитарно-защитные зоны',
  },
  {
    id: 2,
    img: saveZone,
    label: 'Охранные зоны',
  },
];

export const objectTypesData = [
  { text: 'Земельный участок', value: 'land' },
  { text: 'Жилой дом', value: 'house' },
  { text: 'Квартира', value: 'apartment' },
  { text: 'Коммерческая недвижимость', value: 'commercial' },
  { text: 'Гараж', value: 'garage' },
  { text: 'Другое', value: 'other' },
];

// Объединенный массив типов услуг
export const itemsServiceI: ServiceTypeItem[][] = [itemsForLandPlot, itemsForTechPlan, itemsForZOUIT, itemsForGeo];

export const cityListI: string[] = [
  'Емца',
  'Верховский',
  'Бухалово',
  'Вершинино',
  'Горбачиха',
  'Горы',
  'Емельяновская',
  'Ершово',
  'Захарова',
  'Зехнова',
  'Карпова',
  'Качикова Горка',
  'Косицына',
  'Майлахта',
  'Минина',
  'Мыза',
  'Печихина',
  'Погост',
  'Поча',
  'Рыжково',
  'Ряпусовский Погост',
  'Семёново',
  'Сивцева',
  'Спицына',
  'Сысова',
  'Тамбич-Лахта',
  'Телицына',
  'Тырышкино',
  'Усть-Поча',
  'Федосова',
  'Шишкина',
  'Аверкиевская',
  'Волово',
  'Враниковская',
  'Ивановская',
  'Измайловская',
  'Караник',
  'Коровино',
  'Коровино',
  'Корякино',
  'Кузьминская',
  'Пёршлахта',
  'Поромское',
  'Рудниковская',
  'Самково',
  'Самково',
  'Степановская',
  'Авдотьино',
  'Антушевская',
  'Афанасовская',
  'Бабинская',
  'Бабкино',
  'Бережная Дуброва',
  'Боброво',
  'Верещагина',
  'Вознесенская',
  'Гаврилово',
  'Глуходворская',
  'Гоголево',
  'Горка',
  'Грязово',
  'Иваново',
  'Карельское',
  'Коковка',
  'Конёво',
  'Костино',
  'Красное',
  'Кувакино',
  'Кузнецова',
  'Курятовская',
  'Мартемьяновская',
  'Масталыга',
  'Мост',
  'Муравьево',
  'Надконецкая',
  'Нижняя',
  'Новая Кашникова',
  'Новины',
  'Пашевская',
  'Подкарельское',
  'Пожаровская',
  'Потылицинская',
  'Самылово',
  'Старая Кашникова',
  'Томихино',
  'Труфановская',
  'Часовенская',
  'Шейна',
  'Шелгачево',
  'Шуреньга',
  'Большая Кяма',
  'Великоозерский',
  'Летнеозерский',
  'Малиновка',
  'Малые Озерки',
  'Мошное',
  'Обозерский',
  'Первомайский',
  'Сосновка',
  'Уромец',
  'Швакино',
  'Щукозерье',
  'Булатово',
  'Гора',
  'Дениславье',
  'Казакова',
  'Коршакова',
  'Матвеевская',
  'Наволок',
  'Оксова',
  'Оксовский',
  'Польская',
  'Пустынька',
  'Росляковская Запань',
  'Тарасова',
  'Тетерина',
  'Фалево',
  'Хавдина',
  'Шиловская',
  'Плесецк',
  'Пукса',
  'Дедова Горка',
  'Кузьминка',
  'Нижнее Устье',
  'Першинская',
  'Преснецовская',
  'Строева Горка',
  'Филипповская',
  'Белое Озеро',
  'Пуксоозеро',
  '88-го квартала',
  'Кривозерко',
  'Река Емца',
  'Савинский',
  'Савинское',
  'Санатория Тимме',
  'Шелекса',
  'Шестово',
  'Самодед',
  'Икса',
  'Кармозерская',
  'Курлаевская',
  'Максимовская',
  'Осташкино',
  'Североонежск',
  'Строителей',
  'Алексеевская',
  'Бархатиха',
  'Блиниха',
  'Бородина',
  'Великий Двор',
  'Вересник',
  'Верхний Конец',
  'Горка',
  'Гришина',
  'Гусевская',
  'Еремеевская',
  'Заболото',
  'Кашина',
  'Конецгорье',
  'Королиха',
  'Креково',
  'Курка Гора',
  'Лейнема',
  'Масленникова',
  'Матнема',
  'Мишутиха',
  'Монастырь',
  'Наволок',
  'Низ',
  'Озаргина',
  'Перхина',
  'Пивка',
  'Плесо',
  'Подволочье(Мирный)',
  'Подволочье(Федово)',
  'Подволочье(Кенозеро)',
  'Подволочье(Североонежск)',
  'Подгорня',
  'Пресничиха',
  'Скрипово',
  'Средьпогост',
  'Степаниха',
  'Тарасиха',
  'Угол',
  'Фудякова',
  'Чубарова',
  'Юра-Гора',
  'Юрмала',
  'Якшина',
  'Гороховская',
  'Мезень',
  'Погост',
  'Скарлахта',
  'Ундозеро',
  'Янгоры',
  'Алфёрово',
  'Антроповская',
  'Богданово',
  'Бодухино',
  'Боярская',
  'Бураково',
  'Васильевская',
  'Горка',
  'Грязная',
  'Губино',
  'Закумихинская',
  'Зиново',
  'Зубово',
  'Иевлево',
  'Ириньино',
  'Корзово',
  'Коротаево',
  'Кузнецово',
  'Ленино',
  'Липаково',
  'Лужма',
  'Мануиловская',
  'Михалёво',
  'Мозолово',
  'Монастырская',
  'Ожбалово',
  'Погост',
  'Порозово',
  'Прохново',
  'Рублёво',
  'Сандрово',
  'Сеза',
  'Семёново',
  'Тарасово',
  'Федово',
  'Харлово',
  'Черноково',
  'Авангард',
  'Лиственичный',
  'Ломовое',
  'Малька',
  'Холмогорская',
  'Иг',
  'Улитино',
  'Ярнема',
];

// Функция для отправки данных на сервер
export const fetchStepper = async (body: any): Promise<Response> => {
  return await fetch('https://functions.yandexcloud.net/d4eqnehoehoieueo9ih9', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
