import { AuthProvider } from './auth/context/authContext';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './shop/context/CartContext/CartProvider';
import { FilterProvider } from './shop/context/filterContext/FilterProvider';
import { ThemeProvider } from './shop/context/themeContext';


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
