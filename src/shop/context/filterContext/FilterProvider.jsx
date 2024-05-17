import { useFilters } from '../../hooks/useFilters';
import { FilterContext } from './FiltersContext';

// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
  const { filters, setFilters, filterProducts, setMinPrice, setCategory } =
    useFilters();

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, filterProducts, setMinPrice, setCategory }}>
      {children}
    </FilterContext.Provider>
  );
};
