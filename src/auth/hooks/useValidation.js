import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '../context/authContext';

export const useValidation = () => {
  const [errorMessageInput, setErrorMessageInput] = useState(null);
  const messageRef = useRef(null);
  const { errorMessage } = useAuthContext();

  const validateInputs = (email, password) => {
    if (email.length <= 0 && password.length <= 0) return 'Inputs are empty';
    if (email.length <= 0) return 'Type your email';
    if (password.length <= 0) return 'Type your password';
    if (password.length < 6) return 'Password shold be at 6 characters';
    return false;
  };

  const hideErrorMessage = () => {
    if (!messageRef.current) return;
    console.log('desde el hide');
    setTimeout(() => {
      messageRef.current.style.display = 'none';
      setErrorMessageInput('');
    }, 1500);
  };

  useEffect(() => {
    setErrorMessageInput(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    hideErrorMessage();
  }, [errorMessageInput]);

  return {
    errorMessageInput,
    validateInputs,
    setErrorMessageInput,
    messageRef,
  };
};
