import { useState } from "react";

function useLikeButton(initialLikes = 0) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  function toggleLike() {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }

    setLiked((prev) => !prev);
  }

  return {
    liked,
    likes,
    toggleLike,
  };
}

export default useLikeButton;