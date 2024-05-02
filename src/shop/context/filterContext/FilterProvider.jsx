import { FilterContext } from './FiltersContext';
import { useFilters } from '../../hooks/useFilters';

// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
  const { filters, setFilters, prodsFiltered } = useFilters();

  
  return (
    <FilterContext.Provider value={{ filters, setFilters, prodsFiltered }}>
      {children}
    </FilterContext.Provider>
  );
};
