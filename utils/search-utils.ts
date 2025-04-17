// utils/search-utils.ts
import type { SearchResultItemType, GroupedResults } from '~/utils/types/search';

// Выполняет поиск по базе данных
export function performSearch(
  database: SearchResultItemType[],
  query: string,
  maxResults = 20
): SearchResultItemType[] {
  if (!query || query.trim() === '') {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  const results = database
    .map((item) => {
      // Поиск по всем полям и ключевым словам
      const searchableText = [
        item.title.toLowerCase(),
        item.description.toLowerCase(),
        item.category.toLowerCase(),
        ...(item.keywords || []).map((kw) => kw.toLowerCase()),
      ].join(' ');

      // Рассчитываем релевантность
      let relevance = 0;

      // Проверяем каждое слово запроса
      queryWords.forEach((word) => {
        // Для точного соответствия - больший вес
        if (searchableText.includes(word)) {
          relevance += 2;

          // Еще больший вес, если слово в заголовке
          if (item.title.toLowerCase().includes(word)) {
            relevance += 3;
          }

          // Дополнительный вес, если слово есть в ключевых словах
          if (item.keywords?.some((kw) => kw.toLowerCase().includes(word))) {
            relevance += 1;
          }
        }
      });

      // Точное совпадение полной фразы имеет наивысший приоритет
      if (searchableText.includes(normalizedQuery)) {
        relevance += 5;
      }

      return { item, relevance };
    })
    .filter((result) => result.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxResults)
    .map((result) => result.item);

  return results;
}

// Группирует результаты поиска по категориям
export function groupResultsByCategory(results: SearchResultItemType[]): GroupedResults {
  return results.reduce<GroupedResults>((grouped, item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
    return grouped;
  }, {});
}

// Подсвечивает найденный текст в строке
export function highlightText(text: string, query: string): string {
  if (!query || query.trim() === '') {
    return text;
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/).filter((word) => word.length > 1);

  if (queryWords.length === 0) {
    return text;
  }

  let highlightedText = text;

  queryWords.forEach((word) => {
    const regex = new RegExp(`(${word})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
  });

  return highlightedText;
}

// Создает функцию с задержкой вызова (debounce)
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
}

// Сохраняет историю поиска в локальное хранилище
export function saveSearchHistory(query: string): void {
  if (!query || query.trim() === '') {
    return;
  }

  const normalizedQuery = query.trim();

  if (import.meta.client) {
    try {
      // Получаем текущую историю поиска
      const history = JSON.parse(localStorage.getItem('searchHistory') || '[]') as string[];

      // Если запрос уже есть в истории, удаляем его (чтобы добавить в начало)
      const updatedHistory = history.filter((item) => item !== normalizedQuery);

      // Добавляем запрос в начало истории
      updatedHistory.unshift(normalizedQuery);

      // Ограничиваем историю 10 последними запросами
      const limitedHistory = updatedHistory.slice(0, 10);

      // Сохраняем обновленную историю
      localStorage.setItem('searchHistory', JSON.stringify(limitedHistory));
    } catch (error) {
      console.error('Ошибка при сохранении истории поиска:', error);
    }
  }
}

// Получает историю поиска из локального хранилища
export function getSearchHistory(): string[] {
  if (import.meta.client) {
    try {
      return JSON.parse(localStorage.getItem('searchHistory') || '[]') as string[];
    } catch (error) {
      console.error('Ошибка при получении истории поиска:', error);
      return [];
    }
  }
  return [];
}

// Очищает историю поиска
export function clearSearchHistory(): void {
  if (import.meta.client) {
    try {
      localStorage.removeItem('searchHistory');
    } catch (error) {
      console.error('Ошибка при очистке истории поиска:', error);
    }
  }
}
