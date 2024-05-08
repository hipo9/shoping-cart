import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../context/AuthContext';
import { AuthLayout } from '../layout/AuthLayout';

import { useThemeContext } from '../../shop/context/themeContext';
import { CiDark } from 'react-icons/ci';
import { GoSun } from 'react-icons/go';
import { Switch } from '../../ui/components/Switch';

export const LoginPage = () => {
  const { login, loginWithGoogle, user } = useAuthContext();
  const { status } = user;
  const { email, password, handleChangeInput } = useForm({
    email: 'sanchezrkm@google.com',
    password: '123456',
  });
  const { isDark, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  //=====================================
  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/products');
    } catch (error) {
      console.log(error.code);
    }
  };
  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate('/products');
  };

  return (
    <AuthLayout>
      <div className='login'>
        <form
          onSubmit={handleSubmitlogin}
          className={isDark ? 'form-dark' : 'form-light'}>
          <label htmlFor=''>Login</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='example@email.com'
            onChange={handleChangeInput}
            value={email}
          />
          <label htmlFor=''>Password</label>

          <input
            type='password'
            autoComplete='address-level1'
            name='password'
            id='password'
            placeholder='*******'
            onChange={handleChangeInput}
            value={password}
          />
          {/* <button type='submit'>Sign In</button> */}
          <button
            type='submit'
            disabled={status === 'checking' && true}
            className='form__button'>
            Sign In
          </button>
          <button onClick={handleGoogleSignIn} className='login__button'>
            Google
          </button>
          <div className='form__account'>
            <p>Don't you have a account?</p>
            <Link>Create</Link>
          </div>
        </form>
        <div className='login__switch'>
          <Switch state={isDark} toggleTheme={toggleTheme} />
          <span className='login__icon'>{isDark ? <CiDark /> : <GoSun />}</span>
        </div>
      </div>
    </AuthLayout>
  );
};
