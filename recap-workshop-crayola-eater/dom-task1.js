// 👉 Create a new `img` element and store in a variable.
const image = document.createElement("img");

// 👉 Set the source of the new `img` element to be `"https://pics.me.me/i-heard-you-liked-json-statham-so-get-ready-for-72481175.png"`.
image.src =
  "https://pics.me.me/i-heard-you-liked-json-statham-so-get-ready-for-72481175.png";

// 👉 Set the alt text to be "array potter meme".
image.alt = "array potter meme";

// 👉 Append the `img` element to the body of the document.
document.body.appendChild(image);
