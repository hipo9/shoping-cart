export const roundNumber = (number) => {
  const factor = 10 ** 2;
  console.log(factor);
  return Math.ceil(number * factor) / factor;
};
