// =========================
// Task 1,2,3
// =========================

const songList =
  document.getElementById(
    "song-list"
  );

songList.addEventListener(
  "click",
  function (event) {

    if (
      event.target.classList.contains(
        "remove-song"
      )
    ) {

      event.target
        .parentElement
        .remove();

    }

  }
);


// =========================
// Task 4,5,6,9
// =========================

const wishlist =
  document.getElementById(
    "wishlist"
  );

const addProduct =
  document.getElementById(
    "add-product"
  );

let count = 1;

addProduct.addEventListener(
  "click",
  function () {

    const card =
      document.createElement(
        "div"
      );

    card.className =
      "card";

    card.innerHTML = `
      Product ${count++}
      <button class="remove-btn">
        X
      </button>
    `;

    wishlist.appendChild(
      card
    );

  }
);

wishlist.addEventListener(
  "click",
  function (event) {

    if (
      event.target.classList.contains(
        "remove-btn"
      )
    ) {

      event.target
        .parentElement
        .remove();

    }

  }
);


// =========================
// Task 7,8
// =========================

/*
Bad:

document
  .querySelectorAll(".story")
  .forEach((card) => {
    card.addEventListener(
      "click",
      removeStory
    );
  });

Good:

parentContainer.addEventListener(
  "click",
  function(event){
    ...
  }
);
*/


// =========================
// Task 10,11
// =========================

const notifications =
  document.getElementById(
    "notifications"
  );

const addNotification =
  document.getElementById(
    "add-notification"
  );

let notificationCount = 1;

addNotification.addEventListener(
  "click",
  function () {

    const card =
      document.createElement(
        "div"
      );

    card.className =
      "notification";

    card.innerHTML = `
      Notification ${notificationCount++}
      <button class="dismiss-btn">
        Dismiss
      </button>
    `;

    notifications.appendChild(
      card
    );

  }
);

notifications.addEventListener(
  "click",
  function (event) {

    if (
      event.target.classList.contains(
        "dismiss-btn"
      )
    ) {

      const card =
        event.target
          .parentElement;

      card.classList.add(
        "fade-out"
      );

      setTimeout(
        () =>
          card.remove(),
        500
      );

    }

  }
);


// =========================
// Task 12
// =========================

/*
Buggy Code:

document
  .querySelectorAll(".remove-btn")
  .forEach(btn => {
    btn.addEventListener(
      "click",
      function() {
        this.parentElement.remove();
      }
    );
  });

Fixed:

parentContainer.addEventListener(
  "click",
  function(event) {

    if(
      event.target.classList.contains(
        "remove-btn"
      )
    ) {

      event.target
        .parentElement
        .remove();

    }

  }
);
*/