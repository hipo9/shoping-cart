import { useId, useState } from 'react';
import { Cart } from './Cart';
import { CartIcon } from '../../components/Iconos';


export const Header = () => {
  // const [show, setShow] = useState(false);
  const cartChecboxID = useId();
  const [toggle, setToggle] = useState(false);
  const handleToggleShowCart = (e) => {
    setToggle(e.target.checked);
  };
  

  return (
    <header className='header'>
      <div className='profile'>
        <div className='header__profile'>
          <img src='' alt='mi perfil' />
        </div>
        <label className='header__btn' htmlFor={cartChecboxID}>
          <CartIcon />
        </label>
        <input
          type='checkbox'
          id={cartChecboxID}
          hidden
          onChange={handleToggleShowCart}
        />
      </div>
      <Cart toggle={toggle} />
    </header>
  );
};
