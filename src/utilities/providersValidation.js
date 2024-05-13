export const providersValidation = (errorCode = '') => {
  if (errorCode === 'auth/email-already-in-use') return 'Email already in use';
  if (errorCode === 'auth/weak-password')
    return 'Password shold be at 6 characters';
  if (errorCode === 'auth/invalid-email') return 'Invalid email';
};
