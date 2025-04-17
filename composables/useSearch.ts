// composables/useSearch.ts
import { ref, computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '~/stores/searchStore';
import type { SearchResultItemType } from '~/utils/types/search';

export function useSearch() {
  const searchStore = useSearchStore();

  // Реактивные состояния из стора
  const {
    isOpen,
    searchTerm,
    isLoading,
    results,
    groupedResults,
    hasResults,
    totalResults,
    activeCategory,
    activeItemIndex,
    options,
  } = storeToRefs(searchStore);

  // Открыть/закрыть поиск
  const openSearch = () => searchStore.openSearch();
  const closeSearch = () => searchStore.closeSearch();

  // Очистить поиск
  const clearSearch = () => searchStore.clearSearch();

  // Выполнить поиск с опциональным термином
  const search = (term?: string) => {
    if (term !== undefined) {
      searchStore.searchTerm = term;
    }
    searchStore.performSearch();
  };

  // Выбрать результат
  const selectResult = (item: SearchResultItemType) => {
    return searchStore.selectSearchResult(item);
  };

  // История
  const history = computed(() => searchStore.history);
  const clearHistory = () => searchStore.clearHistory();
  const useSearchTerm = (term: string) => searchStore.useSearchTerm(term);

  // Навигация с клавиатуры
  const navigateNext = () => searchStore.navigateNext();
  const navigatePrev = () => searchStore.navigatePrev();
  const getActiveItem = () => searchStore.getActiveItem();

  return {
    // Состояния
    isOpen,
    searchTerm,
    isLoading,
    results,
    groupedResults,
    hasResults,
    totalResults,
    activeCategory,
    activeItemIndex,
    options,
    history,

    // Методы
    openSearch,
    closeSearch,
    clearSearch,
    search,
    selectResult,
    clearHistory,
    useSearchTerm,
    navigateNext,
    navigatePrev,
    getActiveItem,
  };
}
