import { Product } from '@/types';

export function filterProducts(products: Product[], debouncedSearch: string) {
  const query = debouncedSearch.trim().toLowerCase();

  return query
    ? products.filter((p) => p.title.toLowerCase().includes(query))
    : products;
}
