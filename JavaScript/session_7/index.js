// =========================
// Task 1, 2
// =========================

function songAdded() {
  alert("Song added!");
}


// =========================
// Task 3
// =========================

const songs = [
  "Believer",
  "Perfect",
  "Heat Waves",
  "Levitating"
];

function addSongCard() {
  const card = document.createElement("div");

  card.className = "card";

  const randomSong =
    songs[Math.floor(Math.random() * songs.length)];

  card.textContent = randomSong;

  document
    .getElementById("song-cards")
    .appendChild(card);
}


// =========================
// Task 4, 5
// =========================

function logUsername(input) {
  console.log(input.value);
}


// =========================
// Task 6
// =========================

function showCuisine() {
  const cuisine =
    document.getElementById("cuisine").value;

  document.getElementById(
    "cuisine-msg"
  ).textContent =
    `Selected Cuisine: ${cuisine}`;
}


// =========================
// Task 7, 8
// =========================

let likes = 0;

const likeBtn =
  document.getElementById("like-btn");

likeBtn.addEventListener(
  "click",
  () => {
    likes++;

    likeBtn.textContent =
      `❤️ Like (${likes})`;
  }
);


// =========================
// Task 9
// =========================

function addToCart(productName) {
  const li =
    document.createElement("li");

  li.textContent = productName;

  document
    .querySelector("#cart")
    .appendChild(li);
}

document
  .querySelector("#cart-btn")
  .addEventListener(
    "click",
    () => addToCart("Laptop")
  );


// =========================
// Task 10, 11
// =========================

document
  .querySelectorAll(".remove-btn")
  .forEach((btn) => {

    btn.addEventListener(
      "click",
      () => {

        btn.parentElement.remove();
      }
    );
  });


// =========================
// Task 12
// =========================

document
  .getElementById("click-area")
  .addEventListener(
    "click",
    (event) => {

      document.getElementById(
        "coordinates"
      ).textContent =
        `X: ${event.clientX}, Y: ${event.clientY}`;
    }
  );


// =========================
// Task 13, 14
// =========================

const flipkartBtn =
  document.getElementById(
    "flipkart-cart"
  );

function logEvent(event) {

  console.log(
    `Type: ${event.type}`
  );

  console.log(
    `X: ${event.clientX}`
  );

  console.log(
    `Y: ${event.clientY}`
  );
}

flipkartBtn.addEventListener(
  "click",
  logEvent
);

flipkartBtn.addEventListener(
  "mouseover",
  logEvent
);


// =========================
// Task 15
// =========================

/*
Event Flow is the order in which events
travel through the DOM. It consists of
capturing phase, target phase, and
bubbling phase.

Example:
If a user clicks an "Add to Cart" button
inside a product card, the click event
can bubble up to the parent product card.
This may trigger both the button click
handler and the card click handler unless
event propagation is controlled.
*/