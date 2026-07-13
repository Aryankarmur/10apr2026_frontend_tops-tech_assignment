import { useEffect, useState } from "react";
import { db } from "./firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
import Filter from "./components/Filter";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filter, setFilter] = useState("");

  const loadRestaurants = async () => {
    const snapshot = await getDocs(
      collection(db, "restaurants")
    );

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setRestaurants(data);
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const filteredRestaurants =
    restaurants.filter((restaurant) =>
      restaurant.cuisine
        .toLowerCase()
        .includes(filter.toLowerCase())
    );

  return (
    <div style={{ padding: 20 }}>
      <RestaurantForm
        loadRestaurants={loadRestaurants}
      />

      <hr />

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <hr />

      <RestaurantList
        restaurants={filteredRestaurants}
      />
    </div>
  );
}

export default App;