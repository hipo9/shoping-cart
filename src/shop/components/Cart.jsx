import { useContext } from 'react';
import { CartContext } from '../context/CartContext/CartContext';
import { RemoveFromCartIcon } from '../../components/Iconos';

// eslint-disable-next-line react/prop-types
export const Cart = ({ toggle }) => {
  console.log('cart: ',toggle);
  const { cart, removeFromCart } = useContext(CartContext);

  const totaToPay = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {toggle && (
        <section className='cart'>
          {/* <header className='cart__header'></header> */}
          <p>Total a Pagar ${totaToPay}</p>
          <table className='cart__table'>
            <thead className='cart__header'>
              <tr>
                <th className='cart__th'>Image</th>
                <th className='cart__th'>Name</th>
                <th className='cart__th'>Quantity</th>
                <th className='cart__th'>Price</th>
                <th className='cart__th'></th>
              </tr>
            </thead>
            <tbody>
              {cart?.map(({ image, title, price, quantity, id }) => (
                <tr key={id} className='cart__row'>
                  <td>
                    <img src={image} alt={'imagen de' + title} />
                  </td>
                  <td>{title}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td className='cart__container-del'>
                    <p className='cart__delete' onClick={()=>removeFromCart(id)}>
                    <RemoveFromCartIcon />
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};
