import { NavLink } from 'react-router-dom';

import { routesConfig } from '../App/routesConfig';
import styles from './styles.module.scss';

interface NavigationProps {
  closeMenu: () => void;
}

function Navigation({ closeMenu }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__list']}>
        {routesConfig.map(
          ({ path, label, icon }) =>
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
                  {icon && <span className={styles.icon}>{icon}</span>}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
