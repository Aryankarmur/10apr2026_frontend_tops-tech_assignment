import { createContext, useReducer, useMemo } from "react";

export const AuthContext = createContext();

const initialState = {
  isLoggedIn: false,
  user: {
    displayName: "Guest",
  },
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };

    case "LOGOUT":
      return { ...state, isLoggedIn: false };

    case "UPDATE_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.payload,
        },
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}