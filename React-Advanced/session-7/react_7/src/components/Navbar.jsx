
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "15px",
        background: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h2>Navbar</h2>
    </nav>
  );
}

export default Navbar;