import { URL_API } from '@/constants';

export async function getResponse<T>(path: string): Promise<T> {
  const res = await fetch(`${URL_API}${path}`);
  if (!res.ok) {
    throw new Error('Request failed');
  }

  return res.json();
}
