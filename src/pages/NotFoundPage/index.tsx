import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import { ButtonTypes } from '@/components/Button/types';
import EmptyState from '@/components/EmptyState';

import styles from './styles.module.scss';

function NotFoundPage() {
  const navigate = useNavigate();
  const returnHomeHandler = () => navigate('/');

  return (
    <EmptyState>
      <div className={styles.wrapper}>
        <p>404</p>
        <p>Oops! Page not found.</p>
        <Button type={ButtonTypes.APPLY} onClick={returnHomeHandler}>
          Go to catalog
        </Button>
      </div>
    </EmptyState>
  );
}

export default NotFoundPage;
