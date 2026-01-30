import cardStyles from '../ProductCard/styles.module.scss';
import styles from './styles.module.scss';

function Skeleton() {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles['card__image-wrapper']}>
        <div className={styles.skeletonImage} />
      </div>
      <div className={cardStyles['card__content']}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonDescription} />
        <div className={cardStyles['card__footer']}>
          <div className={styles.skeletonPrice} />
          <div className={styles.skeletonStock} />
        </div>
        <div className={styles.skeletonButton} />
      </div>
    </div>
  );
}

export default Skeleton;
