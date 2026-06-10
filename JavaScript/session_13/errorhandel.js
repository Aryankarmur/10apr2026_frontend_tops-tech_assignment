// =========================
// Task 1, 2
// =========================

function validateSpotifyURL(url) {
  if (
    !url.startsWith(
      "https://open.spotify.com/"
    )
  ) {
    throw new Error(
      "Invalid Spotify URL"
    );
  }

  return "Valid URL";
}

try {
  console.log(
    validateSpotifyURL(
      "https://spotify.com"
    )
  );
} catch (error) {
  console.log(error.message);
}


// =========================
// Task 3
// =========================

function validateUsername(
  username
) {

  const pattern =
    /^[a-zA-Z0-9]+$/;

  if (
    !pattern.test(username)
  ) {
    throw new Error(
      "Invalid Username"
    );
  }

  return "Username Valid";
}

try {
  console.log(
    validateUsername(
      "Aryan@123"
    )
  );
} catch (error) {
  console.log(error.message);
}


// =========================
// Task 4, 5
// =========================

const productJson =
  '{"name":"Shoes","price":999}';

try {

  const product =
    JSON.parse(productJson);

  console.log(product);

} catch (error) {

  console.log(
    "Invalid product data"
  );

} finally {

  console.log(
    "Parsing attempt finished"
  );

}


// =========================
// Task 6
// =========================

function checkPlaylistURL(
  url
) {

  try {

    if (
      !url.startsWith(
        "https://open.spotify.com/"
      )
    ) {
      throw new Error(
        "Invalid Spotify URL"
      );
    }

    console.log(
      "URL Valid"
    );

  } catch (error) {

    console.log(
      error.message
    );

  } finally {

    console.log(
      "Validation complete"
    );

  }

}

checkPlaylistURL(
  "https://spotify.com"
);


// =========================
// Task 7, 8
// =========================

function checkPaymentAmount(
  amount
) {

  if (amount <= 0) {

    throw new Error(
      "Amount must be positive"
    );

  }

  return "Payment accepted";
}

try {

  console.log(
    checkPaymentAmount(
      -100
    )
  );

} catch (error) {

  console.log(
    error.message
  );

}


// =========================
// Task 9
// =========================

function getOrderTotal(
  items
) {

  try {

    let total = 0;

    for (
      let item of items
    ) {

      if (
        item.price < 0
      ) {

        throw new Error(
          "Invalid item price"
        );

      }

      total += item.price;
    }

    return total;

  } catch (error) {

    console.log(
      "Something went wrong:",
      error.message
    );

  }

}

console.log(
  getOrderTotal([
    {
      name: "Pizza",
      price: 300,
    },
    {
      name: "Burger",
      price: -50,
    },
  ])
);


// =========================
// Task 10, 11
// =========================

let user;

try {

  console.log(
    user.name
  );

} catch (error) {

  console.log(
    "User data not found"
  );

}


// =========================
// Task 12
// =========================

function formatFollowers(
  count
) {

  try {

    if (
      count < 0
    ) {

      throw new Error(
        "Negative count"
      );

    }

    return (
      count +
      " followers"
    );

  } catch (error) {

    return error.message;

  }

}

console.log(
  formatFollowers(-10)
);

console.log(
  formatFollowers(500)
);


// =========================
// Task 13, 14
// =========================

/*
Example Stack Trace:

Error: Invalid Spotify URL
    at validateSpotifyURL (script.js:10)
    at script.js:18

Summary:

The stack trace shows where
the error occurred and the
sequence of function calls
that led to the error.

The first line shows the
error message.

The remaining lines show
the file name and line
number where the error
was thrown.
*/


// =========================
// Task 15
// =========================

/*
Summary:

The error occurred because
an invalid URL was passed
to validateSpotifyURL().

The stack trace showed the
exact line where the Error
object was thrown, making
it easier to locate and
fix the issue.
*/

function testError() {

  throw new Error(
    "Custom Error Example"
  );

}

try {

  testError();

} catch (error) {

  console.log(
    error.stack
  );

}