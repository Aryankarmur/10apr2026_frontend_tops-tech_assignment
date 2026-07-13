import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function RestaurantForm({ loadRestaurants }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "restaurants"), {
      name,
      cuisine,
    });

    setName("");
    setCuisine("");

    loadRestaurants();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Restaurant</h2>

      <input
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />

      <br /><br />

      <button>Add Restaurant</button>
    </form>
  );
}

export default RestaurantForm;