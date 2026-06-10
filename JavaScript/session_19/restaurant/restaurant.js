const restaurants = [];

let editIndex = -1;

const form = document.getElementById("restaurant-form");

const restaurantList = document.getElementById("restaurant-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("restaurant-name").value;

  const cuisine = document.getElementById("cuisine").value;

  const rating = document.getElementById("rating").value;

  if (editIndex === -1) {
    restaurants.push({
      name,
      cuisine,
      rating,
    });
  } else {
    restaurants[editIndex] = {
      name,
      cuisine,
      rating,
    };

    editIndex = -1;
  }

  renderRestaurants();

  form.reset();
});

function renderRestaurants() {
  restaurantList.innerHTML = "";

  restaurants.forEach((restaurant, index) => {
    restaurantList.innerHTML += `
        <div class="playlist-card">

          <h3>
            ${restaurant.name}
          </h3>

          <p>
            Cuisine:
            ${restaurant.cuisine}
          </p>

          <p>
            Rating:
            ${restaurant.rating}
          </p>

          <button onclick="editRestaurant(${index})">
            Edit
          </button>

          <button onclick="deleteRestaurant(${index})">
            Delete
          </button>

        </div>
      `;
  });
}

function deleteRestaurant(index) {
  restaurants.splice(index, 1);

  renderRestaurants();
}

function editRestaurant(index) {
  document.getElementById("restaurant-name").value = restaurants[index].name;

  document.getElementById("cuisine").value = restaurants[index].cuisine;

  document.getElementById("rating").value = restaurants[index].rating;

  editIndex = index;
}
