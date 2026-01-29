export enum AppTheme {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

export type ThemeProps = {
  toggleTheme: () => void;
  theme: string;
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isInStock?: boolean;
}

export enum SortOptions {
  PriceUp = 'Price ↑',
  PriceDown = 'Price ↓',
  TitleUp = 'Title A-Z',
  TitleDown = 'Title Z-A',
}
