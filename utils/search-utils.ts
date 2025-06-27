// utils/search-utils.ts
import type {
  GroupedResults,
  SearchResultItemType,
} from "~/utils/types/search";
// Ограничиваем размер localStorage для предотвращения утечек
const MAX_HISTORY_SIZE = 5; // Уменьшили с 10 до 5
const MAX_QUERY_LENGTH = 100; // Ограничиваем длину запросов

// Кеш для localStorage с автоочисткой
let historyCache: string[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 30000; // 30 секунд
// Выполняет поиск по базе данных
export function performSearch(
  database: SearchResultItemType[],
  query: string,
  maxResults = 20
): SearchResultItemType[] {
  if (!query || query.trim() === "") {
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
      ].join(" ");

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
export function groupResultsByCategory(
  results: SearchResultItemType[]
): GroupedResults {
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
  if (!query || query.trim() === "") {
    return text;
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter((word) => word.length > 1);

  if (queryWords.length === 0) {
    return text;
  }

  let highlightedText = text;

  queryWords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlightedText = highlightedText.replace(regex, "<mark>$1</mark>");
  });

  return highlightedText;
}

// Создает функцию с задержкой вызова (debounce)
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
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
  if (!query || query.trim() === "" || query.length > MAX_QUERY_LENGTH) {
    return;
  }

  const normalizedQuery = query.trim();

  // Только на клиенте и не в SSR
  if (!import.meta.client || import.meta.server) {
    return;
  }

  try {
    // Используем кеш для уменьшения обращений к localStorage
    let history: string[];
    const now = Date.now();

    if (historyCache && now - cacheTimestamp < CACHE_TTL) {
      history = [...historyCache];
    } else {
      history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
      historyCache = history;
      cacheTimestamp = now;
    }

    // Проверяем валидность истории
    if (!Array.isArray(history)) {
      history = [];
    }

    // Фильтруем невалидные элементы
    history = history.filter(
      (item) =>
        typeof item === "string" &&
        item.length > 0 &&
        item.length <= MAX_QUERY_LENGTH
    );

    // Если запрос уже есть, удаляем его
    const updatedHistory = history.filter((item) => item !== normalizedQuery);

    // Добавляем в начало
    updatedHistory.unshift(normalizedQuery);

    // Ограничиваем размер
    const limitedHistory = updatedHistory.slice(0, MAX_HISTORY_SIZE);

    // Сохраняем только если есть изменения
    if (JSON.stringify(limitedHistory) !== JSON.stringify(history)) {
      localStorage.setItem("searchHistory", JSON.stringify(limitedHistory));
      // Обновляем кеш
      historyCache = limitedHistory;
      cacheTimestamp = Date.now();
    }
  } catch (error) {
    console.error("Search history save error:", error);
    // При ошибке очищаем кеш
    historyCache = null;
    try {
      localStorage.removeItem("searchHistory");
    } catch (e) {
      // Ignore cleanup errors
    }
  }
}

// Получает историю поиска из локального хранилища
export function getSearchHistory(): string[] {
  if (!import.meta.client || import.meta.server) {
    return [];
  }

  try {
    // Используем кеш
    const now = Date.now();
    if (historyCache && now - cacheTimestamp < CACHE_TTL) {
      return [...historyCache];
    }

    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");

    if (!Array.isArray(history)) {
      return [];
    }

    // Фильтруем и валидируем
    const validHistory = history
      .filter(
        (item) =>
          typeof item === "string" &&
          item.length > 0 &&
          item.length <= MAX_QUERY_LENGTH
      )
      .slice(0, MAX_HISTORY_SIZE);

    // Обновляем кеш
    historyCache = validHistory;
    cacheTimestamp = now;

    return validHistory;
  } catch (error) {
    console.error("Search history get error:", error);
    historyCache = null;
    return [];
  }
}

// Очищает историю поиска
export function clearSearchHistory(): void {
  if (!import.meta.client || import.meta.server) {
    return;
  }

  try {
    localStorage.removeItem("searchHistory");
    historyCache = null;
    cacheTimestamp = 0;
  } catch (error) {
    console.error("Search history clear error:", error);
  }
}

// Очистка при выгрузке страницы
if (import.meta.client) {
  window.addEventListener("beforeunload", () => {
    // Очищаем кеш
    historyCache = null;

    // Если localStorage стал слишком большим, очищаем
    try {
      const historySize = localStorage.getItem("searchHistory")?.length || 0;
      if (historySize > 1000) {
        // Если больше 1KB
        localStorage.removeItem("searchHistory");
      }
    } catch (e) {
      // Ignore errors
    }
  });
}
