import { useId } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../context/authContext';
import { AuthLayout } from '../layout/AuthLayout';
import { useThemeContext } from '../../shop/context/themeContext';
import { CiDark } from 'react-icons/ci';
import { GoSun } from 'react-icons/go';
import { Switch } from '../../ui/components/Switch';

export const LoginPage = () => {
  const emailId = useId();
  const passwordId = useId();
  const { startLoginWithEmailPass, startLoginWithGoogle, user } =
    useAuthContext();
  const { status } = user;
  const { email, password, handleChangeInput } = useForm({
    email: '',
    password: '',
  });
  const { isDark, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  //=====================================
  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    await startLoginWithEmailPass(email, password);
    navigate('/products');
  };
  const loginWithGoogle = () => {
    // await startLoginWithGoogle();
    navigate('/products2');
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmitlogin}
        className={isDark ? 'form-dark' : 'form-light'}>
        {user.errorMessage && (
          <p className={user.errorMessage && 'danger'}>
            Invalid password o email
          </p>
        )}
        <h1>Login</h1>
        <label htmlFor={emailId}>Email</label>
        <input
          type='email'
          name='email'
          id={emailId}
          placeholder='example@email.com'
          onChange={handleChangeInput}
          value={email}
        />
        <label htmlFor={passwordId}>Password</label>

        <input
          type='password'
          autoComplete='address-level1'
          name='password'
          id={passwordId}
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

        <div className='form__account'>
          <p>Don`t have an account?</p>
          <Link to={'/auth/register'}>Create</Link>
        </div>
      </form>
      <button className='login__button' type='button' onClick={loginWithGoogle}>
        Google
      </button>
      <div className='login__switch'>
        <Switch state={isDark} toggleTheme={toggleTheme} />
        <span className='login__icon'>{isDark ? <CiDark /> : <GoSun />}</span>
      </div>
    </AuthLayout>
  );
};
