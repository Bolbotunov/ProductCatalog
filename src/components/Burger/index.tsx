import styles from './styles.module.scss';

interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

function Burger({ isOpen, onClick }: BurgerProps) {
  return (
    <button className={styles.burger} onClick={onClick}>
      <span className={`${styles.line} ${isOpen ? styles.open : ''}`} />
    </button>
  );
}

export default Burger;
