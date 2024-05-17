import { Header, Products } from '../components';
import { ShopLayout } from '../layout/ShopLayout';
import { Filters } from '../components/Filters';
import { useProducts } from '../hooks/useProducts';

export const HomePage = () => {
  const { filteredProducts } = useProducts();

  return (
    <ShopLayout>
      <Header />
      <Filters />
      <Products products={filteredProducts} />
    </ShopLayout>
  );
};
