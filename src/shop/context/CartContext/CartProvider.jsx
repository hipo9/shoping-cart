import { useCart } from '../../hooks/useCart';
import { CartContext } from './CartContext';


// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const {
    cart,
    addItemtoCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    total
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
        total
      }}>
      {children}
    </CartContext.Provider>
  );
};
