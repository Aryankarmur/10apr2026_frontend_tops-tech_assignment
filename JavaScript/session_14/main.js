//  Task 4,5
import { formatSongTitle, getSongDurationInMinutes } from "./spotifyUtils.js";

console.log(formatSongTitle("shape of you"));

console.log(getSongDurationInMinutes(245));

// Task 10,11
import { addToCart, removeFromCart, calculateTotal } from "./cartUtils.js";

let cart = [];

addToCart(cart, {
  name: "Laptop",
  price: 50000,
});

addToCart(cart, {
  name: "Mouse",
  price: 500,
});

cart = removeFromCart(cart, "Mouse");

console.log(calculateTotal(cart));

// Task 13,14

// Explanation:

// When an application grows, keeping all functions in one file becomes difficult to manage. By moving utility functions into separate files, the code becomes cleaner, easier to maintain, and easier to reuse across multiple features.

// For example, in a Zomato-like app, a priceUtils.js file could contain functions for calculating discounts, taxes, and delivery charges. These functions could then be imported into the cart, checkout, and order history features without rewriting the same code multiple times.