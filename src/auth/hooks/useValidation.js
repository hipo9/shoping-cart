import { useState } from 'react';

export const useValidation = () => {
  const [message, setMessage] = useState(null);

  const validateInputs = (email = '', password = '', errorMessage) => {
    console.log({ email, password, errorMessage });
    if (errorMessage) {
      console.log(errorMessage);
      return setMessage(errorMessage);
    }
    console.log(email, password);
    if (password.length === 0 || email.length === 0)
      setMessage('Empty email or password');
    if (password.length < 6)
      setMessage('Password shold be at least 6 characters');
  };

  return {
    message,
    validateInputs,
  };
};
