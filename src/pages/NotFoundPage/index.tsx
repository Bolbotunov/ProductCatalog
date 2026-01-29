import EmptyState from '@/components/EmptyState';

import styles from './styles.module.scss';

function NotFoundPage() {
  return (
    <EmptyState>
      <div className={styles.wrapper}>
        <p>404</p>
        <p>Oops! Page not found.</p>
      </div>
    </EmptyState>
  );
}

export default NotFoundPage;
