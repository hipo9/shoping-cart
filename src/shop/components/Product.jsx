import { useContext } from 'react';
import { CartContext } from '../context/CartContext/CartContext';
import { AddToCartIcon, RemoveFromCartIcon } from '../../components/Iconos';
import { useThemeContext } from '../context/themeContext/ThemeContext';

// eslint-disable-next-line react/prop-types
export const Product = ({ product }) => {
  const { isDark } = useThemeContext();
  const { cart, addItemtoCart, removeFromCart } = useContext(CartContext);
  // eslint-disable-next-line react/prop-types
  const { title, image, category, price, id } = product;
  const checkProductIncart = () => cart.some((item) => item.id === id);

  return (
    <ul className={`product ${isDark ? 'border-light' : 'border-dark'}`}>
      <img
        className='product__img'
        src={image}
        alt={`imagen del producto ${category}`}
      />
      <div className='product__container-detail'>
        <h2 className='product__title'>
          {title.split(' ').slice(0, 2).join(' ')}
        </h2>
        <section>
          <div className='product__txt'>
            <span className='product__span'>Category: </span> {category}
          </div>
          <div className='product__txt'>
            <span className='product__span'>Price: </span> ${price}
          </div>
          <p>ver detalles</p>
        </section>

        <button
          onClick={() =>
            checkProductIncart() ? removeFromCart(id) : addItemtoCart(product)
          }
          className={`product__add-btn ${
            checkProductIncart() ? 'btn-danger' : 'btn-primary'
          }`}>
          {checkProductIncart() ? <RemoveFromCartIcon /> : <AddToCartIcon />}
          <label className='product__label-btn'>
            {checkProductIncart() ? 'Cancel' : 'Add cart'}
          </label>
        </button>
      </div>

      {/* <button onClick={() => addItemtoCart(product)}>Add cart</button> */}
    </ul>
  );
};
