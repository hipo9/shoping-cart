import { RegisterContext } from './RegisterContext';

export const RegisterProvider = ({ children }) => {
  return (
    <RegisterContext.Provider value={{ value: 1 }}>
      {children}
    </RegisterContext.Provider>
  );
};
