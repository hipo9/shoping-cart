import { Header } from '../components/Header';
import { Products } from '../components/Products';
import { ShopLayout } from '../layout/ShopLayout';

export const Home = () => {
  return (
    <ShopLayout className='layout'>
      <Header />
      <main className='products container'>
        <Products />
      </main>
    </ShopLayout>
  );
};
