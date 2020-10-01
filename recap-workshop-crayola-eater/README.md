# Solidification Tasks

## HTML CSS and JAVASCRIPT

### Task 1

👉 Create an HTML file, a CSS file, and a JavaScript File. Make sure all are linked.

👉 In the HTML, create an h1 containing the words "I GOT THIS!"

👉 Change the color of your h1 with css to your favorite css color.

👉 Create a button containing the words "remind me"

👉 In the JavaScript, add a listener to the button so that when clicked, the words "YOU GOT THIS" will be logged to the console

_For each of the rest of the tasks, create a new JS file and import it into your HTML file so that it can run in the browser. If you feel overwhelmed at any point, click your button..._

## Objects and Arrays

### Task 1

```js
const bird = {
  type: "Pigeon",
  color: "purplegreygreen",
  movements: ["Head Bob", "Flap", "Cheeky Scuttle"],
  wings: {
    left: { size: 5, strength: 5 },
    right: { size: 5, strength: 4 },
  },
};
```

#### Accessing properties

👉 console.log the value of the type property

👉 console.log the strength of the left wing

👉 console.log the first item in the list of movements

### Task 2

```js
const fish = [
  { type: "Sturgeon", size: "Big" },
  { type: "Pike", size: "Very Big" },
  { type: "Great White Shark", size: "Very Very Big" },
];
```

#### Accessing properties

👉 console.log the first item in the array of fish

👉 console.log the the size of the second item in the array

👉 console.log the type of the last item in the array

## Loops

### Task 1

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

👉 refactor this while loop into a for loop

### Task 2

```js
const ingredients = [
  "Cheese",
  "Pineapple",
  "Tomato",
  "Mozzarella",
  "Flour",
  "Water",
  "Yeast",
];
```

👉 write a for loop to console.log each item in the ingredients array

## Functions

### Task 1

```js
const result = isLengthEven("ben");
```

👉 Write the function `isLengthEven`. It should take in a string and return true if the length of that string is even and false if the length of that string is odd

👉 Call the function with your name and store in the variable `result`!

👉 console.log `result`

### Task 2

👉 Write a function called `formatDate` which takes in three arguments; day, month and year. Return the date as string with `/` between each number. e.g. `formatDate(1,7,1888)` would return `"1/7/1888"` \* _Optional Bonus: add a zero before the numbers that are only one digit_

👉 call your function with your birthday and store the result in a variable called `date`

👉 console.log `date`

### Task 3

👉 Write a function that takes in a number

👉 If that number is even, return the number multiplied by 7

👉 If that number is odd, return the number divided by 7

👉 If the function receives a string instead of a number, return undefined

## Array Methods

```js
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
```

👉 Use an array method and your function `isLengthEven` to create a new array from `names` with only even length names in it. Store the new array in a variable called `evenLengthNames`.

👉 Use an array method and a new function. From your `evenLengthNames` array, find the index of the first item to begin with the letter `B`.

👉 Use an array method and a new function to create a new array from `evenLengthNames` with all the names upper cased. The item at the index returned from the previous step should be replaced with the string `"CENSORED"` in the new array.

## DOM

### Task 1

👉 Create a new `img` element and store in a variable.

👉 Set the source of the new `img` element to be `"https://pics.me.me/i-heard-you-liked-json-statham-so-get-ready-for-72481175.png"`.

👉 Set the alt text to be "array potter meme".

👉 Append the `img` element to the body of the document.

### Task 2

👉 Write a function that when called will change the src of the `img` element to be `"https://scontent.flhr4-2.fna.fbcdn.net/v/t31.0-8/17038707_1666746423619719_8198474063251261060_o.jpg?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=JkAozooa3LEAX-UsUBs&_nc_ht=scontent.flhr4-2.fna&oh=5efb8beb56a536c1eb0577fd5fae8e4d&oe=5F9A2C3F"` and the alt text to `"js console meme"`

👉 Add an event listener to the button with id `"click-me"` which calls your function on click.

## Timeouts and Intervals

```js
let count = 0;
```

👉 Write a function that adds one to the count variable and console.logs the updated count.

👉 Use `setInterval` to have you function called every 1000 milliseconds.

👉 Store the return value of `setInterval` in variable called intervalId

👉 Write a function that will clear your interval using `clearInterval`

👉 Use `setTimeout` to call that function after a random number of milliseconds between 5000 and 15000.

👉 Take bets on what number the count will get to, closest wins!

## Fetch

👉 Write a new function called `sendFetch`

👉 Within `sendFetch`, send a GET request to `https://swapi.dev/api/people/1` and await the promise. Storing the fulfilled value in a variable called response.

👉 Get the json out of the response and store in a variable called data.

👉 console.log the data and poke around.

👉 Get some data from within the object, using the keys that you found during the console.log stage.
