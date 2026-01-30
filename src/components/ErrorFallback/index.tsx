import Button from '../Button';
import { ButtonTypes } from '../Button/types';
import styles from './styles.module.scss';

type Props = {
  error: Error | null;
  onRetry: () => void;
};

function ErrorFallback({ error, onRetry }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles['wrapper__title']}>Something went Wrong</h1>
      <p className={styles.subtitle}>{error?.message}</p>
      <Button type={ButtonTypes.APPLY} onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
