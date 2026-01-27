import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <p className={styles['footer__logo']}>P.Catalog</p>
        <p>made by Bolbotunov © 2026 / All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
