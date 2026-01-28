import CatalogFilters from '@/components/CatalogFilters';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import { COUNT_CARDS_PAGE } from '@/constants';
import { useCatalog } from '@/hooks/useCatalog';

import styles from './styles.module.scss';

function CatalogPage() {
  const {
    categories,
    processedProducts,
    paginated,
    category,
    search,
    sort,
    page,
    isLoading,
    isError,
    setCategory,
    setSort,
    setPage,
    handleSearchChange,
  } = useCatalog();

  if (isError) return <div>Ошибка загрузки товаров</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <CatalogFilters
        search={search}
        onSearchChange={handleSearchChange}
        sort={sort}
        setSort={setSort}
        category={category}
        categories={categories ?? []}
        onCategoryChange={setCategory}
      />

      {processedProducts.length === 0 ? (
        <div>We don't have such products</div>
      ) : (
        <>
          <div className={styles.catalog}>
            {paginated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            total={processedProducts.length}
            perPage={COUNT_CARDS_PAGE}
            current={page}
            onChange={(page) => {
              setPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </>
      )}
    </>
  );
}

export default CatalogPage;
