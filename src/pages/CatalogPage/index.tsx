import { useProducts } from '@/api/useProducts';
import ProductCard from '@/components/ProductCard';

import styles from './styles.module.scss';

function CatalogPage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Ошибка загрузки товаров</div>;
  }

  return (
    <div className={styles.catalog}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CatalogPage;
