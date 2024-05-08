// import { Home } from './shop/pages/Home';
import { CartProvider } from './shop/context/CartContext/CartProvider';
import { FilterProvider } from './shop/context/filterContext/';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import { ThemeProvider } from './shop/context/themeContext/ThemeProvider';

// import { Header } from './shop/components/Header';

export const MyStoreApp = () => {
  // const [item, setItem] = useState(data);

  return (
    <>
      <ThemeProvider>
        <FilterProvider>
          <CartProvider>
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
          </CartProvider>
        </FilterProvider>
      </ThemeProvider>
    </>
  );
};
