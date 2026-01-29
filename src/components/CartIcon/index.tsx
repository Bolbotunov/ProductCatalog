import { useCart } from '@/hooks/useCart';

import styles from './styles.module.scss';

export function CartIcon() {
  const { totalQuantity } = useCart();

  return (
    <div className={styles.wrapper}>
      🛒
      <span className={styles['wrapper__badge']}>{totalQuantity || 0}</span>
    </div>
  );
}
