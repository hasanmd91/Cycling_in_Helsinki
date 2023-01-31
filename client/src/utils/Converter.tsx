export const time_convert = (num: number): number | string => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `  ${hours} ":" ${minutes} min `;
};
