import { useContext } from 'react';
import { CartContext } from '../context/CartContext/CartContext';
import { RemoveFromCartIcon } from '../../components/Iconos';

// eslint-disable-next-line react/prop-types
export const Cart = ({ toggle }) => {
  console.log('cart: ', toggle);
  const {
    cart = [],
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totaToPay = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      {toggle && (
        <section className='cart'>
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
                      <tr key={id} className='cart__row'>
                        <td>
                          <img src={image} alt={'imagen de' + title} />
                        </td>
                        <td className='table__td table__td--title'>{title}</td>
                        <td>
                          <div className='table__quantity'>
                            <button
                              className='table__btn'
                              onClick={()=>increaseQuantity(id)}>
                              +
                            </button>
                            {quantity}
                            <button
                              className='table__btn'
                              onClick={()=>decreaseQuantity(id)}>
                              ˗˗
                            </button>
                          </div>
                        </td>
                        <td>{price}</td>
                        <td className='cart__container-del'>
                          <p
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
                <button className='cart__clear-btn'>
                  <RemoveFromCartIcon />
                  Clear Cart
                </button>
                <strong>Total a pagar ${totaToPay}</strong>
              </footer>
            </>
          )}
        </section>
      )}
    </>
  );
};
