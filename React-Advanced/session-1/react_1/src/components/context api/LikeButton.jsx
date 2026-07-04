import { useContext } from "react";
import UserContext from "./UserContext";


function LikeButton() {
  const user = useContext(UserContext);

  return (
    <button>
      Like by {user.name}
    </button>
  );
}

export default LikeButton;