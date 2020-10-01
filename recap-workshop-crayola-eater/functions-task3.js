// 👉 Write a function that takes in a number
// 👉 If that number is even, return the number multiplied by 7
// 👉 If that number is odd, return the number divided by 7
// 👉 If the function receives a string instead of a number, return undefined
const processNumber = (number) => {
  if ("string" === typeof number) {
    return;
  }
  if (number % 2 === 0) {
    return number * 7;
  }
  return number / 7;
};
