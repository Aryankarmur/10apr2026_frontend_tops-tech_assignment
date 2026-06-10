// =========================
// Task 1, 2
// =========================

let product = {
  name: "Samsung Galaxy S24",
  price: 79999,
  rating: 4.6,
};

let productJson = JSON.stringify(product);

console.log(productJson);


// =========================
// Task 3
// =========================

let apps = [
  "Zomato",
  "Swiggy",
  "Domino's",
];

let appsJson = JSON.stringify(apps);

console.log(appsJson);


// =========================
// Task 4, 5
// =========================

function getChannelNames(jsonString) {
  let channels = JSON.parse(jsonString);

  let names = [];

  for (let channel of channels) {
    names.push(channel.name);
  }

  return names;
}

let channelData = `
[
  {"name":"CodeWithHarry"},
  {"name":"Apna College"},
  {"name":"Traversy Media"}
]
`;

console.log(getChannelNames(channelData));


// =========================
// Task 6
// =========================

let recentSearches = [];

function saveRecentSearch(query) {
  recentSearches.push(query);

  localStorage.setItem(
    "recentSearches",
    JSON.stringify(recentSearches)
  );
}

saveRecentSearch("Biryani");
saveRecentSearch("Sneakers");


// =========================
// Task 7, 8
// =========================



let restaurants =
  JSON.parse(
    localStorage.getItem("restaurants")
  ) || [];

function displayRestaurants() {
  let list =
    document.getElementById(
      "restaurantList"
    );

  if (!list) return;

  list.innerHTML = "";

  restaurants.forEach((restaurant) => {
    let li =
      document.createElement("li");

    li.textContent = restaurant;

    list.appendChild(li);
  });
}

function addRestaurant() {
  let input =
    document.getElementById(
      "restaurantInput"
    );

  if (
    restaurants.length < 3 &&
    input.value.trim() !== ""
  ) {
    restaurants.push(input.value);

    localStorage.setItem(
      "restaurants",
      JSON.stringify(restaurants)
    );

    displayRestaurants();

    input.value = "";
  }
}

window.addEventListener(
  "load",
  displayRestaurants
);


// =========================
// Task 9
// =========================

function getRecentSearches() {
  let data =
    localStorage.getItem(
      "recentSearches"
    );

  if (data === null) {
    return [];
  }

  return JSON.parse(data);
}

console.log(
  getRecentSearches()
);


// =========================
// Task 10, 11
// =========================



function clearFavorites() {
  localStorage.removeItem(
    "restaurants"
  );

  restaurants = [];

  displayRestaurants();
}


// =========================
// Task 12
// =========================



let wishlist = [
  {
    name: "Laptop",
    price: 50000,
  },
  {
    name: "Keyboard",
    price: 1500,
  },
  {
    name: "Mouse",
    price: 500,
  },
];

if (
  !localStorage.getItem(
    "wishlist"
  )
) {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );
}

function displayWishlist() {
  let savedWishlist =
    JSON.parse(
      localStorage.getItem(
        "wishlist"
      )
    ) || [];

  let list =
    document.getElementById(
      "wishlist"
    );

  if (!list) return;

  list.innerHTML = "";

  savedWishlist.forEach(
    (product) => {
      let li =
        document.createElement("li");

      li.textContent =
        product.name +
        " - ₹" +
        product.price;

      list.appendChild(li);
    }
  );
}

window.addEventListener(
  "load",
  displayWishlist
);


// =========================
// Task 13, 14
// =========================

// Problem:
// localStorage.setItem(
//   "movies",
//   movies
// );
//
// movies is stored as a normal string:
// "Jawan,Pathaan,Dunki"
//
// JSON.parse() cannot parse it.

// Correct Code:

let movies = [
  "Jawan",
  "Pathaan",
  "Dunki",
];

localStorage.setItem(
  "movies",
  JSON.stringify(movies)
);

let saved =
  localStorage.getItem(
    "movies"
  );

let arr =
  JSON.parse(saved);

console.log(arr);


// =========================
// Task 15
// =========================



function clearWishlist() {
  localStorage.removeItem(
    "wishlist"
  );

  let list =
    document.getElementById(
      "wishlist"
    );

  if (list) {
    list.innerHTML = "";
  }
}