import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../context/AuthContext';
import { AuthLayout } from '../layout/AuthLayout';
import { useState } from 'react';

export const LoginPage = () => {
  const { login, loginWithGoogle } = useAuthContext();
  const { email, password, handleChangeInput } = useForm({
    email: '',
    password: '',
  });

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
    navigate('/');
  };

  return (
    <AuthLayout>
      <h3>{email}</h3>
      <h3>{password}</h3>
      <div className='login'>
        <h1>Welcome to Login</h1>
        <form onSubmit={handleSubmitlogin} className='form'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='example@email.com'
            onChange={handleChangeInput}
            value={email}
          />
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
          <button type='submit'>Sign In</button>
        </form>
        <button onClick={handleGoogleSignIn}> Google</button>
      </div>
    </AuthLayout>
  );
};
