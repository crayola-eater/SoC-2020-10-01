// 👉 Write a new function called `sendFetch`
const sendFetch = async () => {
  // 👉 Within `sendFetch`, send a GET request to `https://swapi.dev/api/people/1` and await the promise. Storing the fulfilled value in a variable called response.
  const response = await fetch("https://swapi.dev/api/people/1");

  // 👉 Get the json out of the response and store in a variable called data.
  const data = await response.json();

  // 👉 Get the json out of the response and store in a variable called data.
  console.log("Fetch: sendFetch", data);

  // 👉 Get some data from within the object, using the keys that you found during the console.log stage.
  const { name, birth_year: birthYear, mass } = data;
  console.log("Fetch: sendFetch, keys discovered during console.log", {
    name,
    birthYear,
    mass,
  });
};
