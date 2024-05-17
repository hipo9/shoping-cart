import { useEffect, useState } from 'react';
import { useFilterContext } from '../context/filterContext/FiltersContext';

export const useProducts = () => {
  const [productsFetch, setProductsFetch] = useState([]);
  const { filters, filterProducts } = useFilterContext();
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    const getItems = () => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((dataJson) => setProductsFetch(dataJson));
    };
    getItems();
  }, []);

  useEffect(() => {
    const array = [...productsFetch];
    const idTime = setTimeout(() => {
      //guardando los productos filtrados
      setFilteredProducts(filterProducts(array));
    }, 250);
    return () => clearTimeout(idTime);
  }, [filters, productsFetch]);

  return {
    filteredProducts,
  };
};
