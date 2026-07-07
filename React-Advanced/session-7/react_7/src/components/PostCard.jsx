import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function PostCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        background: theme === "dark" ? "#333" : "#f4f4f4",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h3>Post Card</h3>
      <p>This component is 3 levels deep.</p>
    </div>
  );
}

export default PostCard;