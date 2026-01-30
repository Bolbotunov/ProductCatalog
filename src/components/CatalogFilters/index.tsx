import { SORT_OPTIONS } from '@/constants';
import { SortOptions } from '@/types';

import { Input } from '../Input';
import { Select } from '../Select';
import styles from './styles.module.scss';

type CatalogFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  sort: SortOptions;
  setSort: (value: SortOptions) => void;
  category: string;
  categories: string[];
  onCategoryChange: (value: string) => void;
};

const CatalogFilters = ({
  search,
  onSearchChange,
  sort,
  setSort,
  category,
  categories,
  onCategoryChange,
}: CatalogFiltersProps) => {
  const handleSortChange = (value: string) => {
    setSort(value as SortOptions);
  };

  return (
    <div className={styles.controlers}>
      <Input value={search} placeholder="Search..." onChange={onSearchChange} />

      <Select value={sort} onChange={handleSortChange} options={SORT_OPTIONS} />
      <Select
        value={category}
        onChange={onCategoryChange}
        options={categories}
      />
    </div>
  );
};

export default CatalogFilters;
