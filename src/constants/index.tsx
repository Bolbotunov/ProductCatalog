import CartPage from '@/pages/CartPage';
import CatalogPage from '@/pages/CatalogPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { PageRoutes } from '@/types';

export const LIGHT_THEME = 'light-theme';
export const THEME_KEY = 'theme_key';

export const routesConfig = [
  { path: PageRoutes.CATALOG_PAGE, element: <CatalogPage />, label: 'Catalog' },
  {
    path: PageRoutes.CART_PAGE,
    element: <CartPage />,
    label: 'Cart',
  },
  { path: PageRoutes.NOTFOUND_PAGE, element: <NotFoundPage /> },
];
