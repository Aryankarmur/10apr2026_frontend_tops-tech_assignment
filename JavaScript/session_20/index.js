// Task 1,2,3
// Same product was added multiple times.
// Cart count increased every click.

// fix:
const addToCart = (product) => {
  const exists = cart.find(
    (item) => item.id === product.id
  );

  if (!exists) {
    setCart([...cart, product]);
  }
};

// Product added only once.
// Cart count updates correctly.

// Task 9
function addFollower(name) {
  if (
    name &&
    name.trim()
  ) {
    followers.push(
      name.trim()
    );
  }
}

// Task 10,11
const bugs = [
  "Duplicate cart items",
  "Empty form submission",
  "Cart count not updating",
  "Invalid ratings",
  "UI overflow issues",
];

console.table(bugs);