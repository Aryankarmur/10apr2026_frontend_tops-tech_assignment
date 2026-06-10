// =========================
// Task 1, 2, 3
// =========================

const playlists = [
  {
    name: "Top Hits",
    creator: "Aryan",
    numberOfSongs: 25,
    genre: "Pop",
  },
  {
    name: "Workout Mix",
    creator: "Rahul",
    numberOfSongs: 18,
    genre: "EDM",
  },
  {
    name: "Chill Vibes",
    creator: "Priya",
    numberOfSongs: 30,
    genre: "Lo-fi",
  },
];

console.log(playlists);

// =========================
// Task 4, 5
// =========================

playlists.push({
  name: "Road Trip",
  creator: "Neha",
  numberOfSongs: 22,
});

console.log("After Push:");
console.log(playlists);

// =========================
// Task 6
// =========================

playlists.push({
  name: "Rock Legends",
  creator: "Aryan",
  numberOfSongs: 15,
  genre: "Rock",
});

console.log("After Push:");
console.log(playlists);

playlists.pop();

console.log("After Pop:");
console.log(playlists);

// =========================
// Task 7, 8
// =========================

const removedPlaylist = playlists.pop();

console.log("Removed Playlist:");
console.log(removedPlaylist);

console.log("Remaining Playlists:");
console.log(playlists);

// =========================
// Task 9
// =========================

const cart = [
  {
    productName: "Laptop",
    price: 50000,
    quantity: 1,
  },
  {
    productName: "Mouse",
    price: 500,
    quantity: 2,
  },
  {
    productName: "Keyboard",
    price: 1500,
    quantity: 1,
  },
  {
    productName: "Monitor",
    price: 12000,
    quantity: 2,
  },
];

for (let product of cart) {
  console.log(`${product.productName} : ₹${product.price * product.quantity}`);
}

// =========================
// Task 10, 11
// =========================

playlists.splice(1, 1, {
  name: "Party Mix",
  creator: "Karan",
  numberOfSongs: 40,
  genre: "Dance",
});

console.log("After Splice:");
console.log(playlists);

// =========================
// Task 12
// =========================

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: {
      imdb: 8.8,
      rottenTomatoes: "87%",
    },
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: {
      imdb: 8.7,
      rottenTomatoes: "73%",
    },
  },
  {
    title: "Avengers",
    year: 2019,
    rating: {
      imdb: 8.4,
      rottenTomatoes: "94%",
    },
  },
];

for (let movie of movies) {
  console.log(`${movie.title} - IMDb: ${movie.rating.imdb}`);
}

// =========================
// Task 13, 14
// =========================

const orders = [
  {
    orderId: 101,
    items: [
      {
        itemName: "Pizza",
        price: 250,
      },
      {
        itemName: "Burger",
        price: 150,
      },
    ],
    delivery: {
      address: "Ahmedabad",
      status: "Delivered",
    },
  },

  {
    orderId: 102,
    items: [
      {
        itemName: "Pasta",
        price: 300,
      },
      {
        itemName: "Coke",
        price: 50,
      },
    ],
    delivery: {
      address: "Rajkot",
      status: "Pending",
    },
  },
];

for (let order of orders) {
  let total = 0;

  for (let item of order.items) {
    total += item.price;
  }

  console.log(`Order ID: ${order.orderId}, Total Price: ₹${total}`);
}

// =========================
// Task 15
// =========================

const favApps = [
  {
    title: "YouTube",
    url: "youtube.com",
  },
  {
    title: "Instagram",
    url: "instagram.com",
  },
  {
    title: "Facebook",
    url: "facebook.com",
  },
  {
    title: "Spotify",
    url: "spotify.com",
  },
  {
    title: "WhatsApp",
    url: "whatsapp.com",
  },
];

favApps.splice(2, 1, {
  title: "ChatGPT",
  url: "chatgpt.com",
});

console.log("Updated Apps:");
console.log(favApps);
