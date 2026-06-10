//  Task 10,11

export function addToCart(cart, item) {
  cart.push(item);
}

export function removeFromCart(cart, itemName) {
  return cart.filter((item) => item.name !== itemName);
}

export function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}
