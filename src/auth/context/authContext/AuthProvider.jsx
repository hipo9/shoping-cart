import { useAuth } from '../../hooks/useAuth';
import { AuthContext } from './';

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const {
    startCreateUserEmailPass,
    startLoginWithEmailPass,
    startLoginWithGoogle,
    startLogout,
    user,
  } = useAuth();

  console.log(user);
  return (
    <AuthContext.Provider
      value={{
        startCreateUserEmailPass,
        startLoginWithEmailPass,
        startLoginWithGoogle,
        startLogout,
        user,
        ...user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
