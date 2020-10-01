const fish = [
  { type: "Sturgeon", size: "Big" },
  { type: "Pike", size: "Very Big" },
  { type: "Great White Shark", size: "Very Very Big" },
];

// 👉 console.log the first item in the array of fish
console.log(
  "Objects and Arrays Task 2: the first item in the array of fish",
  fish[0]
);

// 👉 console.log the the size of the second item in the array
console.log(
  "Objects and Arrays Task 2: the size of the second item in the array",
  fish[1].size
);

// 👉 console.log the type of the last item in the array
console.log(
  "Objects and Arrays Task 2: the type of the last item in the array",
  fish[fish.length - 1].type
);
