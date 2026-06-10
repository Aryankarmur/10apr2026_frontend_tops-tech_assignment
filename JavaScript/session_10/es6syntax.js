// Task 1, 2

function formatWelcomeMessage(userName, followers) {
  return `Hello ${userName}, you have ${followers} followers!`;
}

console.log(
  formatWelcomeMessage("Aryan", 1200)
);


// Task 3

const userName = "Aryan";
const playlistCount = 5;

const message =
  `Hello, ${userName}! You have ${playlistCount} playlists.`;

console.log(message);


// Task 4, 5

function getDeliveryDetails(
  address = "Ahmedabad",
  paymentMethod = "UPI"
) {
  console.log(
    `Address: ${address}, Payment Method: ${paymentMethod}`
  );
}

getDeliveryDetails();

getDeliveryDetails(
  "Rajkot",
  "Credit Card"
);


// Task 6

function orderFood(
  item,
  quantity = 1
) {
  return `You ordered ${quantity} ${item}.`;
}

console.log(
  orderFood("Pizza")
);

console.log(
  orderFood("Burger", 2)
);


// Task 7, 8

const order = {
  item: "Pizza",
  price: 350,
  user: "Amit",
};

const {
  item,
  price,
} = order;

console.log(
  `${order.user} ordered ${item} for ₹${price}`
);


// Task 9

const movie = {
  title: "Jawan",
  rating: 4.5,
  genre: "Action",
};

const {
  title,
  rating,
} = movie;

console.log(
  `Movie: ${title}, Rating: ${rating}`
);


// Task 10, 11

const cricketFans = [
  "Virat",
  "Rohit",
];

const footballFans = [
  "Messi",
  "Ronaldo",
];

const allFans = [
  ...cricketFans,
  ...footballFans,
];

console.log(allFans);


// Task 12

const zomatoDishes = [
  "Pizza",
  "Burger",
];

const swiggyDishes = [
  "Biryani",
  "Pasta",
];

const allDishes = [
  ...zomatoDishes,
  ...swiggyDishes,
];

console.log(allDishes);


// Task 13, 14

const addToCartArrow = (
  ...prices
) => {

  let total = 0;

  for (let price of prices) {
    total += price;
  }

  return total;
};

console.log(
  addToCartArrow(
    200,
    300,
    500
  )
);


// Task 15

const getFollowersSummary = (
  ...followers
) => {

  let total = 0;

  for (let count of followers) {
    total += count;
  }

  return `Total followers: ${total}`;
};

console.log(
  getFollowersSummary(
    500,
    400,
    300
  )
);