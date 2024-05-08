import { Header, Products } from '../components';
import { ShopLayout } from '../layout/ShopLayout';
import data from '../../mock/data.json';
import { useFilterContext } from '../context/filterContext/FiltersContext';
import { Filters } from '../components/Filters';

export const HomePage = () => {
  const { prodsFiltered } = useFilterContext();

  const products = prodsFiltered(data);

  return (
    <ShopLayout className='layout'>
      <Header />
      <Filters />
      <Products products={products} />
    </ShopLayout>
  );
};
