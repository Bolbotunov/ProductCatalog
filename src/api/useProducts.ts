import {
  CACHE_TIME_HOURS,
  ENDPOINT_CATEGORY,
  ENDPOINT_PRODUCT,
} from '@/constants';
import { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';

import { getResponse } from './getResponse';

async function fetchProducts(category: string) {
  const path =
    category === 'all' ? ENDPOINT_PRODUCT : `${ENDPOINT_CATEGORY}${category}`;
  const data = await getResponse<Product[]>(path);

  return data.map((p) => ({ ...p, isInStock: Math.random() > 0.2 }));
}

export function useProducts(category: string) {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProducts(category),
    gcTime: CACHE_TIME_HOURS,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
