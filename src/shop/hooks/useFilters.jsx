import { useState } from 'react';

export const useFilters = () => {
  const initialState = {
    category: 'all',
    minPrice: 0,
  };
  const [filters, setFilters] = useState(initialState);

  console.log(filters.category);
  console.log(filters);
  const prodsFiltered = (products = []) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === product.category)
      );
    });
  };

  return { filters, prodsFiltered, setFilters };
};
