// stores/searchStore.ts
import { defineStore } from "pinia";
import { defaultSearchOptions, searchDatabase } from "~/utils/data/search-data";
import {
  clearSearchHistory as clearHistoryUtil,
  getSearchHistory,
  groupResultsByCategory,
  performSearch,
  saveSearchHistory,
} from "~/utils/search-utils";
import type {
  GroupedResults,
  SearchOptions,
  SearchResultItemType,
} from "~/utils/types/search";

interface SearchState {
  isOpen: boolean;
  searchTerm: string;
  isLoading: boolean;
  results: SearchResultItemType[];
  activeCategory: number;
  activeItemIndex: number;
  options: SearchOptions;
  customSearchDatabase: SearchResultItemType[];
  searchHistory: string[];
  searchTimeout: NodeJS.Timeout | null;
  closeTimeout: NodeJS.Timeout | null;
}

export const useSearchStore = defineStore("search", {
  state: (): SearchState => ({
    isOpen: false,
    searchTerm: "",
    isLoading: false,
    results: [],
    activeCategory: -1,
    activeItemIndex: -1,
    options: { ...defaultSearchOptions },
    customSearchDatabase: [],
    searchHistory: [],
    searchTimeout: null as NodeJS.Timeout | null,
    closeTimeout: null as NodeJS.Timeout | null,
  }),

  getters: {
    // База данных для поиска
    activeSearchDatabase(): SearchResultItemType[] {
      return this.customSearchDatabase.length > 0
        ? this.customSearchDatabase
        : searchDatabase;
    },

    // Сгруппированные результаты
    groupedResults(): GroupedResults {
      if (!this.results.length) return {};
      return groupResultsByCategory(this.results);
    },

    hasResults(): boolean {
      return this.results.length > 0;
    },

    resultCategories(): string[] {
      return Object.keys(this.groupedResults);
    },

    totalResults(): number {
      return this.results.length;
    },

    // История поиска
    history(): string[] {
      if (this.searchHistory.length === 0 && import.meta.client) {
        this.searchHistory = getSearchHistory();
      }
      return this.searchHistory;
    },
  },

  actions: {
    // UI действия
    openSearch() {
      this.isOpen = true;
      // Обновляем историю при открытии
      if (import.meta.client) {
        this.searchHistory = getSearchHistory();
      }
    },

    closeSearch() {
      this.isOpen = false;

      // Очищаем предыдущий таймер
      this.clearTimeouts();

      this.closeTimeout = setTimeout(() => {
        this.searchTerm = "";
        this.results = [];
        this.resetNavigation();
        this.closeTimeout = null; // Очищаем ссылку
      }, 300);
    },

    clearSearch() {
      this.searchTerm = "";
      this.results = [];
      this.resetNavigation();
    },

    // Поиск
    useSearchTerm(term: string) {
      this.searchTerm = term;
      this.performSearch();
    },

    performSearch() {
      const term = this.searchTerm;

      if (!term || term.length < (this.options.minQueryLength || 2)) {
        this.results = [];
        this.isLoading = false;
        this.resetNavigation();
        return;
      }

      this.isLoading = true;

      // Очищаем предыдущий таймер поиска
      this.clearTimeouts();

      this.searchTimeout = setTimeout(() => {
        this.results = performSearch(this.activeSearchDatabase, term);
        this.isLoading = false;
        this.searchTimeout = null; // Очищаем ссылку
      }, 150); // Уменьшили задержку
    },

    // Метод для полной очистки при unmount
    cleanup() {
      this.clearTimeouts();
      this.results = [];
      this.searchHistory = [];
      this.searchTerm = "";
      this.isOpen = false;
    },

    // Выбор результата
    selectSearchResult(item: SearchResultItemType) {
      // Сохраняем запрос в истории
      if (this.searchTerm) {
        saveSearchHistory(this.searchTerm);
        this.refreshHistory();
      }

      // Закрываем поиск
      this.closeSearch();

      return item;
    },

    // Навигация
    resetNavigation() {
      this.activeCategory = -1;
      this.activeItemIndex = -1;
    },

    navigateNext() {
      if (!this.hasResults) return;

      const categories = this.resultCategories;
      if (categories.length === 0) return;

      // Если нет активной категории, выбираем первую
      if (this.activeCategory === -1) {
        this.activeCategory = 0;
        this.activeItemIndex = 0;
        return;
      }

      const currentCategory = categories[this.activeCategory];
      const items = this.groupedResults[currentCategory];

      // Если в текущей категории есть следующий элемент
      if (this.activeItemIndex < items.length - 1) {
        this.activeItemIndex++;
        return;
      }

      // Иначе переходим к следующей категории
      if (this.activeCategory < categories.length - 1) {
        this.activeCategory++;
        this.activeItemIndex = 0;
        return;
      }

      // Циклический переход в начало
      this.activeCategory = 0;
      this.activeItemIndex = 0;
    },

    navigatePrev() {
      if (!this.hasResults) return;

      const categories = this.resultCategories;
      if (categories.length === 0) return;

      // Если нет активной категории, выбираем последнюю
      if (this.activeCategory === -1) {
        this.activeCategory = categories.length - 1;
        const lastCategory = categories[this.activeCategory];
        this.activeItemIndex = this.groupedResults[lastCategory].length - 1;
        return;
      }

      // Если в текущей категории есть предыдущий элемент
      if (this.activeItemIndex > 0) {
        this.activeItemIndex--;
        return;
      }

      // Иначе переходим к предыдущей категории
      if (this.activeCategory > 0) {
        this.activeCategory--;
        const prevCategory = categories[this.activeCategory];
        this.activeItemIndex = this.groupedResults[prevCategory].length - 1;
        return;
      }

      // Циклический переход в конец
      this.activeCategory = categories.length - 1;
      const lastCategory = categories[this.activeCategory];
      this.activeItemIndex = this.groupedResults[lastCategory].length - 1;
    },

    getActiveItem(): SearchResultItemType | null {
      if (this.activeCategory === -1 || this.activeItemIndex === -1) {
        return null;
      }

      const category = this.resultCategories[this.activeCategory];
      const items = this.groupedResults[category];

      if (items && items[this.activeItemIndex]) {
        return items[this.activeItemIndex];
      }

      return null;
    },

    // История поиска
    refreshHistory() {
      if (import.meta.client) {
        this.searchHistory = getSearchHistory();
      }
    },

    clearHistory() {
      clearHistoryUtil();
      this.searchHistory = [];
    },

    // Настройки
    updateOptions(newOptions: Partial<SearchOptions>) {
      this.options = {
        ...this.options,
        ...newOptions,
      };
    },

    // Очистка всех таймеров
    clearTimeouts() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = null;
      }
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
    },

    setCustomSearchDatabase(database: SearchResultItemType[]) {
      this.customSearchDatabase = database;
    },
  },
});
