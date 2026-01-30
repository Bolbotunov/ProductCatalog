import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PageRoutes } from '../App/types';
import Burger from '../Burger';
import { CartIcon } from '../CartIcon';
import Navigation from '../Navigation';
import ThemeSwitcher from '../ThemeSwitcher';
import styles from './styles.module.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuState = (state: boolean) => () => setIsOpen(state);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <h1 className={styles['header__logo']}>P.Catalog</h1>
        <div className={styles['header__cart-mobile']}>
          <NavLink to={PageRoutes.CART_PAGE}>
            <CartIcon />
          </NavLink>
        </div>
        <div
          className={`${styles['header__nav']} ${isOpen ? styles['header__nav--open'] : ''}`}
        >
          <Navigation closeMenu={handleMenuState(false)} />
        </div>
        <ThemeSwitcher />
        <Burger isOpen={isOpen} onClick={handleMenuState(!isOpen)} />
      </div>
    </header>
  );
}

export default Header;
