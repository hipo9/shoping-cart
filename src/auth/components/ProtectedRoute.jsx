import { ShopLayout } from '../../shop/layout/ShopLayout';
import { Spinner } from '../../ui/components/Spinner';
import { useAuthContext } from '../context/AuthContext';
import { LoginPage } from '../pages';


// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const { status } = user;

  if (status == 'checking')
    return (
      <ShopLayout>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Spinner />
        </div>
      </ShopLayout>
    );
  if (status === 'not-authenticated' || status === 'checking') {
    return <LoginPage />;

    // return <Navigate to={'/login'} />;
  }

  return <>{children}</>;
};
