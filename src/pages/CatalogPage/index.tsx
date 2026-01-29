import CatalogFilters from '@/components/CatalogFilters';
import EmptyState from '@/components/EmptyState';
import ErrorFallback from '@/components/ErrorFallback';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import Skeleton from '@/components/Skeleton';
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
    error,
    refetch,
    setCategory,
    setSort,
    setPage,
    handleSearchChange,
  } = useCatalog();

  if (isError) {
    return <ErrorFallback error={error} onRetry={() => refetch()} />;
  }

  if (isLoading) {
    return (
      <div className={styles.catalog}>
        {Array.from({ length: COUNT_CARDS_PAGE }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

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
        <EmptyState>We don't have such products</EmptyState>
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
