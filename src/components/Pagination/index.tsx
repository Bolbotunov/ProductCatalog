import styles from './styles.module.scss';

interface PaginationProps {
  total: number;
  perPage: number;
  current: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  total,
  perPage,
  current,
  onChange,
}: PaginationProps) {
  const countPages = Math.ceil(total / perPage);
  const paginationBtns = Array.from({ length: countPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {paginationBtns.map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`${styles.pageButton} ${page === current ? styles.active : ''}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
