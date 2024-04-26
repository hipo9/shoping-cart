import { useContext } from 'react';
import { CartContext } from '../context/CartContext/CartContext';
import { AddToCartIcon, RemoveFromCartIcon } from '../../components/Iconos';

// eslint-disable-next-line react/prop-types
export const Product = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { title, image, category, price, id } = product;
  const { cart, addItemtoCart, removeFromCart } = useContext(CartContext);
  const checkProductIncart = () => cart.some((item) => item.id === id);

  return (
    <ul className='product'>
      <img
        className='product__img'
        src={image}
        alt={`imagen del producto ${category}`}
      />
      <div className='product__description'>
        <div className='product__container-txt'>
          <h2 className='product__title'>{title}</h2>
          <span className='product__txt'>
            precio: <strong>$ {price}</strong>
          </span>
          <span className='product__txt'>Category: {category}</span>
          <p>ver detalles</p>
        </div>

        {/* <button onClick={() => addItemtoCart(product)}>Add cart</button> */}
        <button
          onClick={() =>
            checkProductIncart() ? removeFromCart(id) : addItemtoCart(product)
          }
          className={checkProductIncart() ? 'btn-danger' : 'btn-primary'}>
          {checkProductIncart() ? <RemoveFromCartIcon /> : <AddToCartIcon />}
          <label className='product__label-btn'>Add cart</label>
        </button>
      </div>
    </ul>
  );
};
