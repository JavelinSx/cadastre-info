// types/search.ts

// Интерфейс для элемента результатов поиска
export interface SearchResultItemType {
  title: string; // Заголовок результата
  description: string; // Описание
  url: string; // Ссылка для перехода
  category: string; // Категория для группировки результатов
  keywords?: string[]; // Дополнительные ключевые слова для поиска
}

// Интерфейс для сгруппированных результатов
export interface GroupedResults {
  [category: string]: SearchResultItemType[];
}

// Интерфейс для настроек поиска
export interface SearchOptions {
  debounceTime?: number; // Задержка перед поиском (в мс)
  minQueryLength?: number; // Минимальная длина строки для начала поиска
  maxResults?: number; // Максимальное количество результатов
  highlightResults?: boolean; // Подсвечивать ли результаты
}

// Интерфейс для популярных запросов
export interface PopularSearches {
  term: string;
  count: number;
}
