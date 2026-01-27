export enum AppTheme {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

export type ThemeProps = {
  toggleTheme: () => void;
  theme: string;
};
