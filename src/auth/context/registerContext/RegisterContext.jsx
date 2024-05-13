import { createContext, useContext } from 'react';

export const RegisterContext = createContext({});

const useRegisterContext = () => {
  const context = useContext(RegisterContext);

  return context;
};
