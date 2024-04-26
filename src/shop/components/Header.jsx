import { useState } from 'react';
import { Cart } from './Cart';


export const Header = () => {
  const [show, setShow] = useState(false);

  const handleToggleShowCart = () => {
    setShow(!show);
  };

  return (
    <header className='header'>
      <nav className='header__nav'>
        <button onClick={handleToggleShowCart} className='header__btn'>
          Cart
        </button>
      </nav>
      <Cart toggle={show} />
    </header>
  );
};
