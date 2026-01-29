import CartPage from '@/pages/CartPage';
import CatalogPage from '@/pages/CatalogPage';
import NotFoundPage from '@/pages/NotFoundPage';

import { CartIcon } from '../CartIcon';
import { PageRoutes } from './types';

export const routesConfig = [
  {
    path: PageRoutes.CATALOG_PAGE,
    element: <CatalogPage />,
    label: 'Catalog',
  },
  {
    path: PageRoutes.CART_PAGE,
    element: <CartPage />,
    label: 'Cart',
    icon: <CartIcon />,
  },
  { path: PageRoutes.NOTFOUND_PAGE, element: <NotFoundPage /> },
];
