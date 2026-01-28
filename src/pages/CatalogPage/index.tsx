import { useState } from 'react';

import { useProducts } from '@/api/useProducts';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import { COUNT_CARDS_PAGE } from '@/constants';

import styles from './styles.module.scss';

function CatalogPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useProducts();

  const start = (page - 1) * COUNT_CARDS_PAGE;
  const end = start + COUNT_CARDS_PAGE;

  const paginatedProducts = data?.slice(start, end) ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Ошибка загрузки товаров</div>;
  }

  return (
    <>
      <div className={styles.catalog}>
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        total={data.length}
        perPage={COUNT_CARDS_PAGE}
        current={page}
        onChange={(p) => {
          setPage(p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
}

export default CatalogPage;
