import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/store/cartSlice';

import Button from '../Button';
import { ButtonTypes } from '../Button/types';
import styles from './styles.module.scss';

interface CartProductCardProps {
  item: CartItem;
}

function CartProductCard({ item }: CartProductCardProps) {
  const { increase, decrease, removeItem } = useCart();
  const { id, quantity, title, price, image } = item;
  const handleDecreaseCount = () => decrease(id);
  const handleIncreaseCount = () => increase(id);
  const handleRemoveItem = () => removeItem(id);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
        <div className={styles.controls}>
          <Button type={ButtonTypes.COUNTER} onClick={handleDecreaseCount}>
            -
          </Button>
          <span className={styles.count}>{quantity}</span>
          <Button type={ButtonTypes.COUNTER} onClick={handleIncreaseCount}>
            +
          </Button>
        </div>
      </div>
      <Button type={ButtonTypes.CANCEL} onClick={handleRemoveItem}>
        Delete
      </Button>
    </div>
  );
}

export default CartProductCard;
