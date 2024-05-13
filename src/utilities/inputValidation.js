export const inputValidation = (email, password) => {
  console.log(email, password);
  if (password.length === 0 || email.length === 0)
    return 'Empty email or password';
  if (password.length < 6) return 'Password shold be at least 6 characters';
};
