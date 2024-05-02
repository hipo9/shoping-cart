import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks/useForm';


export const RegisterPage = () => {
  const navigate = useNavigate();
  const { signUp } = useAuthContext();
  const { email, password, handleChangeInput } = useForm({
    email: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password);
    navigate('/login');
  };

  return (
    <>
      <AuthLayout>
        <div className='register '>
          <form className='form' onSubmit={handleSubmit}>
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
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};
