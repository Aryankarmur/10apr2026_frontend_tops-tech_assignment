import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchRestaurants } from "../features/restaurants/restaurantSlice";

function RestaurantList() {
  const dispatch = useDispatch();

  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurants
  );

  const [city, setCity] = useState("");

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(fetchRestaurants(city));
  };

  return (
    <div
      style={{
        width: "600px",
        margin: "30px auto",
      }}
    >
      <h2>Restaurant Finder</h2>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <hr />

      {loading && <h3>Loading Restaurants...</h3>}

      {error && (
        <h3 style={{ color: "red" }}>
          Error: {error}
        </h3>
      )}

      {!loading &&
        !error &&
        restaurants.map((restaurant, index) => (
          <div key={restaurant.id || index}>
            <h4>{restaurant.name}</h4>

            <p>
              <strong>City:</strong>{" "}
              {restaurant.city || "Unknown"}
            </p>

            <hr />
          </div>
        ))}

      {!loading &&
        !error &&
        restaurants.length === 0 && (
          <h3>No Restaurants Found</h3>
        )}
    </div>
  );
}

export default RestaurantList;