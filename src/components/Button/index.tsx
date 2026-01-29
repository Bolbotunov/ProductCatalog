import styles from './styles.module.scss';
import { ButtonType } from './types';

export default function Button({
  type,
  onClick,
  children,
  disabled,
}: ButtonType) {
  return (
    <>
      <button
        className={`${styles[type]} ${styles.button}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}
