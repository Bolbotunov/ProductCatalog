import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

function EmptyState({ children }: PropsWithChildren) {
  return (
    <div className={styles.empty}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default EmptyState;
