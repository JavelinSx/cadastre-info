// types/breadcrumbs.ts

// Интерфейс для элемента хлебных крошек
export interface BreadcrumbItem {
  // Текст, отображаемый в крошке
  label: string;

  // Путь для ссылки
  path: string;

  // Является ли элемент последним в цепочке
  isLast: boolean;

  // Иконка для элемента (опционально)
  icon?: string;
}

// Интерфейс для настроек компонента хлебных крошек
export interface BreadcrumbsOptions {
  // Показывать ли иконку "Домой" для главной страницы
  showHomeIcon: boolean;

  // Текст для главной страницы
  homeText: string;

  // Показывать ли разделитель между элементами
  showDivider: boolean;

  // Иконка для разделителя
  dividerIcon: string;

  // Показывать ли хлебные крошки на главной странице
  showOnHomePage: boolean;

  // Список страниц, на которых не нужно показывать хлебные крошки
  excludedRoutes: string[];

  // Пользовательские названия маршрутов
  routeNameMap: Record<string, string>;
}
