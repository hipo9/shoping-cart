import { createContext, useContext } from 'react';

export const AuthContext = createContext({});

export const useAuthContext = () => {
  
  const context = useContext(AuthContext);
  if (!context) throw new Error('there is no Auth Provider');
  
  return context;
};
