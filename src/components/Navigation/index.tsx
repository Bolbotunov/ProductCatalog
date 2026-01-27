import { NavLink } from 'react-router-dom';

import { routesConfig } from '@/constants';

import styles from './styles.module.scss';

interface NavigationProps {
  closeMenu: () => void;
}

function Navigation({ closeMenu }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__list']}>
        {routesConfig.map(
          ({ path, label }) =>
            label && (
              <li key={path} className={styles['nav__item']}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `${styles['nav__link']} ${isActive ? styles['nav__link--active'] : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
