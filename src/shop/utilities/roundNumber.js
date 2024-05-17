export const roundNumber = (number) => {
  const factor = 10 ** 2;
  
  return Math.ceil(number * factor) / factor;
};
