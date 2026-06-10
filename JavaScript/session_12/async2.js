// =========================
// Task 1, 2, 3
// =========================

fetch(
  "https://jsonplaceholder.typicode.com/posts"
)
  .then((response) => response.json())
  .then((posts) => {
    posts
      .slice(0, 5)
      .forEach((post) => {
        console.log(post.title);
      });
  });


// =========================
// Task 4, 5
// =========================

function fetchTopMovies() {

  fetch(
    "https://jsonplaceholder.typicode.com/albums"
  )
    .then((response) =>
      response.json()
    )
    .then((movies) => {

      movies
        .slice(0, 3)
        .forEach((movie) => {

          console.log(
            "Trending Movie:",
            movie.title
          );

        });

    });

}

fetchTopMovies();


// =========================
// Task 6
// =========================

fetch(
  "https://jsonplaceholder.typicode.com/posts",
  {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json",
    },

    body: JSON.stringify({
      title: "My First Post",
      body: "Learning Fetch API",
    }),
  }
)
  .then((response) =>
    response.json()
  )
  .then((data) => {

    console.log(data);

    if (data.id) {
      console.log(
        "ID exists:",
        data.id
      );
    }

  });


// =========================
// Task 7, 8
// =========================

function addNewPlaylist() {

  fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        name: "Workout Mix",
        description:
          "Best gym songs",
      }),
    }
  )
    .then((response) =>
      response.json()
    )
    .then((data) => {
      console.log(data);
    });

}

addNewPlaylist();


// =========================
// Task 9
// =========================

fetch(
  "https://jsonplaceholder.typicode.com/users"
)
  .then((response) =>
    response.json()
  )
  .then((users) => {

    const emails =
      users.map(
        (user) => user.email
      );

    alert(
      emails.join(", ")
    );

  });


// =========================
// Task 10, 11
// =========================

let userName = "";

fetch(
  "https://jsonplaceholder.typicode.com/users/2"
)
  .then((response) =>
    response.json()
  )
  .then((user) => {

    userName = user.name;

    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );

  })
  .then((response) =>
    response.json()
  )
  .then((posts) => {

    console.log(
      "User:",
      userName
    );

    posts.forEach((post) => {
      console.log(post.title);
    });

  });


// =========================
// Task 12, 13, 14
// =========================

/*
Explanation:

1. The browser sends a GET request
   to the server.

2. The server responds with JSON data,
   which appears in the Network tab
   along with status code, headers,
   request details, and response data.

Screenshot are in image folder
*/


// =========================
// Task 15
// =========================

fetch(
  "https://jsonplaceholder.typicode.com/albums"
)
  .then((response) =>
    response.json()
  )
  .then((albums) => {

    albums
      .filter(
        (album) =>
          album.userId === 2
      )
      .forEach((album) => {

        console.log(
          album.title
        );

      });

  });