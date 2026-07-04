import useLikeButton from "../hooks/useLikeButton";

function PostCard() {
  const { liked, likes, toggleLike } = useLikeButton(120);

  return (
    <div>
      <img
        src="https://picsum.photos/300"
        alt="Post"
      />

      <h3>{likes} Likes</h3>

      <button onClick={toggleLike}>
        {liked ? "❤️ Unlike" : "🤍 Like"}
      </button>
    </div>
  );
}

export default PostCard;