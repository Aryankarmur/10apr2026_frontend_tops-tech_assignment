// =========================
// Task 1, 2, 3, 4, 5, 6, 12
// =========================

class Playlist {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  displayPlaylist() {
    console.log(`Playlist: ${this.name}\nSongs: ${this.songs.join(", ")}`);
  }

  getSongCount() {
    return this.songs.length;
  }

  addSong(songName) {
    this.songs.push(songName);
  }
}

const myPlaylist = new Playlist("Chill Vibes", [
  "Perfect",
  "Believer",
  "Heat Waves",
]);

console.log(myPlaylist);

myPlaylist.displayPlaylist();

console.log("Song Count:", myPlaylist.getSongCount());

myPlaylist.addSong("Levitating");
myPlaylist.addSong("Blinding Lights");

myPlaylist.displayPlaylist();

// =========================
// Task 7, 8, 9, 13
// =========================

class FlipkartProduct {
  constructor(title, price, rating) {
    this.title = title;
    this.price = price;
    this.rating = rating;
  }

  getDiscountedPrice(discountPercent) {
    return this.price - (this.price * discountPercent) / 100;
  }

  showProductInfo() {
    console.log(`${this.title} - ₹${this.price} - ${this.rating}⭐`);
  }
}

const mobile = new FlipkartProduct("Redmi Note 12 Pro", 18999, 4.5);

console.log("Discounted Price:", mobile.getDiscountedPrice(10));

mobile.showProductInfo();

// =========================
// Task 10, 11
// =========================

class Movie {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }

  display() {
    console.log(`${this.title} - ${this.genre}`);
  }
}

const movie = new Movie("Jawan", "Action");

movie.display();
