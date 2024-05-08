import { useState } from 'react';
const initialState = {
  category: 'all',
  minPrice: 0,
};
export const useFilters = () => {
  const [filters, setFilters] = useState(initialState);

  const setMinPrice = (price) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: price,
    }));
  };

  const setCategory = (category) => {
    setFilters((prevState) => ({
      ...prevState,
      category: category,
    }));
  };

  const prodsFiltered = (products = []) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === product.category)
      );
    });
  };

  return { filters, prodsFiltered, setFilters, setMinPrice, setCategory };
};
