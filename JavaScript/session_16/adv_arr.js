// =========================
// Task 1, 2
// =========================

const products = [
  {
    name: "Laptop",
    price: 50000,
    isInStock: true,
  },
  {
    name: "Mouse",
    price: 500,
    isInStock: false,
  },
  {
    name: "Keyboard",
    price: 1500,
    isInStock: true,
  },
];

const inStockProducts = products.filter((product) => product.isInStock);

console.log(inStockProducts);

// =========================
// Task 3
// =========================

const playlists = [
  {
    name: "Chill Vibes",
    isPublic: true,
  },
  {
    name: "Private Mix",
    isPublic: false,
  },
  {
    name: "Workout Songs",
    isPublic: true,
  },
];

const publicPlaylists = playlists.filter((playlist) => playlist.isPublic);

console.log(publicPlaylists);

// =========================
// Task 4, 5
// =========================

const posts = [{ likes: 120 }, { likes: 350 }, { likes: 220 }];

const likeCounts = posts.map((post) => post.likes);

console.log(likeCounts);

// =========================
// Task 6
// =========================

const flipkartProducts = [
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

const formattedProducts = flipkartProducts.map(
  (product) => `Product: ${product.name}, Price: ₹${product.price}`,
);

console.log(formattedProducts);

// =========================
// Task 7, 8
// =========================

const orders = [{ clicks: 10 }, { clicks: 20 }, { clicks: 30 }];

const totalClicks = orders.reduce((total, order) => total + order.clicks, 0);

console.log(totalClicks);

// =========================
// Task 9
// =========================

const instagramPosts = [{ likes: 100 }, { likes: 250 }, { likes: 400 }];

const totalLikes = instagramPosts.reduce(
  (total, post) => total + post.likes,
  0,
);

console.log(totalLikes);

// =========================
// Task 10, 11
// =========================

const videos = [
  {
    title: "Video 1",
    views: 500000,
  },
  {
    title: "Video 2",
    views: 1500000,
  },
  {
    title: "Video 3",
    views: 3000000,
  },
];

const popularVideo = videos.find((video) => video.views > 1000000);

console.log(popularVideo);

// =========================
// Task 12
// =========================

const restaurants = [
  {
    name: "Food Hub",
    cuisine: "Indian",
  },
  {
    name: "Dragon House",
    cuisine: "Chinese",
  },
  {
    name: "Pizza Point",
    cuisine: "Italian",
  },
];

const chineseRestaurant = restaurants.find(
  (restaurant) => restaurant.cuisine === "Chinese",
);

console.log(chineseRestaurant);

// =========================
// Task 13, 14
// =========================

const myntraCart = [{ price: 500 }, { price: 1200 }, { price: 800 }];

const totalCartPrice = myntraCart
  .map((item) => item.price)
  .reduce((sum, price) => sum + price, 0);

console.log(totalCartPrice);

// =========================
// Task 15
// =========================

const transactions = [{ amount: 1000 }, { amount: 2500 }, { amount: 700 }];

const totalSpent = transactions
  .map((transaction) => transaction.amount)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalSpent);
