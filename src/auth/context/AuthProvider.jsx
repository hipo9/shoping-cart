import { useAuth } from '../hooks/useAuth';
import { AuthContext } from './AuthContext';

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const { login, logout, signUp, loginWithGoogle, user } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logout,
        loginWithGoogle,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
