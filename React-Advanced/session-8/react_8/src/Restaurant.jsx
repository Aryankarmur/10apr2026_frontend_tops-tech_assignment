import { useContext } from "react";
import { FavoritesContext } from "./context/FavoritesContext";
import { UserContext } from "./context/UserContext";

function Restaurant() {
  const user = useContext(UserContext);
  const { favorites, dispatch } = useContext(FavoritesContext);

  return (
    <>
      <h2>{user.name}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: 101,
          })
        }
      >
        Add Restaurant
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE",
            payload: 101,
          })
        }
      >
        Remove Restaurant
      </button>

      <p>Favorites: {favorites.join(", ") || "None"}</p>
    </>
  );
}

export default Restaurant