import { Header, Products } from '../components';
import { ShopLayout } from '../layout/ShopLayout';
import { Filters } from '../components/Filters';
import { useProducts } from '../hooks/useProducts';
import data from '../../mock/data.json';

export const HomePage = () => {
  const { filteredProducts } = useProducts();

  return (
    <ShopLayout>
      <Header />
      <Filters />
      <Products products={data} />
    </ShopLayout>
  );
};
