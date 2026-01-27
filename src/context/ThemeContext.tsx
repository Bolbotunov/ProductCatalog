import { createContext } from 'react';

import { AppTheme, ThemeProps } from '@/types';

const defaultValue: ThemeProps = {
  toggleTheme: () => {},
  theme: AppTheme.Dark,
};

const ThemeContext = createContext<ThemeProps>(defaultValue);
export default ThemeContext;
