import { CartContext } from './CartContext';
import { useCart } from '../../hooks/useCart';

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const {
    cart,
    addItemtoCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
  } = useCart();
  return (
    <CartContext.Provider
      value={{
        cart,
        addItemtoCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
