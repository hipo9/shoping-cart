import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { LoginPage } from '../pages';

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  console.log('render protected');
  const { user, loading } = useAuthContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <LoginPage />;
    // return <Navigate to={'/login'} />;
  }
  return <div style={{ backgroundColor: 'red' }}>{children}</div>;
};
