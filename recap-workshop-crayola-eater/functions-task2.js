// 👉 Write a function called `formatDate` which takes in three arguments; day, month and year. Return the date as string with `/` between each number. e.g. `formatDate(1,7,1888)` would return `"1/7/1888"` \* _Optional Bonus: add a zero before the numbers that are only one digit_
const formatDate = (day, month, year) => {
  return [
    String(day).padStart(2, "0"),
    String(month).padStart(2, "0"),
    String(year),
  ].join("/");
};

// 👉 call your function with your birthday and store the result in a variable called `date`
const date = formatDate(1, 1, 1956);

// 👉 console.log `date`
console.log("Functions Task 2 birthday", date);
