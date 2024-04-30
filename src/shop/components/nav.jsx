import { CartIcon } from '../../components/Iconos';

export const nav = () => {
  return (
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
  );
};
