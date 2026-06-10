// Task 12

import {
  addWishlistItem,
  removeWishlistItem,
  listWishlist,
} from "./wishlistUtils.js";

let wishlist = [];

addWishlistItem(wishlist, {
  name: "iPhone",
});

wishlist = removeWishlistItem(wishlist, "iPhone");

console.log(listWishlist(wishlist));
