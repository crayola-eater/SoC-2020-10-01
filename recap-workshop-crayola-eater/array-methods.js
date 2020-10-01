const names = [
  "Herbert",
  "Florence",
  "Eugene",
  "Baldrick",
  "Reginald",
  "Stan",
  "Axel",
  "Archibald",
];

// 👉 Use an array method and your function `isLengthEven` to create a new array from `names` with only even length names in it. Store the new array in a variable called `evenLengthNames`
const evenLengthNames = names.filter((n) => isLengthEven(n));

// 👉 Use an array method and a new function. From your `evenLengthNames` array, find the index of the first item to begin with the letter `B`.
const indexOfFirstB = evenLengthNames.findIndex((n) => n.startsWith("B"));

// 👉 Use an array method and a new function to create a new array from `evenLengthNames` with all the names upper cased. The item at the index returned from the previous step should be replaced with the string `"CENSORED"` in the new array.
const transformed = evenLengthNames.map((name, i) =>
  i !== indexOfFirstB ? name.toUpperCase() : "CENSORED"
);
