let count = 0;

// 👉 Write a function that adds one to the count variable and console.logs the updated count.
const incrementCount = () => console.log("Timeouts-and-intervals", ++count);

// 👉 Use `setInterval` to have you function called every 1000 milliseconds.
// 👉 Store the return value of `setInterval` in variable called intervalId
const intervalId = setInterval(incrementCount, 1e3);

// 👉 Write a function that will clear your interval using `clearInterval`
const stopIncrementing = () => clearInterval(intervalId);

// 👉 Use `setTimeout` to call that function after a random number of milliseconds between 5000 and 15000.
const randomMilliseconds = Math.round(5e3 + Math.random() * 10e3);

setTimeout(() => clearInterval(intervalId), randomMilliseconds);

// 👉 Take bets on what number the count will get to, closest wins!
