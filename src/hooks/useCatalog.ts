import { useMemo, useState } from 'react';

import { useCategories } from '@/api/useCategories';
import { useProducts } from '@/api/useProducts';
import { ALL_CATEGORIES, COUNT_CARDS_PAGE, DEBOUNCE_DELAY } from '@/constants';
import { useDebounce } from '@/hooks/useDebounce';
import { SortOptions } from '@/types';
import { filterProducts } from '@/utils/filterProducts';
import { sortProducts } from '@/utils/sortProducts';

export function useCatalog() {
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOptions>(SortOptions.PriceUp);
  const [page, setPage] = useState(1);

  const { data: categories } = useCategories();
  const { data, isLoading, isError, error, refetch } = useProducts(category);

  const debouncedSearch = useDebounce(search, DEBOUNCE_DELAY);

  const processedProducts = useMemo(() => {
    if (!data) return [];
    const filtered = filterProducts(data, debouncedSearch);

    return sortProducts(filtered, sort);
  }, [data, debouncedSearch, sort]);

  const start = (page - 1) * COUNT_CARDS_PAGE;
  const paginated = processedProducts.slice(start, start + COUNT_CARDS_PAGE);

  const handleSearchChange = (value: string) => {
    const cleaned = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
    setSearch(cleaned);
    setPage(1);
  };

  return {
    categories,
    processedProducts,
    paginated,
    category,
    search,
    sort,
    page,
    isLoading,
    isError,
    error,
    refetch,
    setCategory: (value: string) => {
      setCategory(value);
      setPage(1);
    },
    setSort: (value: SortOptions) => {
      setSort(value);
      setPage(1);
    },
    setPage,
    handleSearchChange,
  };
}
