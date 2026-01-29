import styles from './styles.module.scss';
import { ButtonSize, ButtonType } from './types';

export default function Button({
  type,
  size = ButtonSize.BIG,
  onClick,
  children,
  disabled,
}: ButtonType) {
  return (
    <>
      <button
        className={`${styles[type]} ${styles.button} ${styles[size]}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}
