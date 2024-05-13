import { useCartContext } from '../context/CartContext/CartContext';
import { RemoveFromCartIcon } from '../../components/Iconos';
// import { roundNumber } from '../utilities/roundNumber';
import { useThemeContext } from '../context/themeContext';


// eslint-disable-next-line react/prop-types, react/display-name
export const Cart = () => {
  const {
    cart = [],
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCartContext();
  const { isDark } = useThemeContext();
  // const totaToPay = cart.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  console.log(cart.length);
  return (
    <>
      <section className={`cart ${isDark ? 'layout__dark' : 'layout__light'}`}>
        {/* <header className='cart__header'></header> */}
        <header className='cart__header'></header>
        {/* {cart.length === 0 && <h2 className='cart__title'>Carrito vacio</h2>} */}
        <div>
          <div className='cart__container-table'>
            <table className='table'>
              <thead>
                <tr>
                  <th className='table__th'>Image</th>
                  <th className='table__th '>Name</th>
                  <th className='table__th'>Quantity</th>
                  <th className='table__th'>Price</th>
                  <th className='table__th'></th>
                </tr>
              </thead>
              
            </table>
          </div>
          <footer className='cart__footer'>
            <button className='cart__clear-btn' onClick={clearCart}>
              <RemoveFromCartIcon />
              Clear Cart
            </button>
            {/* <strong>Total to pay: ${roundNumber(totaToPay)}</strong> */}
          </footer>
        </div>
      </section>
    </>
  );
}
