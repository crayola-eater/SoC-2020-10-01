const bird = {
  type: "Pigeon",
  color: "purplegreygreen",
  movements: ["Head Bob", "Flap", "Cheeky Scuttle"],
  wings: {
    left: { size: 5, strength: 5 },
    right: { size: 5, strength: 4 },
  },
};

// 👉 console.log the value of the type property
console.log(
  "Objects and Arrays Task 1: the value of the type property",
  bird.type
);

// 👉 console.log the strength of the left wing
console.log(
  "Objects and Arrays Task 1: the strength of the left wing",
  bird.wings.left.strength
);

// 👉 console.log the first item in the list of movements
console.log(
  "Objects and Arrays Task 1: the first item in the list of movements",
  bird.movements[0]
);
