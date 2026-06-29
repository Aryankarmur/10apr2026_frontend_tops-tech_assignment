import { useEffect, useState } from "react";
import axios from "axios";

function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search)
  );

  return (
    <div>
      <h2>Restaurant Search</h2>

      <input
        type="text"
        placeholder="Search Restaurant"
        value={search}
        onChange={(e) => setSearch((e.target.value).toLowerCase())}
      />

      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantSearch;