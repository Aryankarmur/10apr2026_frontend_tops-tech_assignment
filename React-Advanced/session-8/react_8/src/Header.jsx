import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Header() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <>
      <h1>Current Theme: {state.theme}</h1>

      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_THEME" })
        }
      >
        Toggle Theme
      </button>
    </>
  );
}
export default Header