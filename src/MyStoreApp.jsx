import { useState } from 'react';
import data from './mock/data.json';
import { Home } from './shop/pages/Home';
import { CartProvider } from './shop/Contexts/cartContext/CartProvider';
// import { Header } from './shop/components/Header';

export const MyStoreApp = () => {
  const [item, setItem] = useState(data);

  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
};
