
import { Home } from './shop/pages/Home';
import { CartProvider } from './shop/context/CartContext/CartProvider';

// import { Header } from './shop/components/Header';

export const MyStoreApp = () => {
  // const [item, setItem] = useState(data);

  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
};
