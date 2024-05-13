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
            <section
          className={`cart ${isDark ? 'layout__dark' : 'layout__light'}`}>
          {/* <header className='cart__header'></header> */}
          <header className='cart__header'></header>
          {!cart.length ? (
            <h2 className='cart__title'>Carrito vacio</h2>
          ) : (
            <>
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
                  <tbody>
                    {cart?.map(({ image, title, price, quantity, id }) => (
                      <tr key={id} className='table__row'>
                        <td>
                          <img
                            className='table__img'
                            src={image}
                            alt={'imagen de' + title}
                          />
                        </td>
                        <td className='table__td table__td--title'>
                          {title.split(' ').slice(0, 3).join(' ')}
                        </td>
                        <td>
                          <div className='table__quantity'>
                            <button
                              className='table__btn'
                              onClick={() => increaseQuantity(id, quantity)}>
                              +
                            </button>
                            {quantity}
                            <button
                              className='table__btn'
                              onClick={() => decreaseQuantity(id, quantity)}>
                              ˗˗
                            </button>
                          </div>
                        </td>
                        <td>{price}</td>
                        <td className='cart__container-del'>
                          <p
                            title='Eliminar'
                            className='cart__delete'
                            onClick={() => removeFromCart(id)}>
                            <RemoveFromCartIcon />
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <footer className='cart__footer'>
                <button className='cart__clear-btn' onClick={clearCart}>
                  <RemoveFromCartIcon />
                  Clear Cart
                </button>
                {/* <strong>Total to pay: ${roundNumber(totaToPay)}</strong> */}
              </footer>
            </>
          )}
        </section>

    </>
  );
}
