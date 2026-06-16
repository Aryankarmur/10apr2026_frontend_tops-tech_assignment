import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "../assets/css/LikeButton.css"

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleLikes = ()=>{
    setCount(count + 1);
  }

  return (
    <div className="like">
     <button onClick={handleLikes}> <FaHeart /> </button>
      {count} Likes
    </div>
  );
};

export default LikeButton;
