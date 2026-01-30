import { SortOptions } from '@/types';
import { Product } from '@/types';

export type SortFn = (a: Product, b: Product) => number;
export type SortMap = Record<SortOptions, SortFn>;

const sortMap: SortMap = {
  [SortOptions.PriceUp]: (a, b) => a.price - b.price,
  [SortOptions.PriceDown]: (a, b) => b.price - a.price,
  [SortOptions.TitleUp]: (a, b) => a.title.localeCompare(b.title),
  [SortOptions.TitleDown]: (a, b) => b.title.localeCompare(a.title),
};

export function sortProducts(products: Product[], sort: SortOptions) {
  return [...products].sort(sortMap[sort]);
}
