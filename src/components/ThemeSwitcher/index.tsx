import { useContext } from 'react';

import { LIGHT_THEME } from '@/constants';
import ThemeContext from '@/context/ThemeContext';

import styles from './styles.module.scss';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLightTheme = theme === LIGHT_THEME;

  return (
    <label className={styles.wrapper}>
      <input
        className={styles.wrapperInput}
        type="checkbox"
        checked={isLightTheme}
        onChange={toggleTheme}
      />
      <span className={styles.slider} />
    </label>
  );
}

export default ThemeSwitcher;
