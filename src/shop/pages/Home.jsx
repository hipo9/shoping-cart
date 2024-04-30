import { Header, Products } from '../components';
import { ShopLayout } from '../layout/ShopLayout';
import data from '../../mock/data.json';

import { useContext } from 'react';
import { FilterContext } from '../context/filterContext/FiltersContext';
import { Filters } from '../components/Filters';

export const Home = () => {
  // const { prodsFiltered } = useContext(FilterContext);
  const { prodsFiltered } = useContext(FilterContext);

  const products = prodsFiltered(data);
  // console.log(products);

        
  return (
    <ShopLayout className='layout'>
      <Header />
      <main className='products container'>
        <Filters />
        <Products products={products} />
      </main>
    </ShopLayout>
  );
};
