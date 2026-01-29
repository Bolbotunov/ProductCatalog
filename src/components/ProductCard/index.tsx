import { useState } from 'react';

import { SUCCESS_DELAY } from '@/constants';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';

import Button from '../Button';
import { ButtonTypes } from '../Button/types';
import styles from './styles.module.scss';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { title, description, price, isInStock, image } = product;
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddProduct = (product: Product) => () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), SUCCESS_DELAY);
  };

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
          onClick={handleAddProduct(product)}
          disabled={!isInStock || added}
        >
          {added ? 'Added!' : 'Add to cart'}
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
