import { useId, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useThemeContext } from '../../shop/context/themeContext';
import { inputValidation } from '../../utilities/inputValidation';

import { useAuthContext } from '../context/authContext/AuthContext';
import { useEffect } from 'react';
import { validatePassword } from 'firebase/auth';

export const RegisterPage = () => {
  const [passValidation, setPassValidation] = useState('');
  const [pressedSubmit, setPressedSubmit] = useState(false);
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const { startCreateUserEmailPass, errorMessage } = useAuthContext();
  const { email, password, handleChangeInput } = useForm({
    email: '',
    password: '',
  });
  const { isDark } = useThemeContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPressedSubmit(true);
    const validation = inputValidation(email, password);
    if (validation) {
      setPassValidation(validation);
      return;
    }
    await startCreateUserEmailPass(email, password);
    navigate('/auth/login');
  };

  useEffect(() => {
    setTimeout(() => {
      setPressedSubmit(false);
      setPassValidation('');
    }, 3000);
  }, [pressedSubmit]);

  return (
    <>
      <AuthLayout>
        <form
          className={isDark ? 'form-dark' : 'form-light'}
          onSubmit={handleSubmit}>
          {passValidation && <p className='danger'>{passValidation}</p>}
          {errorMessage && <p className='danger'>{errorMessage}</p>}
          {/* {passValidation && <p className='danger'>{passValidation}</p>} */}
          <h1> Registrate</h1>
          <label htmlFor={emailId}>Email</label>
          <input
            type='text'
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
          <button type='submit'>Sign Up test</button>
          <div>
            <p>Already have an account?</p>
            <Link to={'/auth/login'}>Log In</Link>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};
