import { Product } from '@/types';

import Button from '../Button';
import { ButtonTypes } from '../Button/types';
import styles from './styles.module.scss';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const { title, description, price, isInStock, image } = product;

  return (
    <div className={styles.card}>
      <div className={styles['card__image-wrapper']}>
        <img src={image} alt={title} className={styles['card__image']} />
      </div>
      <div className={styles['card__content']}>
        <h2 className={styles['card__title']}>{title}</h2>
        <p className={styles['card__description']}>{description}</p>
        <div className={styles['card__footer']}>
          <span className={styles['card__price']}>${price}</span>
          <span
            className={`${styles['card__stock-status']} ${
              isInStock
                ? styles['card__stock-status--available']
                : styles['card__stock-status--unavailable']
            }`}
          >
            {isInStock ? 'in stock' : 'out of stock'}
          </span>
        </div>
        <Button
          type={ButtonTypes.APPLY}
          onClick={() => console.log(1)}
          disabled={!isInStock}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
