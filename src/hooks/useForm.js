import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const clearInput = () => setFormState(initialForm);
  
  return {
    formState,
    ...formState,
    handleChangeInput,
    clearInput,
  };
};
