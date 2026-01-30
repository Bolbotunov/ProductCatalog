import { PropsWithChildren, useEffect, useState } from 'react';

import { THEME_KEY } from '@/constants';
import ThemeContext from '@/context/ThemeContext';
import { AppTheme } from '@/types';
import localStorageUtils from '@/utils/localStorageUtils';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(() =>
    localStorageUtils.getItem(THEME_KEY, AppTheme.Light),
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === AppTheme.Dark ? AppTheme.Light : AppTheme.Dark;
      localStorageUtils.setItem(THEME_KEY, nextTheme);

      return nextTheme;
    });
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
