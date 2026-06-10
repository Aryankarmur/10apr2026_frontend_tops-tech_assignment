// =========================
// Task 1, 2
// =========================

console.log("Post uploaded successfully");

console.warn("Caption is missing");

console.error("Image upload failed");

// =========================
// Task 3
// =========================

const songs = [
  {
    title: "Believer",
    artist: "Imagine Dragons",
    duration: "3:24",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    duration: "4:23",
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    duration: "3:58",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    duration: "3:22",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
  },
];

console.table(songs);

// =========================
// Task 4, 5
// =========================

const orders = [
  {
    orderId: 101,
    itemName: "Pizza",
    price: 299,
  },
  {
    orderId: 102,
    itemName: "Burger",
    price: 149,
  },
  {
    orderId: 103,
    itemName: "Pasta",
    price: 199,
  },
  {
    orderId: 104,
    itemName: "Sandwich",
    price: 129,
  },
  {
    orderId: 105,
    itemName: "Biryani",
    price: 349,
  },
];

console.table(orders);

// =========================
// Task 6
// =========================

function addToCart(productName, quantity) {
  if (quantity > 0) {
    console.log(`${quantity} ${productName} added to cart`);
  } else if (quantity === 0) {
    console.warn("Quantity cannot be zero");
  } else {
    console.error("Quantity cannot be negative");
  }
}

addToCart("Laptop", 2);

addToCart("Mouse", 0);

addToCart("Keyboard", -1);

// =========================
// Task 7, 8
// =========================

function addItemToCart(item, quantity) {
  // Set breakpoint here in DevTools

  if (quantity === 0) {
    throw new Error("Quantity cannot be zero");
  }

  console.log(`${item} added`);
}

try {
  addItemToCart("Laptop", 0);
} catch (error) {
  console.error(error.message);
}

/*
Open Sources Tab
Click line number beside:
if (quantity === 0)

Run function
Inspect:
item
quantity
*/

// =========================
// Task 9
// =========================

const friends = ["Aryan", "Rahul", "Amit"];

for (let i = 0; i < friends.length; i++) {
  // Set breakpoint here

  console.log(friends[i]);
}

/*
Use F10 to step through.
Observe i value:
0
1
2
*/

// =========================
// Task 10, 11
// =========================

function placeOrder() {
  confirmOrder();
}

function confirmOrder() {
  processPayment();
}

function processPayment() {
  throw new Error("Payment failed");
}

try {
  placeOrder();
} catch (error) {
  console.error(error);
}

/*
Call Stack:

placeOrder()
 ↓
confirmOrder()
 ↓
processPayment()

Error originated from:
processPayment()
*/

// =========================
// Task 12
// =========================

function getUser() {
  return fetchUser();
}

function fetchUser() {
  return JSON.parse(undefined);
}

try {
  getUser();
} catch (error) {
  console.error(error);
}

/*
Error occurs in:

fetchUser()

Typical Error:

SyntaxError:
"undefined" is not valid JSON

Line:
The line containing
JSON.parse(undefined)
*/

// =========================
// Task 13, 14, 15
// =========================

/*
Example Error:

SyntaxError:
"undefined" is not valid JSON

Explanation:

JSON.parse() expects a valid
JSON string.

undefined is not a JSON string,
so parsing fails and throws
a SyntaxError.

Fix:

Pass valid JSON:

JSON.parse('{"name":"Aryan"}')

or check if the value exists
before parsing.
*/
