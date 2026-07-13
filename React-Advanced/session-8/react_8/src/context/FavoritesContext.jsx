import { createContext, useReducer, useMemo } from "react";

export const FavoritesContext = createContext();

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state.includes(action.payload)
        ? state
        : [...state, action.payload];

    case "REMOVE":
      return state.filter((id) => id !== action.payload);

    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const value = useMemo(
    () => ({ favorites, dispatch }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}