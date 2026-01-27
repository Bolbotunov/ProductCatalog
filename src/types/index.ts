export enum AppTheme {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

export type ThemeProps = {
  toggleTheme: () => void;
  theme: string;
};

export enum PageRoutes {
  CATALOG_PAGE = '/',
  CART_PAGE = '/cart',
  NOTFOUND_PAGE = '*',
}
