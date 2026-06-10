//  Task 12

export function addWishlistItem(wishlist, item) {
  wishlist.push(item);
}

export function removeWishlistItem(wishlist, itemName) {
  return wishlist.filter((item) => item.name !== itemName);
}

export function listWishlist(wishlist) {
  return wishlist;
}
