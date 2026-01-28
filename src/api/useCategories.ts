import { ALL_CATEGORIES, ENDPOINT_CATEGORIES } from '@/constants';
import { useQuery } from '@tanstack/react-query';

import { getResponse } from './getResponse';

async function fetchCategories() {
  const data = await getResponse<string[]>(ENDPOINT_CATEGORIES);

  return [ALL_CATEGORIES, ...data];
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
