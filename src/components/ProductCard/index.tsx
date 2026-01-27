import styles from './styles.module.scss';

const mockProduct = {
  id: 1,
  title: 'Clear Glass',
  price: 19.99,
  description:
    'A beautiful clear glass ornament with a purple interior scene. Perfect for harmony and peace keeping this holiday season.',
  image: 'URL',
  isInStock: true,
};

function ProductCard() {
  const { title, price, description, image, isInStock } = mockProduct;

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
        <button disabled={!isInStock} className={styles['card__button']}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
