import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function Auth() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <>
      <h2>Instagram Auth</h2>

      <p>{state.user.displayName}</p>

      <button onClick={() => dispatch({ type: "LOGIN" })}>
        Login
      </button>

      <button onClick={() => dispatch({ type: "LOGOUT" })}>
        Logout
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_NAME",
            payload: "Aryan Karmur",
          })
        }
      >
        Update Name
      </button>
    </>
  );
}

export default Auth