import { useState } from 'react';
import { Cart } from './Cart';
import { CartIcon } from '../../components/Iconos';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/context/AuthContext';
import { CiDark } from 'react-icons/ci';

import { GoSun } from 'react-icons/go';
import { useThemeContext } from '../context/themeContext';
import { Switch } from '../../ui/components/Switch';

export const Header = () => {
  const { logout, user } = useAuthContext();
  const { isDark, toggleTheme } = useThemeContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  const [toggle, setToggle] = useState(false);
  const handleToggleShowCart = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <header className='header'>
      <section className='profile'>
        <div className='profile__container-switch'>
          <Switch state={isDark} toggleTheme={toggleTheme} />
          {isDark ? <CiDark /> : <GoSun />}
        </div>
        {user.displayName ? (
          <strong className='profile__name'>{user.displayName}</strong>
        ) : (
          <strong className='profile__name'>{user.email}</strong>
        )}
        {user.image && (
          <img src={user.image} alt='mi perfil' className='profile__img' />
        )}

        <button onClick={handleLogout} className='profile__logout-btn'>
          Logout
        </button>
      </section>

      <button onClick={handleToggleShowCart} className='header__cart-btn'>
        <CartIcon />
      </button>

      <Cart toggle={toggle} />
    </header>
  );
};
