// utils/breadcrumb-utils.ts
import type { BreadcrumbItem } from '~/utils/types/breadcrumbs';

// Маппинг путей к более дружественным названиям
// Используется для автоматической генерации названий хлебных крошек
export const defaultRouteNameMap: Record<string, string> = {
  services: 'Услуги',
  'land-survey': 'Кадастровые работы в отношении земельных участков',
  'land-boundary': 'Уточнение границ земельного участка',
  'land-division': 'Раздел земельных участков',
  'land-union': 'Объединение земельных участков',
  'land-redistribution': 'Перераспределение земельного участка',
  'land-formation': 'Формирование земельного участка',
  'land-allocation': 'Выдел земельной доли',
  'technical-plans': 'Технические планы',
  house: 'Технический план дома',
  building: 'Технический план здания',
  room: 'Технический план помещения',
  construction: 'Технический план сооружения',
  'part-building': 'Технический план части здания',
  'construction-in-progress': 'Технический план ОНС',
  'cadastral-register': 'Постановка на кадастровый учет',
  'property-rights': 'Оформление прав собственности',
  'error-correction': 'Исправление кадастровых ошибок',
  'cadastral-excerpts': 'Кадастровые выписки и справки',
  information: 'Информация',
  faq: 'Часто задаваемые вопросы',
  laws: 'Законодательство',
  docs: 'Документы',
  blog: 'Блог',
  about: 'О нас',
  contacts: 'Контакты',
  request: 'Оставить заявку',
  'privacy-policy': 'Политика конфиденциальности',
  glossary: 'Словарь',
  consultations: 'Консультации',
};

// Карта иконок для разделов сайта
// Используется для отображения соответствующих иконок в хлебных крошках
export const routeIconMap: Record<string, string> = {
  home: 'i-heroicons-home',
  services: 'i-heroicons-wrench-screwdriver',
  'land-survey': 'i-heroicons-map',
  'technical-plans': 'i-heroicons-document-text',
  information: 'i-heroicons-information-circle',
  blog: 'i-heroicons-newspaper',
  about: 'i-heroicons-users',
  contacts: 'i-heroicons-phone',
  request: 'i-heroicons-document-plus',
  'privacy-policy': 'i-heroicons-lock-closed',
  faq: 'i-heroicons-question-mark-circle',
  laws: 'i-heroicons-scale',
  docs: 'i-heroicons-document-duplicate',
};

// Маршруты, на которых не отображаются хлебные крошки
export const defaultExcludedRoutes = ['/', '/index', '/home'];

// Форматирует строку пути для отображения
// Превращает строки вида "path-to-route" в "Path To Route"
export function formatPathSegment(segment: string, nameMap?: Record<string, string>): string {
  // Сначала проверяем есть ли сопоставление в переданной карте имен
  if (nameMap && nameMap[segment]) {
    return nameMap[segment];
  }

  // Затем проверяем дефолтную карту имен
  if (defaultRouteNameMap[segment]) {
    return defaultRouteNameMap[segment];
  }

  // Если нет сопоставления, форматируем строку
  // Заменяем дефисы на пробелы и делаем первую букву каждого слова заглавной
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Генерирует массив хлебных крошек на основе текущего пути
export function generateBreadcrumbs(
  path: string,
  homeText: string = 'Главная',
  nameMap?: Record<string, string>
): BreadcrumbItem[] {
  // Получаем сегменты пути, фильтруем пустые
  const pathSegments = path.split('/').filter((segment) => segment !== '');

  // Создаем массив для хлебных крошек
  const breadcrumbs: BreadcrumbItem[] = [];

  // Добавляем главную страницу
  breadcrumbs.push({
    label: homeText,
    path: '/',
    isLast: pathSegments.length === 0,
    icon: routeIconMap['home'],
  });

  // Генерируем остальные крошки на основе сегментов пути
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Форматируем название
    const label = formatPathSegment(segment, nameMap);

    // Добавляем крошку
    breadcrumbs.push({
      label,
      path: currentPath,
      isLast: index === pathSegments.length - 1,
      icon: routeIconMap[segment],
    });
  });

  return breadcrumbs;
}

// Проверяет, нужно ли показывать хлебные крошки на текущем маршруте
export function shouldShowBreadcrumbs(
  path: string,
  showOnHomePage: boolean = false,
  excludedRoutes: string[] = defaultExcludedRoutes
): boolean {
  // Проверяем, является ли текущий путь исключенным
  if (excludedRoutes.includes(path)) {
    return showOnHomePage;
  }

  // Если путь - главная страница, показываем в зависимости от настройки
  if (path === '/' || path === '/index' || path === '/home') {
    return showOnHomePage;
  }

  // В остальных случаях показываем хлебные крошки
  return true;
}
