// 👉 Write a function that when called will change the src of the `img` element to be `"https://scontent.flhr4-2.fna.fbcdn.net/v/t31.0-8/17038707_1666746423619719_8198474063251261060_o.jpg?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=JkAozooa3LEAX-UsUBs&_nc_ht=scontent.flhr4-2.fna&oh=5efb8beb56a536c1eb0577fd5fae8e4d&oe=5F9A2C3F"` and the alt text to `"js console meme"`
// 👉 Add an event listener to the button with id `"click-me"` which calls your function on click.

document.querySelector("#click-me").addEventListener("click", () => {
  image.src =
    "https://scontent.flhr4-2.fna.fbcdn.net/v/t31.0-8/17038707_1666746423619719_8198474063251261060_o.jpg?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=JkAozooa3LEAX-UsUBs&_nc_ht=scontent.flhr4-2.fna&oh=5efb8beb56a536c1eb0577fd5fae8e4d&oe=5F9A2C3F";
  image.alt = "js console meme";
});
