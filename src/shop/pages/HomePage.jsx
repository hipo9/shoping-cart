import { Header, Products } from '../components';
import { ShopLayout } from '../layout/ShopLayout';
import data from '../../mock/data.json';
import { useFilterContext } from '../context/filterContext/FiltersContext';
import { Filters } from '../components/Filters';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const { prodsFiltered, filters } = useFilterContext();
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    const idTime = setTimeout(() => {
      setProductsState(prodsFiltered(data));
    }, 250);
    return () => clearTimeout(idTime);
  }, [filters]);

  return (
    <ShopLayout>
      <Header />
      <Filters />

      {/* <Products products={productsState} />  */}
    </ShopLayout>
  );
};
