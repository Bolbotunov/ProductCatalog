import { URL_API } from '@/constants';
import { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`${URL_API}products`);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data: Product[] = await res.json();

      return data.map((p) => ({
        ...p,
        isInStock: Math.random() > 0.2,
      }));
    },
  });
}
