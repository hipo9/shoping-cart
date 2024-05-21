import { useId } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useThemeContext } from '../../shop/context/themeContext';
import { useAuthContext } from '../context/authContext/AuthContext';
import { useValidation } from '../hooks/useValidation';

export const RegisterPage = () => {
  const emailId = useId();
  const passwordId = useId();

  const { isDark } = useThemeContext();
  const { startCreateUserEmailPass, succesMessage } = useAuthContext();
  const { email, password, handleChangeInput } = useForm({
    email: '',
    password: '',
  });
  const {
    errorMessageInput,
    setErrorMessageInput,
    validateInputs,
    messageRef,
  } = useValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isErrorFromInput = validateInputs(email, password);
    setErrorMessageInput(isErrorFromInput);
    if (isErrorFromInput) return;
    const res = await startCreateUserEmailPass(email, password);
    if (!res) return;
    // navigate('/auth/login');
  };

  return (
    <>
      <AuthLayout>
        {!succesMessage && <h2>Se ha creado el usuario con exito</h2>}

        <form
          className={isDark ? 'form-dark' : 'form-light'}
          onSubmit={handleSubmit}>
          {errorMessageInput && (
            <p className='danger' ref={messageRef}>
              {errorMessageInput}
            </p>
          )}

          <h1> Registrate</h1>
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
          <button type='submit'>Sign Up </button>
          <div>
            <p>Already have an account?</p>
            <Link to={'/auth/login'}>Log In</Link>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};
