import ThemeSwitcher from '../ThemeSwitcher';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <h1>PRODUCT CATALOG</h1>

        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
