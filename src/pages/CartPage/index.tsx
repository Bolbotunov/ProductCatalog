import CartProductCard from '@/components/CartProductCard';
import { useCart } from '@/hooks/useCart';

import styles from './styles.module.scss';

function CartPage() {
  const { items, totalAmount } = useCart();

  if (items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartProductCard key={item.id} item={item} />
      ))}

      <p className={styles.total}>Total: ${totalAmount.toFixed(2)}</p>
    </div>
  );
}

export default CartPage;
