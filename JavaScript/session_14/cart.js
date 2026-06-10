//  Task 6

import { formatPrice, getDiscountedPrice } from "./utils.js";

const items = [
  {
    name: "Laptop",
    price: 50000,
  },
  {
    name: "Mouse",
    price: 500,
  },
  {
    name: "Keyboard",
    price: 1500,
  },
];

items.forEach((item) => {
  const discounted = getDiscountedPrice(item.price, 10);

  console.log(item.name);

  console.log("Original:", formatPrice(item.price));

  console.log("Discounted:", formatPrice(discounted));
});

// Task 9

import getDiscountedPrice, { formatPrice } from "./utils.js";

const finalPrice = getDiscountedPrice(1000, 20);

console.log(formatPrice(finalPrice));
