// =========================
// Task 1, 2
// =========================

setTimeout(() => {
  document.getElementById("feed").textContent =
    "Loading your feed...";

  setTimeout(() => {
    document.getElementById("feed").textContent =
      "Feed loaded!";
  }, 2000);

}, 2000);


// =========================
// Task 3
// =========================

console.log("Loading...");

setTimeout(() => {
  console.log("Content loaded!");
}, 2000);


// =========================
// Task 4, 5
// =========================

function placeOrder(item, callback) {

  setTimeout(() => {
    callback(
      `Your ${item} is being prepared`
    );
  }, 1000);

}

placeOrder(
  "Pizza",
  (message) => {
    console.log(message);
  }
);


// =========================
// Task 6
// =========================

function fetchSongLyrics(
  song,
  callback
) {

  setTimeout(() => {
    callback(
      `Lyrics for ${song}: La La La...`
    );
  }, 1000);

}

fetchSongLyrics(
  "Believer",
  (lyrics) => {
    console.log(lyrics);
  }
);


// =========================
// Task 7, 8
// =========================

const getFollowersCount =
  new Promise((resolve) => {

    setTimeout(() => {

      const followers =
        Math.floor(
          Math.random() * 4001
        ) + 1000;

      resolve(followers);

    }, 1000);

  });

getFollowersCount.then(
  (count) => {

    console.log(
      `You have ${count} new followers`
    );

  }
);


// =========================
// Task 9
// =========================

function getOrderStatus(
  orderId
) {

  return new Promise(
    (resolve, reject) => {

      setTimeout(() => {

        if (orderId % 2 === 0) {
          resolve(
            "Order delivered"
          );
        } else {
          reject(
            "Order not found"
          );
        }

      }, 1500);

    }
  );

}

getOrderStatus(2)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });


// =========================
// Task 10, 11
// =========================

const products = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];

// Callback Version

function searchProductsCallback(
  searchTerm,
  callback
) {

  setTimeout(() => {

    const result =
      products.filter(
        (product) =>
          product
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            )
      );

    callback(result);

  }, 1000);

}

searchProductsCallback(
  "lap",
  (result) => {
    console.log(
      "Callback Result:",
      result
    );
  }
);


// Promise Version

function searchProductsPromise(
  searchTerm
) {

  return new Promise(
    (resolve) => {

      setTimeout(() => {

        const result =
          products.filter(
            (product) =>
              product
                .toLowerCase()
                .includes(
                  searchTerm.toLowerCase()
                )
          );

        resolve(result);

      }, 1000);

    }
  );

}

searchProductsPromise("lap")
  .then((result) => {
    console.log(
      "Promise Result:",
      result
    );
  });


// =========================
// Task 12
// =========================

function paymentSuccess() {

  return new Promise(
    (resolve) => {

      setTimeout(() => {

        resolve(
          "Payment successful!"
        );

      }, 1000);

    }
  );

}

paymentSuccess()
  .then((message) => {
    console.log(message);
  });