//  Task 1,2

export function generateOrderId() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

// Task 3

export function formatPrice(price) {
  return `₹${price.toFixed(2)}`;
}

export function getDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

// Task 9

export function formatPrice(price) {
  return `₹${price.toFixed(2)}`;
}

export default function getDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}
