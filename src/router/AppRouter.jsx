import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../shop/pages/HomePage';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { CheckingAuth } from '../auth/components/CheckingAuth';
import { useAuthContext } from '../auth/context/authContext';
import { TestPage } from '../auth/pages/TestPage';

export const AppRouter = () => {
  const { user } = useAuthContext();
  const { status } = user;

  if (status === 'checking') {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      {/*  {status === 'authenticated' ? (
        <Route path='/*' element={<HomePage />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoute />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} /> */}
    </Routes>
  );
};
