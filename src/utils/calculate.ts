export const isBetween = (n: number, a: number, b: number): boolean => {
  return (n - a) * (n - b) <= 0;
};
